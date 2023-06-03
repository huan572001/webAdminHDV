import { DashboardOutlined } from '@ant-design/icons';
import React, { lazy } from 'react';
import routerLinks from '@/utils/router-links';
export const routesAdmin = [
  {
    label: 'List Product',
    path: routerLinks('ListProduct'),
    component: React.lazy(() => import('@/pages/ListProduct/index')),
  },
  {
    label: 'List User',
    path: routerLinks('ListUser'),
    component: React.lazy(() => import('@/pages/User')),
  },
  {
    label: 'List Order',
    path: routerLinks('ListOrder'),
    component: React.lazy(() => import('@/pages/Order')),
  },
];
export const routesUser = [];
export const routesManager = [];
const routes = [
  {
    label: 'Login',
    path: routerLinks('Login'),
    component: React.lazy(() => import('@/pages/Auth/Login')),
  },
  {
    label: 'dashboard',
    path: routerLinks('Dashboard'),
    component: React.lazy(() => import('@/pages/Dashboard/Dashboard')),
  },
];

export default routes;
