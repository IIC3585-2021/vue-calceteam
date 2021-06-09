<template>
  <div class="home">
    <Loading v-if="loading" />
    <p class="title">
      DogQuizz
    </p>
    <div
      class="start"
      v-on:click="this.$router.push('game')"
    >
      <p class="start-text">
        Comenzar juego
      </p>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';

export default {
  name: 'Home',
  data() {
    return {
      loading: true,
    };
  },
  components: {
    Loading,
  },
  mounted() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(async (res) => {
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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 200px;
  color: white;
  font-weight: 1000;
  margin: 0 0 10vh 0;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
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
  opacity: .7;
}

.start-text {
  color: white;
  font-size: 45px;
  font-weight: bold;
  margin: 0;
}
</style>
