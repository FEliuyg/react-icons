import path  from "node:path"
import { babel }  from "@rollup/plugin-babel"
import postcss  from "rollup-plugin-postcss"
import { nodeResolve }  from "@rollup/plugin-node-resolve"
import commonjs  from "@rollup/plugin-commonjs"
import replace  from "@rollup/plugin-replace"
import copy  from "rollup-plugin-copy"
import json  from "@rollup/plugin-json"

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const resolveFile = function(filePath) {
  return path.join(__dirname, "..", filePath);
};

const babelOptions = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};

export default [
  {
    input: resolveFile("src/main.js"),
    output: {
      file: resolveFile("docs/index.js"),
      format: "umd",
    },
    plugins: [
      copy({
        targets: [
          { src: resolveFile("public/**/*"), dest: resolveFile("docs") },
        ],
      }),
      postcss(),
      nodeResolve(),
      commonjs({
        exclude: "src/**",
      }),
      babel(babelOptions),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        preventAssignment: true
      }),
      json(),
    ],
  },
];
