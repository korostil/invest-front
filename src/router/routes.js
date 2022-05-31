import Shares from '@/views/Shares';
import ShareView from '@/components/ShareView';

const routes = [
  {
    path: '/',
    component: Shares,
    name: 'list of shares',
  },
  {
    path: '/share/:ticker',
    name: 'share',
    component: ShareView,
    props: true,
  },
  {
    path: '/share/comparison',
    name: 'share comparison',
    props: true,
  },
  {
    path: '/page-not-found',
    alias: '*',
    component: { render: h => h('div', ['404! Page Not Found!']) },
  },
];

export default routes;
