import { lazy } from 'solid-js'
import type { RouteDefinition } from '@solidjs/router'
import mainLayout from '../layout/Main'
import LoginPage from '../pages/login/Login.tsx'
import * as NAMES from './names'

const routeEnums = new Map()
routeEnums.set(Symbol('HOME'), '/home')

const routes: ({ name?: symbol } & RouteDefinition<string, unknown>)[] = [
  {
    name: NAMES.ROOTNAME,
    path: NAMES.ROOTPATH,
    component: mainLayout,
    children: [
      {
        path: NAMES.HOMEPATH,
        component: lazy(() => import('../pages/home/Home'))
      },
      {
        path: NAMES.MENUPATH,
        component: lazy(() => import('../pages/system/menu'))
      },
      {
        path: NAMES.USERPATH,
        component: lazy(() => import('../pages/system/departments.tsx'))
      },
      {
        path: NAMES.ROLESPATH,
        component: lazy(() => import('../pages/system/roles.tsx'))
      },
      {
        path: NAMES.BASECOMPONENTSPATH,
        component: lazy(() => import('../pages/tool/gen/index.tsx'))
      },
      {
        path: NAMES.WANGEDITROPATH,
        component: lazy(() => import('../pages/tool/plugins/wang.tsx'))
      },
      {
        path: '*404',
        component: lazy(() => import('../pages/NotFound.tsx'))
      }
    ]
  },
  {
    name: NAMES.LOGINNAME,
    path: NAMES.LOGINPATH,
    component: LoginPage
  }
]

export default routes
