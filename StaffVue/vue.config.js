module.exports = {
  publicPath: '/staff/',
  // publicPath: './',
  // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
  productionSourceMap: false, // 生产环境的 source map
  parallel: require('os').cpus().length > 1,
  devServer: {
    port: 9020, // 端口
    open: false, // 启动后打开浏览器
    overlay: {
      //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: false,
      errors: true
    },
    proxy: {
      //配置跨域
      '/proxyApi': {
        target: 'http://47.242.116.166:8080/staff',
        changOrigin: true,
        pathRewrite: {
          '^/proxyApi': '/'
        }
      }
    }
  },
  css: {
    extract: true, // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
        // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        // prependData: `
        //   @import "assets/css/mixin.scss";
        //   @import "assets/css/variables.scss";
        //   `s
      }
    }
  }
}
