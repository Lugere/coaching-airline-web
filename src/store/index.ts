import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isPlaying: false,
        length: 0,
        songTitle: "Peter Maffay - So bist du",
        songLength: 175,
        songPlayed: 0,
        volume: 50,
    },
    mutations: {},
    actions: {
        setIsPlaying(state, val) {
            state.isPlaying = val;
        },
        setLength(state, val) {
            state.isPlaying = val;
        },
        setSongTitle(state, val) {
            state.isPlaying = val;
        },
        setSongLength(state, val) {
            state.isPlaying = val;
        },
        setSongPlayed(state, val) {
            state.isPlaying = val;
        },
        setVolume(state, val) {
            state.isPlaying = val;
        },
    },
    modules: {},
});

export default store;
