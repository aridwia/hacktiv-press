import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

vue.use(vuex)

const state = {
  Articles = []
}

const mutations = {
  setarticles (state, payload) {
    console.log('ini data di mutation pyload', payload)
    state.Articles = payload
  }
}

const action = {
  getallArticles ({commit}) {
    http.get('/articles')
    .then(({allArticles}) => {
      console.log('ini all article', allArticles)
      commit('setarticles', allArticles)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  action
})

export default store
