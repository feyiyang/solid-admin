import { lazy } from "solid-js"

const routes: any[] = [
  {
    path: '/',
    component: lazy(() => import('../pages/index.ts'))
  }
]