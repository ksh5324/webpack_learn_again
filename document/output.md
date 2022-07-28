# output

## assetModuleFilename

output.filename과 동일하지만 애셋 모듈용

```js
module.exports = {
  // ...
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets",
    assetModuleFilename: "assets/[contenthash][ext]",
    clean: true,
  },
};
// 이미지 파일 같은 awwets 들은 모두 assets 폴더에 가게 된다.
```

## asyncChunks

요청 시 로드되는 비동기 청크를 생성합니다.

- 아직 이해 못함

```js
module.exports = {
  //...
  output: {
    //...
    asyncChunks: true,
  },
};
```

## auxiliaryComment

- 아직 완벽히 이해하지 못함

> ### Warning
>
> output.library.auxiliaryComment를 사용하는 것이 좋습니다.

사용자가 export 래퍼 내에 주석을 삽입할 수 있습니다. 각 libraryTarget 타입에 동일한 주석을 삽입하려면 auxiliaryComment를 문자열로 설정하세요.

```js
module.exports = {
  //...
  output: {
    //...
    library: "someLibName",
    libraryTarget: "umd",
    auxiliaryComment: {
      root: "Root Comment",
      commonjs: "CommonJS Comment",
      commonjs2: "CommonJS2 Comment",
      amd: "AMD Comment",
    },
  },
};

// result

(function webpackUniversalModuleDefinition(root, factory) {
  //CommonJS2 Comment
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  //AMD Comment
  else if (typeof define === "function" && define.amd) define([], factory);
  //CommonJS Comment
  else if (typeof exports === "object") exports["someLibName"] = factory();
  //Root Comment
  else root["someLibName"] = factory();
});
```

## charset

webpack이 HTML의 <script\> 태그에 charset="utf-8"을 추가하도록 합니다.

## chunkFilename

- 아직 완벽히 이해하지 못함

초기가 아닌 청크 파일의 이름을 결정합니다

청크 파일 요청을 위해 런타임에서 파일 이름을 생성해야 합니다. 이 때문에 [name] 및 [chunkhash]와 같은 자리 표시자는 webpack 런타임을 사용하여 청크 ID에서 자리 표시자 값으로의 매핑을 출력 번들에 추가해야 합니다. 이렇게하면 크기가 증가하고 청크의 자리 표시자 값이 변경 될 때 번들이 무효화 될 수 있습니다

```js
module.exports = {
  //...
  output: {
    chunkFilename: (pathData) => {
      return pathData.chunk.name === "main" ? "[name].js" : "[name]/[name].js";
    },
  },
};
```

## chunkFormat

말 그대로 청크의 포맷이다.

## chunkLoadTimeout

청크 요청이 만료되기까지의 밀리 초 단위의 시간입니다. 이 옵션은 webpack 2.6.0부터 지원됩니다.

```js
chunkLoadTimeout: 30000,

// 30000ms 이내로 재 요청을 보내면 서버에서 가져오지 값을 받지 않고 캐싱되어 있는 값을 사용
```

## clean

```js
module.exports = {
  //...
  output: {
    clean: true, // 내보내기 전에 output 디렉터리를 정리합니다.
  },
};

module.exports = {
  //...
  output: {
    clean: {
      dry: true, // 삭제하는 대신 제거해야 하는 애셋을 기록합니다.
    },
  },
};

module.exports = {
  //...
  output: {
    clean: {
      keep: /ignored\/dir\//, // 애셋을 'ignored/dir' 아래에 유지합니다.
    },
  },
};

module.exports = {
  //...
  output: {
    clean: {
      keep(asset) {
        return asset.includes("ignored/dir");
      },
    },
  },
};
```
