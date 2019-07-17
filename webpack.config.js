var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    open: 'chrome',
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, exclude: /\.module\.scss$/, use: ["style-loader", "css-loader", 'sass-loader'] },
      { test: /\.tsx?$/, exclude: /node_modules/, use: 'ts-loader' },

    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};
