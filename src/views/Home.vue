<template>
  <div class="home">
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

export default {
  name: 'Home',
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
  opacity: .7;
}

.start-text {
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin: 0;
}
</style>
