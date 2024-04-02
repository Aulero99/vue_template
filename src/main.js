import { createApp } from 'vue';
import '@mdi/font/css/materialdesignicons.css';
import 'suspendors';
import App from './App.vue';
import { router } from './router';
import { registerGlobalComponents } from './utils/registerGlobalComponents';

const root = createApp(App)
registerGlobalComponents(root)

root
    .use(router)
    .mount('#app')
