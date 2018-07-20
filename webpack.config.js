const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "awesome-output.js"
  },

  // ***Loaders***
  /* Adding loaders to process/transform .css files.
  "Loaders allow webpack to process other types of files and converting them into valid modules."
  test : identify which file/s should be transformed
  use : tells which loader to use for transforming */
  module: {
    rules: [
      { test: /\.css$/,
        use: ['css-loader', 'style-loader', 'postcss-loader']
        // npm install --save-dev css-loader style-loader postcss-loader
        // 'postcss-loader': To handl Flex and Grid in CSS
      }
    ]
  },

  // ***Plugins***
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
