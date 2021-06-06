import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      score: 0,
      breeds: [],
    };
  },
  mutations: {
    increment(state) {
      state.score += 1;
    },
    reset(state) {
      state.score = 0;
    },
    setBreeds(state, list) {
      state.breeds = list;
    },
  },
  actions: {
  },
  modules: {
  },
});
