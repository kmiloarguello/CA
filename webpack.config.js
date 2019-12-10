const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: ["babel-polyfill", path.resolve(__dirname, "src/index.js")],
    sw: path.resolve(__dirname, "src/sw/service-worker.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    chunkFilename: "js/[name].bundle.js"
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
                localIdentName: "[local]"
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
            limit: 12000,
            name: "img/[name].[ext]"
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
    ]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "node_modules/particles.js/particles.js"),
        to: path.resolve(__dirname, "dist/js/particles.js"),
        toType: "file"
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/data/particlesjs-config.json"),
        to: path.resolve(__dirname, "dist/js/particlesjs-config.json"),
        toType: "file"
      }
    ]),
  ]
};
