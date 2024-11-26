import { useFetch } from './mix'

const menus = (params: any) => {
  return useFetch({ url: '/api/system/menus/get', method: 'GET', params })
}

const userSex = () => {
  return useFetch({ url: '/api/system/dict/type/user_sex', method: 'GET' })
}

const sysNOD = () => useFetch({ url: '/api/system/dict/type/sys_normal_disable', method: 'GET' })

const userList = () => useFetch({ url: '/api/system/user/list', method: 'GET' })

const rolesList = () => useFetch({ url: '/api/system/role/list', method: 'GET' })

export const settingServe = {
  menus,
  userSex,
  sysNOD,
  userList,
  rolesList
}
