const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const APP_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'public');

const config = {
  mode: 'development',

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
    extensions: ['.js', '.vue'],
    mainFiles: ['index.js', 'index.vue'],
    alias: {
      vue: 'vue/dist/vue.js',
      app: path.resolve(__dirname, 'src')
    },
  },

  plugins: [
    new VueLoaderPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: false,
    port: 8080
  }
};

module.exports = config;