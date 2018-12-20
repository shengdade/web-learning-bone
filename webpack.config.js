const path = require('path')
const HttlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HttlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}
