require('dotenv').config();
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = require('./utils').paths;

const publicPath = `${process.env.APP_NAME || ''}/`;
const stringEnv = {
  'process.env': Object
    .keys(process.env)
    .reduce((env, key) => Object.assign({}, env, { [key]: JSON.stringify(process.env[key]) }), {})
};

const cssFilename = 'static/css/[name].[contenthash:8].css';

const extractSass = new ExtractTextPlugin({
  filename: cssFilename,
  allChunks: true,
});

module.exports = {
  bail: true,
  entry: [
    paths.appIndexJs,
  ],
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: paths.appSrc,
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)(\?.*)?$/,
          /\.css$/,
          /\.scss$/,
          /\.json$/,
          /\.svg$/,
        ],
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
        include: paths.appPublic,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: paths.appSrc,
      },
      {
        test: /\.scss|\.css$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
        }),
        include: [paths.appSrc, /node_modules/],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new InterpolateHtmlPlugin(process.env),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.DefinePlugin(stringEnv),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CaseSensitivePathsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js($&#124;\?)/i,
      extractComments: true,
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    extractSass,
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
