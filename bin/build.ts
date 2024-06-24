import fsExtra from 'fs-extra';
import path from 'path';
import prettier  from 'prettier';
import { transform } from '@svgr/core'
import icons from '../cache.json';
import processSvg from './processSvg';
import { getAttrs, getElementCode, initialContextCode, initialTypeDefinitions } from './template';

const rootDir = path.join(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const svgsDir = path.join(rootDir, 'src/svg');
const iconsDir = path.join(rootDir, 'src/react-icons');

// generate icons.js and icons.d.ts file
const generateIconsIndex = () => {
  fsExtra.writeFileSync(path.join(srcDir, 'icons.js'), initialContextCode, 'utf-8');
  fsExtra.writeFileSync(path.join(srcDir, 'icons.d.ts'), initialTypeDefinitions, 'utf-8');
};

// generate attributes code
function attrsToString (attrs: Record<string, string>) {
  return Object.keys(attrs)
    .map((key) => {
      return key + '="' + attrs[key] + '"';
    })
    .join(' ');
};

function getIconType(componentName: string) {
  let type = 'outlined';
  if (componentName.endsWith('Filled')) {
    type = 'filled';
  } else if (componentName.endsWith('Colored')) {
    type = 'colored';
  }

  return type
}

// generate icon code separately
const generateIconCode = async (componentName: string) => {
  const iconType = getIconType(componentName);

  const code = fsExtra.readFileSync(path.join(svgsDir, `${componentName}.svg`)).toString();
  const svgCode = processSvg(code, iconType);
  if(!svgCode) {
    return;
  }

  const element = getElementCode(componentName, attrsToString(getAttrs(iconType)), svgCode);
  const component = await prettier.format(element, {
    bracketSpacing: true,
    singleQuote: true,
    parser: 'babel'
  });

  fsExtra.ensureDir(iconsDir);
  fsExtra.writeFileSync(path.join(iconsDir, `${componentName}.js`), component, 'utf-8');

  console.log('Successfully built', componentName);
  return { componentName };
};

// append export code to icons.js
const appendToIconsIndex = ({ componentName }) => {
  const exportString = `export { default as ${componentName} } from './react-icons/${componentName}';\r\n`;
  fsExtra.appendFileSync(path.join(rootDir, 'src', 'icons.js'), exportString, 'utf-8');

  const exportTypeString = `export const ${componentName}: Icon;\n`;
  fsExtra.appendFileSync(path.join(rootDir, 'src', 'icons.d.ts'), exportTypeString, 'utf-8');
};

// first: generate icons.js and icons.d.ts file
generateIconsIndex();

// second: generate icon code separately
Object.values(icons).forEach(async ({ componentName }) => {
  await generateIconCode(componentName);
  appendToIconsIndex({ componentName });
});
