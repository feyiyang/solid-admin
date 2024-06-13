'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.all('/api/*', controller.home.proxy);

  router.get('/api/menus/show', controller.menus.show)
  router.get('/api/system/menus/get', controller.menus.list)

  //首页
  router.get('/api/home/data', controller.home.data)
  
  // 常见枚举
  router.get('/api/system/dict/type/user_sex', controller.sys.user_sex)
  router.get('/api/system/dict/department', controller.sys.department)
  router.get('/api/system/dict/type/sys_normal_disable', controller.sys.sys_normal_disable)
  router.get('/api/system/user/list', controller.sys.user_list)

  router.get('/', controller.home.index);
};