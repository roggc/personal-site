const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    scriptType: "text/javascript",
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
  },
});
