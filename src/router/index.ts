import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeRoute from './home';
import PostRoute from './post';
import AboutRoute from './about';
import LoginRoute from './login';
import ProfileRoute from './profile';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  HomeRoute,
  PostRoute,
  AboutRoute,
  LoginRoute,
  ProfileRoute,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
