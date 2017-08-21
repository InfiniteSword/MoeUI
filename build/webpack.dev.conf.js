/* eslint-disable no-undef */
const path = require('path'),
    fs = require('fs'),
    packageConf = JSON.parse(fs.readFileSync('./package.json', 'utf-8')),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    webpackBaseConfig = require('./webpack.base.conf.js');


let version = packageConf.version,
    library = packageConf.name.toUpperCase();

const styleLoaders = [{
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
        loaders: {
            css: 'vue-style-loader!css-loader',
            scss: 'vue-style-loader!css-loader!sass-loader'
        },
        postLoaders: {
            html: 'babel-loader'
        }
    }
}, {
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader',
        'autoprefixer-loader'
    ]
}, {
    test: /\.scss$/,
    use: [
        'style-loader',
        'css-loader',
        'sass-loader?sourceMap'
    ]
}];
webpackBaseConfig.module.rules = webpackBaseConfig.module.rules.concat(styleLoaders);
module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './examples/main',
        // vendors: ['vue', 'vue-router']
    },
    output: {
        filename: `${library}.js`,
        path: path.resolve(__dirname, '../docs'),
        publicPath: '',
        chunkFilename: `${library}-${version}.chunk.js`
    },

    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendors',
        //     filename: 'vendor.bundle.js'
        // }),
        // new ExtractTextPlugin({
        //     filename: '[name].[contenthash:8].min.css'
        // }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../docs/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
    ],
});