import { default as AdminHomePage } from '@/admin/views/HomePage';
import CompanyListPage from '@/admin/views/companies/CompanyListPage';
import CompanyPage from '@/admin/views/companies/CompanyPage';

const routes = [
  {
    components: {
      NavBar: AdminHomePage,
    },
    name: 'admin homepage',
    path: '/admin',
  },
  {
    components: {
      content: CompanyListPage,
      NavBar: AdminHomePage,
    },
    name: 'admin companies page',
    path: '/admin/companies',
  },
  {
    components: {
      content: CompanyPage,
      NavBar: AdminHomePage,
    },
    name: 'admin company page',
    path: '/admin/companies/:company',
  },
  {
    component: { render: h => h('div', ['404! Page Not Found!']) },
    path: '/:pathMatch(.*)*',
  },
];

export default routes;
