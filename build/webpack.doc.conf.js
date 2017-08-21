/* eslint-disable no-undef */
const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    packageConf = JSON.parse(fs.readFileSync('./package.json', 'utf-8')),
    merge = require('webpack-merge'),
    webpackBaseConfig = require('./webpack.base.conf.js');

let version = packageConf.version,
    library = packageConf.name.toUpperCase();

process.env.NODE_ENV = 'production';

const styleLoaders = [{
    test: /\.vue$/,
    exclude: /node_modules/,
    loader: 'vue-loader',
    options: {
        loaders: {
            css: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'vue-style-loader'
            }),
            scss: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'vue-style-loader'
            })
        },
        postLoaders: {
            html: 'babel-loader'
        }
    }
}, {
    test: /\.s[a|c]ss$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            options: {
                minimize: true
            }
        }, {
            loader: 'sass-loader?sourceMap'
        }]
    })
}, {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            options: {
                minimize: true
            }
        }]
    })
}, ];
webpackBaseConfig.module.rules = webpackBaseConfig.module.rules.concat(styleLoaders);
module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './examples/main'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: `${library}-doc-${version}.js`,
        library: 'moeui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../dist/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:8].min.css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    ],
});