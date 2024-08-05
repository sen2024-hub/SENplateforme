import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Page from './components/vitrinePage.vue';
import Page1 from './components/vitrinePage1.vue';
import Page2 from './components/COMPTE.vue';

const routes = [
{
    path: '/hello', component: HelloWorld
},
{
    path: '/vitrinePage', component:Page
},
{
    path: '/vitrinePage1', component:Page1
},
{
    path: '/', component:Page2
},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App);
app.use(router);
app.mount('#app');
