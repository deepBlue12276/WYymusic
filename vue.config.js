const path = require('path')
const port = process.env.port || process.env.npm_config_port || 8080
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/music-html',
  outputDir: 'dist',  //build目录
  assetsDir: 'static',  //静态目录
  lintOnSave: 'warning',  
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    clientLogLevel: "none",  //禁止显示部分调试信息
    host: '0.0.0.0',  //如果希望server被外部访问，值为‘0.0.0.0’
    port: port,
    https: false,
    hotOnly: true,  //启用Hot Module Replacement，当编译失败时，不刷新页面
    before: app => {},
    hot: true,  //启用webpack的Hot Module Replacement特性
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'https://localhost:3000',
        changeOrigin: true, //解决跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}