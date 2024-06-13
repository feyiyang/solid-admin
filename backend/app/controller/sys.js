const Controller = require('egg').Controller

class SysController extends Controller {
  constructor(ctx) {
    super(ctx)
  }

  async department() {
    const { ctx, service } = this
    const res = await service.systemm.depart_tree()

    ctx.helper.success({ctx, res})
  }
  async user_sex() {
    const { ctx, service } = this
    const res = await service.systemm.user_sex()

    ctx.helper.success({ctx, res})
  }

  async sys_normal_disable() {
    const { ctx, service } = this
    const res = await service.systemm.sys_normal_disable()

    ctx.helper.success({ctx, res})
  }

  async user_list() {
    const { ctx, service } = this
    const res = await service.systemm.user_list()

    ctx.helper.success({ ctx, res })
  }
}

module.exports = SysController;