<template>
  <div class="player-container">
    <p class="player-text">{{`Jugador: ${this.$store.state.username}`}}</p>
    <p class="player-text">{{`Puntaje: ${this.$store.state.score}`}}</p>
  </div>
</template>

<script>
export default {
  name: 'Player',
};
</script>

<style>
.player-container {
  width: 20vw;
  height: 10vh;
  padding: 5vh 0;
  background-color: white;
  border-radius: 15px;
  border: 1px solid black;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
}
.player-text {
  color: black;
  font-weight: bold;
  font-size: 30px;
  margin: 0;
}
</style>
