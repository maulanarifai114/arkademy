import Vue from 'vue'
import VueRouter from 'vue-router'

import SignUp from '../views/auth/Signup.vue'
import Login from '../views/auth/Login.vue'
import Landing from '../views/landing-page/Landing.vue'
import Home from '../views/main/Home.vue'
import Auth from '../views/auth/Auth.vue'
import PinAuth from '../views/auth/Pin.vue'
import Reset from '../views/auth/ResetTypeEmail.vue'
import NewPass from '../views/auth/NewPass.vue'
import PinSuccess from '../views/auth/PinSuccess.vue'

import Dashboard from '../views/main/Dashboard.vue'
import Profile from '../views/main/Profile.vue'
import Transfer from '../views/main/Transfer.vue'
import Topup from '../views/main/Topup.vue'

import Personal from '../views/main/profile/Personal.vue'
import Pass from '../views/main/profile/Pass.vue'
import Pin from '../views/main/profile/Pin.vue'
import Phone from '../views/main/profile/Phone.vue'
import AddPhone from '../views/main/profile/AddPhone.vue'

import TransferTo from '../views/main/transfer/TransferTo.vue'

import store from '../store/index'

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
    redirect: '/auth/login',
    children: [
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUp,
        meta: { requiresVisitor: true }
      },
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: { requiresVisitor: true }
      },
      {
        path: 'pin',
        name: 'PinAuth',
        component: PinAuth,
        meta: { requiresPin: true }
      },
      {
        path: 'reset',
        name: 'Reset',
        component: Reset,
        meta: { requiresVisitor: true }
      },
      {
        path: 'newpass',
        name: 'NewPass',
        component: NewPass,
        meta: { requiresVisitor: true }
      },
      {
        path: 'pinsuccess',
        name: 'PinSuccess',
        component: PinSuccess,
        meta: { requiresVisitor: true }
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      {
        path: 'transfer',
        name: 'Transfer',
        component: Transfer,
        meta: { requiresAuth: true }
      },
      {
        path: 'transfer/id/:id',
        name: 'TransferTo',
        component: TransferTo,
        meta: { requiresAuth: true }
      },
      {
        path: 'topup',
        name: 'Topup',
        component: Topup,
        meta: { requiresAuth: true }
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true }
      },
      {
        path: 'personal',
        name: 'Personal',
        component: Personal,
        meta: { requiresAuth: true }
      },
      {
        path: 'pass',
        name: 'Pass',
        component: Pass,
        meta: { requiresAuth: true }
      },
      {
        path: 'pin',
        name: 'Pin',
        component: Pin,
        meta: { requiresAuth: true }
      },
      {
        path: 'phone',
        name: 'Phone',
        component: Phone,
        meta: { requiresAuth: true }
      },
      {
        path: 'addphone',
        name: 'AddPhone',
        component: AddPhone,
        meta: { requiresAuth: true }
      }

    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('ini meta data', to.matched.some(record => record.meta.requiresAuth))
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') === null) {
      next({
        path: '/auth/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (localStorage.getItem('token') !== null) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresPin)) {
    if (Object.keys(store.state.user).length === 0 && store.state.user.constructor === Object) {
      next({
        path: '/auth/signup'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
