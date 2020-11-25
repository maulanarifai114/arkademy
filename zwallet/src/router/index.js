import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/auth/Signup.vue'
import Login from '../views/auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/',
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
