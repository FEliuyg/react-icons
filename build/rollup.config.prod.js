
import { uglify } from 'rollup-plugin-uglify'
import configList from './rollup.config.js'

process.env.NODE_ENV = 'production';

configList.map((config) => {
  config.output.sourcemap = false;
  config.plugins = [...config.plugins, ...[uglify()]];

  return config;
});

export default configList;
