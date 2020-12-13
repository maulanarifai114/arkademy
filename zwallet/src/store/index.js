import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: null || localStorage.getItem('token')
  },
  mutations: {
    SAVE_USER (state, payload) {
      state.user = payload
      state.token = payload.token
    }
  },
  actions: {
    LOGIN (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}v2/users/login`, payload)
          .then((res) => {
            console.log(res.data.result)
            context.commit('SAVE_USER', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    },
    REGISTER (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}v2/users/register`, payload)
          .then((res) => {
            console.log(res.data.result)
            context.commit('SAVE_USER', res.data.result)
            // localStorage.setItem('token', res.data.result.token)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    },
    UPDATE_PIN (context, payload) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_BASE_URL}v2/users`, payload)
          .then((res) => {
            console.log(res.data.result)
            context.commit('SAVE_USER', res.data.result)
            // localStorage.setItem('token', res.data.result.activeToken)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    }
  },
  modules: {
  }
})
