import Mock from 'mockjs'
import { menu } from './menus'

Mock.mock('/menus', {
  ...menu
})