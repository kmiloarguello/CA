const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: ["babel-polyfill", path.resolve(__dirname, "src/index.js")],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js"
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
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new webpack.ProvidePlugin({
            "window.jQuery": "jquery",
            "window.$": "jquery",
            jQuery: "jquery",
            $: "jquery",
            "window.Hammer": "Hammer"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            favicon: path.resolve(__dirname, 'src/img/CA_web.ico'),
            template: path.resolve(__dirname, "src/html/index.html"),
            title: "Camilo Argüello"
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname,"src/css/materialize.min.css"),
                to: path.resolve(__dirname,"dist/css/materialize.min.css"),
                toType: 'file'
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "src/fonts"),
                to: path.resolve(__dirname, "dist/fonts"),
                toType: 'dir'
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "src/css/fonts.css"),
                to: path.resolve(__dirname, "dist/css/fonts.css"),
                toType: 'file'
            }
        ]),
    ]
}