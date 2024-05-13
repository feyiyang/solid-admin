import Mock from 'better-mock'
import { menulist, rolemenu } from './menus'

const apipre = import.meta.env.DEV ? '' : '/api'

Mock.mock(`${apipre}/menus/show`, 'get', () => {
  return rolemenu
})

Mock.mock(`${apipre}/system/menus/get`, 'get', () => {
  return menulist
})