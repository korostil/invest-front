import AdminApp from './App';
import { createApp } from 'vue';
import router from '@/admin/router/router';

const admin_app = createApp(AdminApp);
admin_app.use(router);
admin_app.mount('#app');
