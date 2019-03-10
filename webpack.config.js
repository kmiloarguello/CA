const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    chunkFilename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }
      },
      {
        test: /\.(pcss|css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]'
              }
            },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000,
            name: "img/BMW/[name].[ext]"
          }
        }
      },
      {
        test: /\.(mp4)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000,
            mimetype: "video/mp4",
            name: "video/[name].[hash].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin({
      inject: true,
      favicon: path.resolve(__dirname, "src/img/CA_web.ico"),
      template: path.resolve(__dirname, "src/html/index.html"),
      title: "Camilo Argüello"
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/css/animate.css"),
        to: path.resolve(__dirname, "dist/css/animate.css"),
        toType: "file"
      }
    ])
  ]
};
