import { useFetch } from './mix'

const menus = (params: any) => {
  return useFetch({url:'/api/system/menus/get', method:'GET', params})
}

export const settingServe = {
  menus
}

