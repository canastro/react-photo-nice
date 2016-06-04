'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/index.js'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot'],
            include: [
                path.resolve(__dirname, 'app')
            ]
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                path.resolve(__dirname, 'node_modules', 'image-filter-core', 'src'),
                path.resolve(__dirname, 'node_modules', 'image-filter-brightness', 'src'),
                path.resolve(__dirname, 'node_modules', 'image-filter-colorize', 'src'),
                path.resolve(__dirname, 'node_modules', 'image-filter-contrast', 'src'),
                path.resolve(__dirname, 'node_modules', 'image-filter-gamma', 'src'),
                path.resolve(__dirname, 'node_modules', 'image-filter-grayscale', 'src'),
                path.resolve(__dirname, 'node_modules', 'image-filter-invert', 'src'),
                path.resolve(__dirname, 'node_modules', 'image-filter-sepia', 'src'),
                path.resolve(__dirname, 'node_modules', 'image-filter-threshold', 'src'),
                path.resolve(__dirname, 'app')
            ]
        }, {
            test: /\.js$/,
            loader: 'eslint-loader',
            include: [
                path.resolve(__dirname, 'app')
            ]
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }]
    }
};
