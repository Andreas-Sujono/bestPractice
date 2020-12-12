import { lazy } from 'react';

const data = [
  {
    id: 1,
    label: 'homepage',
    path: '/',
    exact: true,
    component: lazy(() => import('containers/HomePage')),
  },
];

export default data;
