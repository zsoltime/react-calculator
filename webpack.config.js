const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body',
});
const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'style.css',
});

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules',
      './app/components',
    ],
    alias: {
      styles: 'app/styles/style.sass',
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loaders: [
        'babel-loader',
        'eslint-loader',
      ],
      exclude: /node_modules/,
    }, {
      test: /\.sass$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: { sourceMap: true },
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer],
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            outputStyle: 'expanded',
            sourceMap: true,
          },
        }],
      }),
    }],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig,
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    overlay: true,
    port: 3000,
    watchContentBase: true,
  },
  externals: {
    // these lines are required for Enzyme
    'react/addons': true,
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
  },
  devtool: 'cheap-module-eval-source-map',
};
