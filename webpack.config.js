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
    library: "someLibName",
    libraryTarget: "umd",
    auxiliaryComment: {
      root: "Root Comment",
      commonjs: "CommonJS Comment",
      commonjs2: "CommonJS2 Comment",
      amd: "AMD Comment",
    },
    chunkLoadTimeout: 30000,
    filename: "[name].bundle.js",
    charset: true,
    // chunkFilename: (pathData) => {
    //   return pathData.chunk.name === "main" ? "[name].js" : "[name]/[name].js";
    // },
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets",
    assetModuleFilename: "assets/[contenthash][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
