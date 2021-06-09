<template>
  <div class="question">
    <Loading v-if="loading" />
    <div class="question-container">
      <p class="question-text">
        ¿De qué raza es el perro de la foto?
      </p>
    </div>
    <img
      class="question-img"
      v-bind:src="url"
      @load="this.loading= false"
    >
    <div
      class="option"
      v-for="option in options"
      :key="option"
      v-on:click="checkAnswer(option)"
    >
      <p class="option-text">
        {{ option }}
      </p>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';

function shuffleArray(list) {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default {
  name: 'Question',
  data() {
    return {
      url: '',
      options: [],
      correct: '',
      loading: true,
    };
  },
  methods: {
    checkAnswer(selected) {
      if (selected === this.correct) {
        this.$store.commit('increment');
        this.loadQuestion();
      } else {
        this.$store.commit('gameover');
        this.$router.push('gameover');
      }
    },
    loadQuestion() {
      this.loading = true;
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(async (res) => {
          const resJson = await res.json();
          const params = resJson.message.split('/');
          const specificBreed = params[4].toUpperCase().split('-');
          let breed = '';
          if (specificBreed.length > 1) {
            breed = `${specificBreed[1]} ${specificBreed[0]}`;
          } else {
            breed = specificBreed[0];
          }
          const newOptions = [breed];
          const len = this.$store.state.breeds.length;
          if (len < 4) {
            this.$router.push('/');
          }
          while (newOptions.length < 4) {
            const index = Math.floor(Math.random() * len);
            const elem = this.$store.state.breeds[index];
            if (!newOptions.includes(elem)) {
              newOptions.push(elem);
            }
          }
          this.options = shuffleArray(newOptions);
          this.correct = breed;
          this.url = resJson.message;
        });
    },
  },
  mounted() {
    this.loadQuestion();
  },
  components: {
    Loading,
  },
};
</script>
<style>
.question {
  display: flex;
  height: 90vh;
  padding: 5vh 0;
  width: 75vw;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.question-container {
  width: 50vw;
  background-color: #557bad;
  border: 1px solid white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh 0;
  margin-bottom: 3vh;
}

.option {
  cursor: pointer;
  background-color: #35d433;
  display: flex;
  width: 35vw;
  height: 6vh;
  align-items: center;
  justify-content: center;
  margin: 1vh 0 0 0;
  border: 1px solid white;
  border-radius: 3vh;
}
.option:hover {
  opacity: .7;
}

.option-text {
  color: white;
  font-size: 3.5vh;
  font-weight: bold;
  margin: 0;
}

.question-text {
  font-size: 40px;
  color: white;
  font-weight: 1000;
  margin: 0;
}

.question-img {
  height: 45vh;
  border-radius: 10px;
}
</style>
