'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js'
    },
    plugins: [
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
                path.resolve(__dirname, 'app')
            ]
        }, {
            test: /\.js$/,
            loader: 'eslint-loader',
            include: [
                path.resolve(__dirname, 'app')
            ]
        }, {
            test:    /\.js$/,
            loader: 'jscs-loader',
            include: [
                path.resolve(__dirname, 'app')
            ]
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }]
    }
};
