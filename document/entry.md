# entry point

## array vs object

배열로 entry에 넣을 시 하나의 번들 파일이 생성됨  
그러나 객체라면 프로퍼티 수 만큼 번들 파일 생성

```js
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
```

이처럼 객체를 대입시켰다면 output에서 [name]을 통해서 참조 가능  
지금 현재 webpack.config.js에 따르며 main.home.js 파일과 main.main.js 파일 생성됨

다시말해 배열은 하나의 청크에 구성

## object option

entry object에는 수많은 option이 존재한다.  
이에 대해 하나씩 알아보겠다.

1. import: entry에 경로에 해당
2. dependOn: 의존하는 엔트리, 즉 현재 엔트리가 로드되기전 dependOn이 가르키는 entry가 먼저 로드되야함

```js
const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  // entry: ["./app.js", "./index.js"]
  entry: {
    home: "./app.js",
    main: {
      dependOn: "home",
      import: "./index.js",
    },
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

// main이 로드 되기전 home이 먼저 로드되야함
```

3. filename: 내보낼 이름 및 경로
4. runtime: 런타임 청크 -> 애플리케이션이 메모리를 할당받고 실행되는 환경

   런타임때 사용되는 코드들만 chunk로 분류, 나머지 내용은 모듈들에 대한 내용들만 남김  
   → 실제로 계속 변하는 코드를 담고있는 파일의 크기는 상대적으로 감소  
   → 런타임 코드는 변함이 없기 때문에 캐시가 적용돼서 어플리케이션이 조금 더 빠르게 동작할 수 있게됨

5. vendors chunk: runtime chunk와 마찬가지로 외부에서 관리되는 모듈들만 따로 분류, 작업하는 코드들만 모듈에 남김

```js
const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  // entry: ["./app.js", "./index.js"]
  entry: {
    "react-vendors": ["react", "react-dom"], // vendor chunk
    home: {
      import: "./app.js",
      dependOn: "react-vendors",
      filename: "pages/[name].bundle.js",
    },
    main: {
      runtime: "runtime", // runtime chunk
      filename: "pages/[name].bundle.js",
      import: "./index.js",
    },
  },
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
```

6. dynamic entry

```js
module.exports = {
  // ...
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
};
```
