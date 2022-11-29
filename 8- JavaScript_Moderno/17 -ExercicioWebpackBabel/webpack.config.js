module.exports = {
  entry: {
    index: "./src/index.js",
    hello: "./src/hello.js",
  },
  output: {
    filename: "[name].min.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
};
