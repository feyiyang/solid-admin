'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.html');
  }
  async data() {
    const { ctx, service } = this
    const res = await service.home.data()

    ctx.helper.success({ctx, res})
  }
}

module.exports = HomeController;