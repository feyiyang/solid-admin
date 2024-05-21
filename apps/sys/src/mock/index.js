import Mock from 'better-mock'
import { homeChartsData, menulist, rolemenu } from './mdatas'

const apipre = import.meta.env.DEV ? '' : '/api'

Mock.mock(`${apipre}/menus/show`, 'get', () => {
  return rolemenu
})

Mock.mock(`${apipre}/system/menus/get`, 'get', () => {
  return menulist
})

Mock.mock(`${apipre}/home/data`, 'get', () => {
  return homeChartsData
})