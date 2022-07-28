const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  // entry: ["./app.js", "./index.js"]
  entry: () =>
    new Promise((resolve) =>
      resolve({
        "react-vendors": ["react", "react-dom"],
        home: {
          import: "./app.js",
          dependOn: "react-vendors",
          filename: "pages/[name].bundle.js",
        },
        main: {
          runtime: "runtime",
          filename: "pages/[name].bundle.js",
          import: "./index.js",
        },
      })
    ),
  output: {
    filename: "[name].bundle.js",
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
