const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  // entry: ["./app.js", "./index.js"]
  entry: {
    home: "./app.js",
    main: "./index.js",
  },
  output: {
    filename: "main.[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
