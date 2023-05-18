const babelPreset = require('../../scripts/babel/preset');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const appDirectory = path.resolve(__dirname);

module.exports = {
  mode: 'production',
  context: __dirname,
  entry: './src/index',
  output: {
    path: path.resolve(appDirectory, 'dist'),
    filename: 'bundle.js'
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production'
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.js$/,
        include: [path.resolve(appDirectory, 'src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: false,
              presets: [babelPreset],
              plugins: ['styled-jsx/babel']
            }
          },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production'
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
};
