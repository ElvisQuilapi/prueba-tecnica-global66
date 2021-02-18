import axios from 'axios'
import { URI_API } from '@/services/index'

const state = {
    pokemones: [],
    loading: false
}

const getters = {
    allPokemones: (state) => state.pokemones,
    statusLoading: (state) => state.loading
}

const actions = {
    async loadPokemones({ commit }) {
        try {
            commit('setLoading', true);
            const response = await axios.get(`${URI_API}v2/pokemon`)
            const listsPokemones = response.data.results

            for (var i = 0; i < listsPokemones.length; i++) {
                listsPokemones[i].id = i
                listsPokemones[i].favorites = false
            }
            commit('setPokemones', listsPokemones)
        } catch (error) {
            console.log(error)
        }
        finally {
            setTimeout(() => commit('setLoading', false), 2000);
        }
    },
    async updateFavorites({ commit }, updPokemon) {
        commit('updateFavorites', updPokemon)
    },
}

const mutations = {
    setLoading: (state, value) => (state.loading = value),
    setPokemones: (state, pokemones) => (state.pokemones = pokemones),
    updateFavorites: (state, updPokemon) => (state.pokemones[updPokemon.id].favorites = updPokemon.favorites)
}

export default {
    state,
    actions,
    mutations,
    getters
}

