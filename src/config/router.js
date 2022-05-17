import { lazy, Suspense } from 'react'

export const routes = [
  {
    name: '登录',
    path: '/login',
    exact: true,
    component: lazy(() => import('../pages/login'))
  },
  {
    name: '首页',
    path: '/home',
    auth: true,
    exact: true,
    component: lazy(() => import('../pages/home'))
  },
  {
    name: '关于',
    path: '/about',
    auth: true,
    exact: true,
    component: lazy(() => import('../pages/about')),
    children: [
      {
        path: '/about/info',
        auth: true,
        component: lazy(() => import('../pages/home/info'))
      },
      {
        path: '/about/b/:id',
        auth: true,
        component: lazy(() => import('../pages/home/detail'))
      },
      {
        path: '/about/*',
        auth: false,
        component: lazy(() => import('../pages/error/NotFound'))
      }
    ]
  },
  {
    name: '我的',
    path: '/mine',
    auth: true,
    exact: true,
    component: lazy(() => import('../pages/mine'))
  },
  {
    name: '举报',
    path: '/report',
    auth: true,
    exact: true,
    component: lazy(() => import('../pages/report'))
  },
  {
    path: '*',
    auth: false,
    component: lazy(() => import('../pages/error/NotFound'))
  }
]

export default { routes }
