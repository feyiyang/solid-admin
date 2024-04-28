const Controller = require('egg').Controller

class MenuController extends Controller {
  constructor(ctx) {
    super(ctx)
  }

  async show() {
    const { ctx, service } = this
    const { roleType } = ctx.params
    const res = await service.menus.show(roleType)

    ctx.helper.success({ctx, res})
  }
  async list() {
    const { ctx, service } = this
    const { roleType } = ctx.params
    const res = await service.menus.list(roleType)

    ctx.helper.success({ctx, res})
  }
}

module.exports = MenuController;