// config/config.default.js
const path = require('path')
module.exports = (appInfo) => {
  return {
    keys: appInfo.name + '_1513765449219_5858',
    view: {
      root: path.join(appInfo.baseDir, 'app/view'),
      mapping: {
        '.html': 'nunjucks'
      }
    },
    // 加载 errorHandler 中间件
    middleware: ['errorHandler'],
    // 只对以 /api 为前缀的 URL 路径生效
    errorHandler: {
      match: '/api',
    },
    asset: {
      publicPath: '/public',
      devServer: {
        autoPort: true
      }
    },
    mongoose: {
      url: 'mongodb://127.0.0.1:27017/MongoDB'
    }
  }
};

// exports.keys = '<此处改为你自己的 Cookie 安全字符串>';
