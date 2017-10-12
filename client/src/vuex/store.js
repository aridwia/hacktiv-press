import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

vue.use(vuex)

const state = {
  Articles: []
}

const mutations = {
  setarticles (state, payload) {
    console.log('ini data di mutation pyload', payload)
    state.Articles = payload
  }
}

const actions = {
  getallArticles ({commit}) {
    http.get('/articles')
    .then(allArticles => {
      console.log('ini all article', allArticles.data)
      commit('setarticles', allArticles.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  removeArticle ({commit}, id) {
    http.get('/articles/' + id)
    .then(deletedArticle => {
      commit('setdeletedarticle', id)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

const store = new vuex.Store({
  state,
  mutations,
  actions
})

export default store
