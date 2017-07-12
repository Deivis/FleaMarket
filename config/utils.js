require('dotenv').config();

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .filter(folder => !path.isAbsolute(folder))
  .map(resolveApp);

const stringfiedEnv = {
  'process.env': Object
    .keys(process.env)
    .reduce((env, key) => Object.assign({}, env, { [key]: JSON.stringify(process.env[key]) }), {}),
};

module.exports = {
  paths: {
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appIndexJs: resolveApp('src/main.jsx'),
    appSrc: resolveApp('src'),
    appNodeModules: resolveApp('node_modules'),
    nodePaths,
  },
  stringfiedEnv,
};
