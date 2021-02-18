import Vue from 'vue'
import Vuex from 'vuex'
import all from './modules/all'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        all
    },
    plugins: [createPersistedState({
        storage: window.localStorage
    })]
})