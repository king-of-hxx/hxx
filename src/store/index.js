import Vue from 'vue'
import Vuex from 'vuex'
import latestMusic from './modules/latestMusic'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    latestMusic
  }
})