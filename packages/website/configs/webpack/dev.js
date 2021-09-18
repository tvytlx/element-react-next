// development config
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: ["./index.tsx"],
  devServer: {
    hot: "only", // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
    port: 9000,
    open: true,
  },
  devtool: "cheap-module-source-map",
});
