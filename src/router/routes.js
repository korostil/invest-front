import Shares from '@/views/Shares';
import Share from '@/components/Share';

const routes = [
  {
    path: '/share',
    component: Shares,
    name: 'list of shares',
  },
  {
    path: '/share/:ticker',
    name: 'share',
    component: Share,
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
