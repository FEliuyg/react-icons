import { join, resolve } from "node:path";
import got from "got";
import fsExtra from "fs-extra";
import Figma from "figma-js";
import PQueue from "p-queue";
import dotenv from 'dotenv';

dotenv.config();

const { FIGMA_TOKEN, FIGMA_FILE_URL } = process.env;

if (!FIGMA_TOKEN) {
  throw Error("Cannot find FIGMA_TOKEN in process!");
}

if (!FIGMA_FILE_URL) {
  throw Error("Cannot find FIGMA_FILE_URL in process!");
}

const figmaFileUrlReg = /https:\/\/www\.figma\.com\/[a-z]+\/([a-z0-9]+)\/[^?]+\?node-id=([0-9]+\-[0-9]+)/i
const iconFrameNameReg = /(outlined|filled|colored)$/i;
if (!figmaFileUrlReg.test(FIGMA_FILE_URL)) {
  throw Error("FIGMA_FILE_URL is not a valid Figma file URL!");
}

const outputDir = './src/';

console.log(`Start to export ${FIGMA_FILE_URL} components`);

const client = Figma.Client({
  personalAccessToken: FIGMA_TOKEN,
});

const fileKey: string =  FIGMA_FILE_URL.match(figmaFileUrlReg)![1];
const nodeId: string =  FIGMA_FILE_URL.match(figmaFileUrlReg)![2].replace(/-/g, ":");

client
  .file(fileKey, {
    ids: [nodeId]
  })
  .then(({ data }) => getComponentsFromFigmaData(data))
  .then(isComponentsNameStandard)
  .then(hasDuplicateComponents)
  .then(addSvgUrlToComponents)
  // .then(writeComponentsData)
  .then(downloadComponents)
  .catch((error) => {
    throw Error(`Error fetching components from Figma: ${error}`);
  });

function queueTasks(tasks, options?) {
  const queue = new PQueue(Object.assign({ concurrency: 3 }, options));
  for (const task of tasks) {
    queue.add(task);
  }
  queue.start();
  return queue.onIdle();
}

function getIconType(name: string) {
  let matches = name.match(iconFrameNameReg);
  if (matches) {
    return matches[1].toUpperCase();
  } else {
    return null;
  }
}

interface IconInfo {
  id: string;
  key: string;
  name: string;
  type: string;
  componentName: string;
  image?: string;
}

function getComponentsFromFigmaData(data: Figma.FileResponse) {
  const icons: Record<string, IconInfo> = {};

  function check(figmaNode: Figma.Node, iconType: string | null) {
    if(iconType === null) {
      return;
    }
    
    if (figmaNode.type === "COMPONENT") {
      const { name, id } = figmaNode;
      const { key } = data.components[id];

      icons[id] = {
        name,
        componentName: `${name}${iconType}`,
        id,
        key,
        type: iconType,
      };
    } else if ('children' in figmaNode) {
      figmaNode.children.forEach((item) => check(item, iconType));
    }
  }

 
  const pages = (data.document.children as Figma.Canvas[]).filter((d) => d.children.length > 0);
  if(pages.length !== 1) {
    throw Error(`The node-id in ${FIGMA_FILE_URL} is not page id`);
  }

  const iconPage = pages[0];
  // filter page that is contain icon and frame is end with outlined 、 filled or colored
  const iconFrames = iconPage.children.filter(
      (d) => iconFrameNameReg.test(d.name) && d.type === "FRAME"
    );
  iconFrames.forEach((item) => check(item, getIconType(item.name)));

  if (Object.values(icons).length === 0) {
    throw Error("No icons found!");
  }

  console.log(
    `${Object.values(icons).length} icons found in the figma file`
  );

  return icons;
}

async function addSvgUrlToComponents(components: Record<string, IconInfo>) {
  return client
    .fileImages(fileKey, {
      format: "svg",
      scale: 1,
      ids: Object.keys(components),
    })
    .then(({ data }) => {
      for (const id of Object.keys(data.images)) {
        components[id].image = data.images[id];
      }
      return components;
    });
}

function writeComponentsData(components: Record<string, IconInfo>) {
  return fsExtra.ensureDir(join(outputDir))
    .then(() =>
      fsExtra.writeFile(
        resolve(outputDir, "../data.json"),
        JSON.stringify(components, null, 2),
        "utf8"
      )
    )
    .then(() => components);
}

async function downloadComponents(components: Record<string, IconInfo>) {
  return queueTasks(
    Object.values(components).map((component) => () => {
      if(!component.image) {
        return
      }

      return got
        .get(component.image, {
          headers: {
            "Content-Type": "image/svg+xml",
          },
          encoding: "utf8",
        })
        .then((response) => {
          return fsExtra.ensureDir(join(outputDir, "svg")).then(() =>
            fsExtra.writeFile(
              join(outputDir, "svg", `${component.componentName}.svg`),
              response.body,
              "utf8"
            )
          );
        })
        .catch((err) => {
          console.error(err);
        });
    })
  ).then(() => {
    console.log("all components download successfully");
  });
}

function hasDuplicateComponents(components: Record<string, IconInfo>) {
  let duplicatedComponents = filterDuplicatedComponents(components);
  if (duplicatedComponents.length > 0) {
    throw Error(
      "these components is duplicated:" + JSON.stringify(duplicatedComponents)
    );
  } else {
    return components;
  }
}

function filterDuplicatedComponents(components: Record<string, IconInfo>) {
  const componentsArr = Object.values(components);
  const result: string[] = [];
  const iconNamesMap = new Set();

  for (let i = 0; i < componentsArr.length; i++) {
      if (iconNamesMap.has(componentsArr[i].componentName)) {
        result.push(`${componentsArr[i].name} in ${componentsArr[i].type}`);
      } else {
        iconNamesMap.add(componentsArr[i].componentName);
      }
  }

  return Array.from(new Set(result));
}

function isComponentsNameStandard(components: Record<string, IconInfo>) {
  const nonStandardComponents = Object.values(components)
    .filter((d) => !/^[A-Z][0-9a-zA-Z]+$/.test(d.name));

  if (nonStandardComponents.length > 0) {
    throw Error(
      "these component's name is not standard:" +
        JSON.stringify(nonStandardComponents.map(d => d.name))
    );
  } else {
    return components;
  }
}
