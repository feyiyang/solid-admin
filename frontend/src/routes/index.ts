import { lazy } from 'solid-js'

const routes: any[] = [
  {
    path: '',
    name: 'root',
    children: [
      {
        path: '/',
        component: lazy(() => import('../pages/layout/Main')),
        children: [
          {
            path: ['/', '/home'],
            component: lazy(() => import('../pages/Home'))
          },
          {
            path: '/system',
            children: [
              {
                path: '/user',
                component: lazy(() => import('../pages/systems/user/index'))
              },
              {
                path: '/role',
                component: lazy(() => import('../pages/systems/role/index'))
              }
            ]
          },
          {
            path: 'icons',
            component: lazy(() => import('../pages/icons/icons'))
          },
          {
            path: '/*404',
            component: lazy(() => import('../pages/NotFound'))
          }
        ]
      },
      {
        path: '/login',
        component: lazy(() => import('../pages/login/Login'))
      }
    ]
  }
]

export default routes
