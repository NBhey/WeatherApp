const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // точка входа сборщика webpack
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: '[name]..bundle.js',
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // HtmlWebpackPlugin создает index.html в директории с бандлом и автоматически добавляет в него ссылку на бандл.
    new HtmlWebpackPlugin({
      template: 'index.html', // откуда брать шаблон
    }),
  ],
};
