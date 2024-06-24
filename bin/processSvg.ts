import svgo from "svgo";
import * as cheerio from "cheerio";

function CamelCase(str: string) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
}


function optimize(svg: string, type: string) {
  const result = svgo.optimize(svg, {
    plugins: type === "colored" ? [] : [{ name: 'removeAttrs', params: { attrs: "(fill|stroke)" } }],
  });

  return result.data;
}

function removeSVGElement(svg: string) {
  const $ = cheerio.load(svg);
  return $("body")
    .children()
    .html();
}

export default function processSvg(svg: string, type: string) {
  let optimizedSvg = optimize(svg, type).replace(/;/g, "")
    
  return removeSVGElement(optimizedSvg)?.replace(/-([a-z]+)(?=(-|=))/g, (_, a) => `${CamelCase(a)}`);
}
