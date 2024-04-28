const path = require('path')
const Service = require('egg').Service

class MenuService extends Service {
  async show(_role) {
    const app = this.ctx.app
    // const menus = await this.ctx.service.menus.find(_role)
    // if (!menus) {
    //   this.ctx.throw(404, 'menus not found')
    // }
    // return this.ctx.model.Menus.findById(_role).populate('role')
    // console.log(this.ctx.app)
    // await app.loader.loadFile(path.join(app.config.baseDir, 'app/service/mock/roleMenus.js'))
    return app.loader.loadFile(path.join(app.config.baseDir, 'app/service/mock/roleMenus.json'))
  }
  async list(_role) {
    const app = this.ctx.app
    return app.loader.loadFile(path.join(app.config.baseDir, 'app/service/mock/menuList.json'))
  }
}

module.exports = MenuService


