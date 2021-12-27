const merge = require("webpack-merge");
const common = require("./webpack.config.js");
const path = require('path');

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // "./dist/index.html" 
    publicPath: '/',
    hot: true,
    port: 5002
  }
});