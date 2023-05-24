import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'

const app = createApp(App);
//app.mount('#app');
app.use(store);
app.use(router).mount('#app');











