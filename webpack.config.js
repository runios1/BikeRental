const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "main.js",
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "home.html",
      template: "src/home.html",
    }),
    new HtmlWebpackPlugin({
      filename: "myBikes.html",
      template: "src/myBikes.html",
    }),
    new HtmlWebpackPlugin({
      filename: "rent.html",
      template: "src/rent.html",
    }),
    new HtmlWebpackPlugin({
      filename: "sent.html",
      template: "src/sent.html",
    }),
    new HtmlWebpackPlugin({
      filename: "upload.html",
      template: "src/upload.html",
    }),
  ],
};
