const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@slices": path.resolve(__dirname, "src/slices"),
      "@src": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  experiments: {
    outputModule: true,
  },
};
