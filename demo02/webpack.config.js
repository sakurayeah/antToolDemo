var webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {
  // 拷贝html
  module.exports = function(webpackConfig) {
    webpackConfig.module.loaders.push({ test: /\.html$/, loader: 'file?name=[name].[ext]' })
  
    return webpackConfig;
  };
  // 返回 webpack 配置对象
  return webpackConfig;
};