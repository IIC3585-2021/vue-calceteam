import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      username: '',
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
    setUsername(state, name) {
      state.username = name;
    },
  },
  actions: {
  },
  modules: {
  },
});
