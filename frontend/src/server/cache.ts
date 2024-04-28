import { cache } from "@solidjs/router";
import { http } from "./http";
import { menuRedata } from "./common"

export const getMenus = cache(() => {
  return http.post('/menus',{},
  {
    transformResponse: [
      (data) => {
        const ret = JSON.parse(data)
        ret.data = menuRedata<typeof ret>(ret.data)
        return ret
      }
    ]
  })
}, 'sideMenus')