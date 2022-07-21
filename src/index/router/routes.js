import CompanyListPage from '@/admin/views/companies/CompanyListView';
import CompanyPage from '@/admin/views/companies/CompanyView';
import HomePage from '@/index/views/HomePage';
import ShareView from '@/index/components/ShareView';

const routes = [
  // Admin pages
  {
    name: 'admin homepage',
    path: '/admin',
  },
  {
    component: CompanyListPage,
    name: 'admin companies page',
    path: '/admin/companies',
  },
  {
    component: CompanyPage,
    name: 'admin company page',
    path: '/admin/companies/:company',
  },
  //
  {
    component: HomePage,
    name: 'list of shares',
    path: '/',
  },
  {
    component: ShareView,
    name: 'share',
    path: '/share/:ticker',
  },
  {
    name: 'share comparison',
    path: '/share/comparison',
  },
  {
    component: { render: h => h('div', ['404! Page Not Found!']) },
    path: '/:pathMatch(.*)*',
  },
];

export default routes;
