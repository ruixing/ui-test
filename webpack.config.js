const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT_PATH = __dirname;
const SRC_DIR = path.join(ROOT_PATH, 'src');

module.exports = {
  mode: 'development',

  devtool: 'eval-source-map',

  entry: path.join(SRC_DIR, 'index.jsx'),

  output: {
    publicPath: '/'
  },

  devServer: {
    public: 'http://127.0.0.1:8000',
    port: 8000,
    host: '0.0.0.0',
    index: 'index.html'
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: path.join(SRC_DIR, 'index.html'),
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.less', '.json'],
    modules: ['node_modules']
  },

  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/i,
        use: [ 'style-loader', 'css-loader', 'less-loader' ],
      }
    ]
  }
}
