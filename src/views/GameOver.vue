<template>
  <div class="game-over">
    <p class="over">
      Game Over
    </p>
    <p class="final-score">
      {{`Puntaje: ${this.$store.state.score}`}}
    </p>
    <div
      v-on:click="this.toHome()"
      class="button"
    >
      <p class="button-text">
        Volver al inicio
      </p>
    </div>
    <div
      v-on:click="this.reTry()"
      class="button"
    >
      <p class="button-text">
        Volver a jugar
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    reTry() {
      this.$store.commit('reset');
      this.$router.push('game');
    },
    toHome() {
      this.$store.commit('reset');
      this.$router.push('/');
    },
  },
};
</script>

<style>
.over {
  color: black;
  font-size: 60px;
  font-weight: bold;
  margin: 0;
}

.final-score {
  color: black;
  font-size: 25px;
  font-weight: bold;
  margin: 2vh 0 0 0;
}

.game-over{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button {
  width: 30vw;
  height: 5vh;
  display: flex;
  background-color: #35d433;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  margin: 3vh 0 0 0;
}

.button:hover {
  opacity: .7;
}

.button-text {
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin: 0;
}
</style>
