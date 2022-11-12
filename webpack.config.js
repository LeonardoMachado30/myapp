const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./components/index.js",
  output: {
    path: path.resolve(__dirname, "/public"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "/public/index.html",
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /(@?react-(navigation|native)).*\.(ts|js)x?$/,
        include: /node_modules/,
        exclude: [/react-native-web/, /\.(native|ios|android)\.(ts|js)x?$/],
        loader: "babel-loader",
      },
      {
        test: /@?(ui-kitten|eva-design).*\.(ts|js)x?$/,
        loader: "babel-loader",
      },
    ],
  },
};
