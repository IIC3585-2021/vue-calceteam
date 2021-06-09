<template>
  <div class="home">
    <p class="title">DogQuizz</p>
    <p class="subtitle">Ingresa tu nombre</p>
    <input v-model="username" placeholder="username" />
    <p>{{ empty }}</p>
    <div class="start" v-on:click="startGame()">
      <p class="start-text">Comenzar juego</p>
    </div>
    <LeaderBoard></LeaderBoard>
  </div>
</template>

<script>
import LeaderBoard from '@/components/LeaderBoard.vue';

export default {
  name: 'Home',
  data() {
    return {
      username: '',
      empty: '',
    };
  },
  components: {
    LeaderBoard,
  },
  methods: {
    startGame() {
      if (this.username.length) {
        this.$router.push('game');
        this.$store.commit('setUsername', this.username);
      } else {
        this.empty = 'Debes ingresar un nombre';
      }
    },
  },
  mounted() {
    fetch('https://dog.ceo/api/breeds/list/all').then(async (res) => {
      const resJson = await res.json();
      const breedsList = resJson.message;
      const breeds = [];
      Object.keys(breedsList).forEach((breed) => {
        if (breedsList[breed].length > 0) {
          breedsList[breed].forEach((type) => {
            breeds.push(`${type} ${breed}`.toUpperCase());
          });
        } else {
          breeds.push(breed.toUpperCase());
        }
      });
      this.$store.commit('setBreeds', breeds);
    });
  },
};
</script>

<style>
.home {
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 60px;
  color: black;
  font-weight: bold;
  margin: 0 0 3vh 0;
}

.subtitle {
  font-size: 20px;
  color: black;
  font-weight: semi-bold;
  margin: 0 0 3vh 0;
}

.start {
  width: 30vw;
  height: 5vh;
  display: flex;
  background-color: #35d433;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
}

.start:hover {
  opacity: 0.7;
}

.start-text {
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin: 0;
}
</style>
