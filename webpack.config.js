var path = require('path');
const HtmlWP = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin("style.css");

module.exports = [{
    entry: ['./src/app.js', "./src/main.scss"],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [],
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "postcss-loader", "sass-loader"],
                    fallback: "style-loader"
                })
            }]
    },
    plugins: [
        new UglifyJSPlugin(),
        new HtmlWP({
            filename: "index.html",
            template: './src/index.html',
            inlineSource: '.(js|css)$',
            minifyJS: true,
            inject: true
        }),
        new HtmlWebpackInlineSourcePlugin(),
        extractSass

    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
}, {
    entry: ["./src/server/server.js"],
    output: {
        path: path.resolve("./build"),
        filename: "server_build.js",
        libraryTarget: 'commonjs'
    },
    target: "node",
    node: {
        __dirname: false,
        __filename: true
    },
    module: {
        loaders: [],
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    externals: [
        /^(?!\.|\/).+/i,
    ]
}];