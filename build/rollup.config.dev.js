import path from 'node:path';
import serve from 'rollup-plugin-serve';
import configList from './rollup.config.js';

process.env.NODE_ENV = 'development';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const PORT = 3000;

const devSite = `http://127.0.0.1:${PORT}`;

setTimeout(()=>{
  console.log(`[dev]: ${devSite}`)
}, 1000);

configList.map((config, index) => {

  config.watch = {
    exclude: 'node_modules/**'
  }

  config.output.sourcemap = true;

  if( index === 0 ) {
    config.plugins = [
      ...config.plugins,
      ...[
        serve({
          port: PORT,
          contentBase: [resolveFile('./docs')]
        })
      ]
    ]
  }

  return config;
})


export default configList;