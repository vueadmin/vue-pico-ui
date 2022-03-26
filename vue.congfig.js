const path = require("path");
module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve("src"))
      .set("~", path.resolve("packages"));
    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });
  },
};
