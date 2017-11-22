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
             presets: ['es2015', 'react', 'stage-2']
         }
     }, {
         test: /\.css$/,
         loader: "style-loader!css-loader"
     }, {
         test: /\.less$/, 
         loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('less-loader')
         ]
     }, {
          test: /\.(jpe?g|png|gif)$/,
          loader: 'file-loader',
          query: {
            name: 'assets/img/[name].[ext]'
          }
     }, {
          test: /\.(svg|eot|ttf|woff|woff2|)$/,
          loader: 'file-loader',
          query: {
            name: 'assets/fonts/[name].[ext]'
          }
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
    port: 8888,
    historyApiFallback: true // 解决Cannot Get [PageName]
 },
};

