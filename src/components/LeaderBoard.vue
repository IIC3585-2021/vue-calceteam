<template>
  <div class="table">
    <p>Tabla de puntajes</p>
    <table border="1">
        <thead>
            <th>Nombre</th>
            <th>Puntaje</th>
        </thead>
            <tr v-for="user in this.$store.state.scores " :key="user">
                <td>{{user.name}}</td>
                <td>{{user.score}}</td>
            </tr>
    </table>
  </div>
</template>

<script>

export default {

  mounted() {
    this.$store.commit('orderScores');
  },
};
</script>
<style>
.table {
  margin-top: 20px;
  color: #000;
  font-size: 15px;
  font-weight: bold;
}
</style>
