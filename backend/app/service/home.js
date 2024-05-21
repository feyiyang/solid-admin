const path = require('path')
const Service = require('egg').Service

class HomeService extends Service {
  async data(_role) {
    const app = this.ctx.app
    return app.loader.loadFile(path.join(app.config.baseDir, 'app/service/mock/homeChart.json'))
  }
}

module.exports = HomeService


