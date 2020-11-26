import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/auth/Signup.vue'
import Login from '../views/auth/Login.vue'
import Landing from '../views/landing-page/Landing.vue'
import Home from '../views/main/Home.vue'
import Auth from '../views/auth/Auth.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    // redirect: '/signup',
    component: Landing
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUp
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
