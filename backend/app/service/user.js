const Service = require('egg').Service

class UserService extends Service {
  async menus(_id) {
    const menus = await this.ctx.service.user.find(_id)
    if (!user) {
      this.ctx.throw(404, 'user not found')
    }
    return this.ctx.model.User.findById(_id).populate('role')
  }
}

module.exports = UserService