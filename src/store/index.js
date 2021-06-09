import { createStore } from 'vuex';

const sortScores = (user1, user2) => {
  if (user1.score < user2.score) {
    return 1;
  }
  return -1;
};

export default createStore({
  state() {
    return {
      username: '',
      score: 0,
      breeds: [],
      scores: [],
    };
  },
  mutations: {
    increment(state) {
      state.score += 1;
    },
    reset(state) {
      state.username = '';
      state.score = 0;
    },
    retry(state) {
      state.score = 0;
    },
    setBreeds(state, list) {
      state.breeds = list;
    },
    setUsername(state, name) {
      state.username = name;
    },
    orderScores(state) {
      state.scores.sort(sortScores);
    },
    gameover(state) {
      state.scores.push({ name: state.username, score: state.score });
    },
  },
  actions: {
  },
  modules: {
  },
});
