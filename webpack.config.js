const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./project-config.js');

module.exports = {
  entry: './src/js/index.js',

  output: {
    filename: './dist/bundle.js',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: `${__dirname}/node_modules/`,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: `${__dirname}/node_modules`,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
            },
          },
        ],
      },
      {
        test: /\.handlebars$/,
        use: [
          'handlebars-loader',
        ],
      },
    ],
  },

  plugins: [
    new FlowBabelWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'dist/index.html',
      template: 'src/html/index.html',

      title: config.title,
      version: config.version,
    }),
  ],
};
