const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    neo: "./src/neo.js",
    neoService: "./src/neo_service.js",
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  watch: true,

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
  },
};
