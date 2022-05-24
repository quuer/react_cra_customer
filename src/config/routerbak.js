import { lazy } from 'react'

const routes = [
  {
    name: '登录',
    path: '/login.js',
    exact: true,
    component: lazy(() => import('../pages/login'))
  },
  {
    name: '首页',
    path: '/home',
    exact: true,
    component: lazy(() => import('../pages/home'))
  },
  {
    name: '关于',
    path: '/about',
    exact: true,
    // component: loadable(() => import('../pages/about/index'))
    component: lazy(() => import('../pages/about'))

  },
  {
    name: '我的',
    path: '/mine',
    exact: true,
    component: lazy(() => import('../pages/mine'))
  },
  {
    name: '举报',
    path: '/report',
    exact: true,
    component: lazy(() => import('../pages/report'))
  }
]

export default routers
