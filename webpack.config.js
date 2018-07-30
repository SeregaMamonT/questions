const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const props = loadProperties();

const APP_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = props.outputPath ? path.resolve(props.outputPath) : path.resolve(__dirname, 'public');

const config = {
  devtool: 'source-map',

  entry: APP_DIR + '/index.js',

  output: {
    path: OUTPUT_DIR,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ],
  },

  resolve: {
    modules: [path.resolve(__dirname, 'app'), 'node_modules'],
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },

  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = config;

// helpers

function loadProperties() {
  try {
    return require('./webpack.properties.js');
  }
  catch (e) {
    console.log('webpack.properties.js is not found - continue with default props');
    return {};
  }
}