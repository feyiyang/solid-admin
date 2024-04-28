const Controller = require('egg').Controller

class AuthController extends Controller {
  constructor(ctx) {
    super(ctx)
  }

  async menus() {
    const { ctx, service } = this
    const { id } = ctx.params
    const res = await service.user.menus(id)

    ctx.helper.success({ctx, res})
  }
}