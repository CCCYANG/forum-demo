// webpack简单配置npm 
var webpack = require('webpack');
const path = require('path');

module.exports = {
 entry: './src/app.js',
 output: {
     path: __dirname + '/build',
     filename: "bundle.js"
 },
 module: {
     rules: [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
             plugins: ['transform-runtime'],
             presets: ['es2015', 'react']
         }
     }, {
         test: /\.css$/,
         loader: "style-loader!css-loader"
     }]
 },
 resolve: {
     extensions: [" ",".js", ".jsx", ".node", ".webpack-loader.js", ".web-loader.js", ".loader.js"]
 },
 node: {
     fs: "empty"
 },
 devServer: {
    inline: true,
    port: 8888
 },
};

