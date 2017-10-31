var path = require('path');
var webpack = require('webpack');
const HtmlWP = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const extractSass = new ExtractTextPlugin({
//     filename: "./build/stylesheets/guessing_game.css"
// });

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWP({
            filename: "index.html",
            template: './src/index.html'
        }),
        new ExtractTextPlugin("build.css")
    ],
    module: {
        loaders: [],
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "postcss-loader", "sass-loader"],
                    fallback: "style-loader"
                })
            }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};