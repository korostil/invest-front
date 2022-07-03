import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/admin/router/routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
