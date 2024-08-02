import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Page from './components/vitrinePage.vue';
import Page1 from './components/vitrinePage1.vue';

const routes = [
{
    path: '/hello', component: HelloWorld
},
{
    path: '/vitrinePage', component:Page
},
{
    path: '/', component:Page1
},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App);
app.use(router);
app.mount('#app');
