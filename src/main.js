import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store/store.js';
import router from '@/views/router';

const app = createApp(App);

app.use(store).use(router).mount('#app');