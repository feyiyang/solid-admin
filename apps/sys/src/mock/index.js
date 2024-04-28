import Mock from 'mockjs'
import { menu } from './menus'

Mock.mock('/menus', 'get', (opt) => {
  console.log(opt)
  return menu
})