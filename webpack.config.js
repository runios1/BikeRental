const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/js/index.js",
    indexDomManipulation: "./src/js/indexDomManipulation.js",
    upload: "./src/js/uploadDOMManipulation.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/html/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "home.html",
      template: "src/html/home.html",
    }),
    new HtmlWebpackPlugin({
      filename: "myBikes.html",
      template: "src/html/myBikes.html",
    }),
    new HtmlWebpackPlugin({
      filename: "rent.html",
      template: "src/html/rent.html",
    }),
    new HtmlWebpackPlugin({
      filename: "sent.html",
      template: "src/html/sent.html",
    }),
    new HtmlWebpackPlugin({
      filename: "upload.html",
      template: "src/html/upload.html",
      chunks: ["upload"],
    }),
  ],
};
