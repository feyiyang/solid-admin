import * as roleMenu from '../../../../backend/app/service/mock/roleMenus.json'
import * as menuList from '../../../../backend/app/service/mock/menuList.json'
import * as chartsData from '../../../../backend/app/service/mock/homeChart.json'

export const rolemenu = {
  msg: "操作成功",
  code: 200,
  success: true,
  data: roleMenu.default
}

export const menulist = {
  msg: "操作成功",
  code: 200,
  success: true,
  data: menuList.default
}

export const homeChartsData = {
  msg: "操作成功",
  code: 200,
  success: true,
  data: chartsData.default
}