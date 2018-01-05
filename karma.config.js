let webpack = require("webpack");

module.exports = function(config) {
    config.set({
        singleRun: true, // false => watch for changes and rerun tests
        autoWatch: true, // enable / disable watching files & then run tests
        colors: true,
        reporters: ["spec"],
        plugins: ["karma-spec-reporter", "karma-webpack", "karma-jasmine", "karma-phantomjs-launcher"],
        browsers: ['PhantomJS'],
        files: [
            { pattern: 'test-context.js', watched: false }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015'] } }
                ]
            },
            watch: false
        },
        webpackServer: {
            noInfo: true
        }
    });
};
