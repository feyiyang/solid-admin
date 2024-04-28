import { lazy } from 'solid-js'
import type { RouteDefinition } from '@solidjs/router'
import mainLayout from '../layout/Main'
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
        path: '*404',
        component: lazy(() => import('../pages/NotFound.tsx'))
      }
    ]
  }
]

export default routes
