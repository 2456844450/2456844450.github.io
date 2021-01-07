/** @type {import("snowpack").SnowpackUserConfig } */
let BrotliPlugin = require("brotli-webpack-plugin");

module.exports = {
  mount: {
    /* ... */
  },
  plugins: [// [
  //   "@snowpack/plugin-webpack",
  //   {
  //     sourceMap: true,
  //     extendConfig: (config) => {
  //       config.plugins.push(
  //         new BrotliPlugin({
  //           asset: "[path].br[query]",
  //           test: /\.(js|css|html|svg)$/,
  //           threshold: 10240,
  //           minRatio: 0.8,
  //         })
  //       );
  //       return config;
  //     },
  //     htmlMinifierOptions: true,
  //   },
  // ],
  ["snowpack-plugin-cdn-import", {
    dependencies: require("./package.json").dependencies,
    ignore: ["@some/module", /^@another/],
    baseUrl: "https://cdn.skypack.dev",
    // default value.
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    // default value.
    enableInDevMode: false,
    // default value.
    formatImportValue: ({
      baseUrl,
      dependency
    }) => `${baseUrl}/${dependency.name}@${dependency.version}` // default value.

  }]],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  }
};