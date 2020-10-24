import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        serverUrl: '',
        connected: false,
        socket: null
    }
})

export default store;