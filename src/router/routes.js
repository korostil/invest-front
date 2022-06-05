import ShareView from '@/components/ShareView';
import HomePage from '@/views/HomePage';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'list of shares',
  },
  {
    path: '/share/:ticker',
    name: 'share',
    component: ShareView,
  },
  {
    path: '/share/comparison',
    name: 'share comparison',
  },
  {
    path: '/:pathMatch(.*)*',
    component: { render: h => h('div', ['404! Page Not Found!']) },
  },
];

export default routes;
