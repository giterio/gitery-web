import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeRoute from './home';
import AboutRoute from './about';

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  HomeRoute,
  AboutRoute,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
