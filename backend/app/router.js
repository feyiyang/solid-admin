'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.all('/api/*', controller.home.proxy);

  router.get('/api/menus/show', controller.menus.show)
  router.get('/api/system/menus/get', controller.menus.list)
  router.get('/', controller.home.index);
};