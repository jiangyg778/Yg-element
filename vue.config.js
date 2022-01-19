const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
};
