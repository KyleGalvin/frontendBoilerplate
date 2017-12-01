var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/');

var port = 8080;
if (process.env.NODE_ENV === "DEV") {
  port = process.env.PORT;
}

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var config = {
  entry: APP_DIR + '/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json", ".css"]
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
      {
        test: /\.scss$/, exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  node: {
    fs: "empty",
    __dirname: true,
    __filename: true
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: port,
    https: false
  }
  // plugins: [
  //   new UglifyJSPlugin({ output: {comments: false}})
  // ]
};

module.exports = config;
