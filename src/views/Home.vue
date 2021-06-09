<template>
  <div class="home">
    <Loading v-if="loading" />
    <p class="title">
      DogQuizz
    </p>
    <p class="subtitle">
      Ingresa tu nombre
    </p>
    <input
      v-model="username"
      placeholder="Nombre de usuario"
      class="input"
    />
    <p>
      {{ empty }}
    </p>
    <div
      class="start"
      v-on:click="startGame()"
    >
      <p class="start-text">
        Comenzar juego
      </p>
    </div>
  </div>
  <InfoBar />
</template>

<script>
import Loading from '@/components/Loading.vue';
import InfoBar from '@/components/InfoBar.vue';

export default {
  name: 'Home',
  data() {
    return {
      username: '',
      empty: '',
      loading: true,
    };
  },
  components: {
    InfoBar,
    Loading,
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
      this.loading = false;
    });
  },
};
</script>

<style>
.home {
  justify-content: center;
  align-items: center;
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 200px;
  color: white;
  font-weight: 1000;
  margin: 0 0 12vh 0;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.subtitle {
  font-size: 25px;
  color: white;
  font-weight: semi-bold;
  margin: 0 17vw 1vh 0;
}

.input {
  height: 7vh;
  width: 28vw;
  padding: 0 1vw;
  border-radius: 15px;
  border: none;
  font-size: 30px;
}

.input:focus {
  outline: none;
}

.start {
  width: 30vw;
  height: 7vh;
  display: flex;
  background-color: #35d433;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  border: 1px solid white;
}

.start:hover {
  opacity: 0.7;
}

.start-text {
  color: white;
  font-size: 45px;
  font-weight: bold;
  margin: 0;
}
</style>
