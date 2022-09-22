const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index:'./src/index.js'
  },
  plugins:[new HtmlWebpackPlugin({
    title: 'TodoPage',
    template: './src/template.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i ,
        use: ['style-loader', 'css-loader'],
      },
      {
        test:/\.html$/i,
        use:["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type:'asset/resource',
        generator: {
          filename: 'imgs/[name].[hash][ext]'
       }
      }
    ],
  },
};