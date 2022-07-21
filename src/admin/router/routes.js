import NavPanel from '@/admin/components/NavPanel';
import CompaniesView from '@/admin/views/CompaniesView';
import CompanyView from '@/admin/views/CompanyView';

const routes = [
  {
    components: {
      menu: NavPanel,
    },
    name: 'admin homepage',
    path: '/admin',
  },
  {
    components: {
      content: CompaniesView,
      menu: NavPanel,
    },
    name: 'admin companies page',
    path: '/admin/companies',
  },
  {
    components: {
      content: CompanyView,
      menu: NavPanel,
    },
    name: 'create company page',
    path: '/admin/companies/create',
  },
  {
    components: {
      content: CompanyView,
      menu: NavPanel,
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
