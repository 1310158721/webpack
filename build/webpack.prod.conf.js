const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 复制一个 html 模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // webpack4.X 从打包的js中分离css成一个单独的文件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const rules = require('./base-loader.js')

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: rules
  },
  // optimization.minimizer会覆盖webpack提供的默认值
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static/img'),
        to: path.resolve(__dirname, '../dist/static')
      }
    ])
  ]
}