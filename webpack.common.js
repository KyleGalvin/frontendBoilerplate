var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/');

var port = 8080;
var https = true;
if (process.env.NODE_ENV === "DEV") {
  https = false;
}

if (process.env && process.env.PORT) {
  port = Number(process.env.PORT);
}

var mode;
if (process.env) {
  mode = process.env.NODE_ENV || "development";
} else {
  mode = "development";
}

var config = {
  entry: APP_DIR + '/index.tsx',
  devtool: 'inline-source-map',
  mode: mode,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json", ".css"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: ["awesome-typescript-loader"]},
      { enforce: "pre", test: /\.js$/, use: ["source-map-loader"] },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["file-loader"] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["url-loader"] },
      {
        test: /\.(css|scss)$/, exclude: /node_modules/,
        use: ["style-loader","css-loader","sass-loader"]
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
    https: https
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      },
    }),    
  ]
};

if (process.env.NODE_ENV === "DEV") {
  config.externals = { config: "./config/herokuDev.ts" };
} else {
  config.externals = { config: "./config/local.ts" };
}
module.exports = config;
