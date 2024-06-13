const path = require('path')
const Service = require('egg').Service

class SysEnumsService extends Service {
  async depart_tree(_id) {
    const app = this.ctx.app
    return app.loader.loadFile(path.join(app.config.baseDir, 'app/service/mock/departTree.json'))
  }
  async user_sex() {
    const app = this.ctx.app
    return app.loader.loadFile(path.join(app.config.baseDir, 'app/service/mock/userSex.json'))
  }
  async sys_normal_disable() {
    const app = this.ctx.app
    return app.loader.loadFile(path.join(app.config.baseDir, 'app/service/mock/sysNormalDisable.json'))
  }

  async user_list() {
    const app = this.ctx.app
    return app.loader.loadFile(path.join(app.config.baseDir, 'app/service/mock/userList.json'))
  }
}

module.exports = SysEnumsService