import Mock from 'better-mock'
import { homeChartsData, menulist, rolemenu, rolesListData, sysNDsData } from './mdatas'

// const apipre = import.meta.env.DEV ? '' : '/api'
const apipre = '/api'

Mock.mock(`${apipre}/menus/show`, 'get', () => {
  return rolemenu
})

Mock.mock(`${apipre}/system/menus/get`, 'get', () => {
  return menulist
})
Mock.mock(`${apipre}/system/role/list`, 'get', () => {
  return rolesListData
})

Mock.mock(`${apipre}/home/data`, 'get', () => {
  return homeChartsData
})

Mock.mock(`${apipre}/system/dict/type/sys_normal_disable`, 'get', () => {
  return sysNDsData
})
