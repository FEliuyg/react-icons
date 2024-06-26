import babel from '@rollup/plugin-babel';
import path from 'path';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath);
};

export default {
  input: 'src/icons.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
  ],
  external: ['react'],
  plugins: [
    copy({
      targets: [{ src: resolveFile('src/icons.d.ts'), dest: resolveFile('dist/') }],
    }),
    babel({
      presets: ['@babel/preset-react']
    }),
    postcss(),
  ],
};
