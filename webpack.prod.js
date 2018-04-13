const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new CompressionPlugin()
  ]
});