var webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {
  // 拷贝html
  module.exports = function(webpackConfig) {
    webpackConfig.module.loaders.push({ test: /\.html$/, loader: 'file?name=[name].[ext]' })
  
    return webpackConfig;
  };
  // common
  webpackConfig.plugins.some(function(plugin, i){
    if(plugin instanceof webpack.optimize.CommonsChunkPlugin || plugin.constructor.name === 'CommonsChunkPlugin') {
      webpackConfig.plugins.splice(i, 1, new webpack.optimize.CommonsChunkPlugin('jquery', 'jquery.js'));
      return true;
    }
  });
  // 返回 webpack 配置对象
  return webpackConfig;
};