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
        Nuevo juego
      </p>
    </div>
    <div
      v-on:click="this.reTry()"
      class="button"
    >
      <p class="button-text">
        Volver a intentar
      </p>
    </div>
  </div>
  <InfoBar />
</template>

<script>
import InfoBar from '@/components/InfoBar.vue';

export default {
  name: 'GameOver',
  components: {
    InfoBar,
  },
  methods: {
    reTry() {
      this.$store.commit('retry');
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
  color: white;
  font-size: 150px;
  font-weight: 1000;
  margin: 0;
}

.final-score {
  color: white;
  font-size: 50px;
  font-weight: bold;
  margin: 2vh 0 0 0;
}

.game-over{
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button {
  width: 40vw;
  height: 7vh;
  display: flex;
  background-color: #35d433;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  margin: 3vh 0 0 0;
  border: 1px solid white;
}

.button:hover {
  opacity: .7;
}

.button-text {
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin: 0;
}
</style>
