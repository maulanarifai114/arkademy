import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/auth-view/Signup.vue'
import Login from '../views/auth-view/Login.vue'
import Auth from '../views/auth/Auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
