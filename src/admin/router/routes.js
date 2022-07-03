import { default as AdminHomePage } from '@/admin/views/HomePage';
import CompanyListView from '@/admin/views/companies/CompanyListView';
import CompanyView from '@/admin/views/companies/CompanyView';

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
      content: CompanyListView,
      NavBar: AdminHomePage,
    },
    name: 'admin companies page',
    path: '/admin/companies',
  },
  {
    components: {
      content: CompanyView,
      NavBar: AdminHomePage,
    },
    name: 'create company page',
    path: '/admin/companies/create',
  },
  {
    components: {
      content: CompanyView,
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
