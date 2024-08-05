import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Page from './components/vitrinePage.vue';
import vitrine from './components/vitrinePage1.vue';
import inscription from './components/COMPTE.vue';
import connecter from './components/PageConnexion.vue';

const routes = [
{
    path: '/hello', component: HelloWorld
},
{
    path: '/vitrinePage', component:Page
},
{
    path: '/vitrinePage1', component:vitrine
},
{
    path: '/COMPTE', component:inscription
},
{
    path: '/', component:connecter
},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App);
app.use(router);
app.mount('#app');
