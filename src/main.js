import { createApp } from 'vue';
import  App  from './App.vue';
import laodingPage from '@/components/laodingPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import vitrinePage1 from './components/vitrinePage1.vue';
import inscription from './components/COMPTE.vue';
import connecter from './components/PageConnexion.vue';
import nav from './components/navbarPage.vue';
import formation from './components/conception-et-developpement-web.vue';
import gestion from './components/gestion-de-projets-informatique.vue';
import infographie from './components/infographie-et-creation-multimedia.vue';
import design from './components/conception-graphique.vue';
import mobile from './components/conception-et-developpement-mobile.vue';
import reseau from './components/reseau-et-administration.vue';
import inscrire from './components/inscriptionPage.vue';

const routes = [
  { path: '/none', component: HelloWorld },
  { path: '/COMPTE', component: inscription },
  { path: '/PageConnexion', component: connecter },
  { path: '/conception-et-developpement-web', component: formation },
  { path: '/navbarPage', component: nav },
  { path: '/gestion-de-projets-informatique', component: gestion },
  { path: '/infographie-et-creation-multimedia', component: infographie },
  { path: '/conception-graphique', component: design },
  { path: '/conception-et-developpement-mobile', component: mobile },
  { path: '/reseau-et-administration', component: reseau },
  { path: '/inscriptionPage', component: inscrire },
  { path: '/', component: laodingPage },
  { path: '/vitrinePage1', component: vitrinePage1 }, // Ajout de la route pour vitrinePage1
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
