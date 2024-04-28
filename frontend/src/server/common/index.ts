import { http } from '../http'

export const fetchMenus = async () => {
  const res = await http.post(
    '/menus',
    {},
    {
      transformResponse: [
        (data) => {
          const ret = JSON.parse(data)
          ret.data = menuRedata<typeof ret>(ret.data)
          return ret
        }
      ]
    }
  )
  return res.data
}

export function menuRedata<T>(data: T[]) {
  const ret: any[] = data.map((v: any) => {
    let opt = Object.assign(Object.create(null), {
      key: v.name,
      icon: v.meta?.icon,
      label: v.meta?.title,
      path: v.path
    })
    if (v.children?.length) {
      opt.children = menuRedata(v.children)
    }
    return opt
  })
  return ret
}
