var app_root = 'src';
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    path.join(__dirname, app_root, 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      },

      /* Временно отключим sass/css лоадеры */

      // {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      // {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'PropTypes': 'prop-types',
      'Config': 'config',
      'fetch': 'isomorphic-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        debug: process.env.NODE_ENV !== 'production',
        app_root: app_root
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  externals: {
    'config': JSON.stringify(process.env.ENV === 'production' ? require('./config.prod.json') : require('./config.dev.json'))
  },
  resolve: {
    alias: {
      UserApi: path.resolve(__dirname, 'src/api/UserApi'),
      constants: path.resolve(__dirname, 'src/constants'),
      actions: path.resolve(__dirname, 'src/actions'),
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
    extensions: ['.js', '.jsx']
  }
};