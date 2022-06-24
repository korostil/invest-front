import { default as AdminHomePage } from '@/views/admin/HomePage';
import CompanyListPage from '@/views/admin/companies/CompanyListPage';
import CompanyPage from '@/views/admin/companies/CompanyPage';
import HomePage from '@/views/HomePage';
import ShareView from '@/components/ShareView';

const routes = [
  // Admin pages
  {
    component: AdminHomePage,
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
