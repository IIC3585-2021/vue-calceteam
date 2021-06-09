<template>
  <div class="info-container">
    <Player />
    <LeaderBoard />
  </div>
</template>

<script>
import Player from '@/components/Player.vue';
import LeaderBoard from '@/components/LeaderBoard.vue';

export default {
  name: 'InfoBar',
  components: {
    Player,
    LeaderBoard,
  },
};
</script>

<style>
.info-container {
  height: 90vh;
  padding: 5vh 0;
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
