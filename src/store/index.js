import Vue from 'vue';
import Vuex from 'vuex';

const state = {
    keepSongs:[],
}

const mutations = {
    ADDSONG(state,song){
        state.keepSongs.push(song);
    }
    
};

const actions = {
    addSong({commit}, song){
        commit('ADDSONG', song)
    }
};

const getters = {};

Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

