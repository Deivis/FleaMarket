const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackDevConfig = require('./config/webpack.config.dev');
const paths = require('./config/utils').paths;

const runDev = (host, port) => {
  const compiler = webpack(webpackDevConfig);
  const devServer = new WebpackDevServer(compiler, {
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    hot: true,
    publicPath: webpackDevConfig.output.publicPath,
    quiet: false,
    stats: { colors: true },
    watchOptions: {
      ignored: /node_modules/,
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: `/${process.env.APP_NAME}/` },
      ],
    },
    https: true,
    host,
  });

  devServer.listen(port, (error) => {
    if (error) {
      console.log(error);
    }
    console.log(`Running at: ${host}:${port}${process.env.APP_NAME}`);
  });
};
const host = process.env.HOST || 'https://localhost';
const port = process.env.PORT || 3000;

runDev(host, port);
