import { useFetch } from './mix'

const menus = (params: any) => {
  const [resource] = useFetch({url:'/api/system/menus/get', method:'GET', params})
  return resource
}

export const settingServe = {
  menus
}

