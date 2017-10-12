import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

vue.use(vuex)
