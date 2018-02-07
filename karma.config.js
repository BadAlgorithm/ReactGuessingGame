let webpack = require("webpack");

module.exports = function (config) {
    config.set({
        singleRun: true, // false => watch for changes and rerun tests
        autoWatch: true, // enable / disable watching files & then run tests
        colors: true,
        reporters: ["spec", "progress", "coverage", "coveralls"],
        plugins: [
            "karma-spec-reporter",
            "karma-webpack",
            "karma-jasmine",
            "karma-sourcemap-loader",
            "karma-phantomjs-launcher",
            "karma-es6-shim",
            "karma-coverage"
        ],
        browsers: ["PhantomJS"],
        files: [
            {pattern: "test-context.js", watched: false}
        ],
        frameworks: ["es6-shim", "jasmine"],
        preprocessors: {
            "test-context.js": ["webpack"],
            "./src/**/*.js": ["webpack"]
        },
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.js/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react'], plugins: [
                                ["istanbul", {
                                    "exclude": [
                                        "**/*.spec.js"
                                    ]
                                }]
                            ]
                        }
                    }
                ],
            },
            watch: false
        },
        webpackServer: {
            noInfo: true
        },
        coverageReporter: {
            type: 'text-summary',
            dir: 'coverage/'
        }
    });
};
