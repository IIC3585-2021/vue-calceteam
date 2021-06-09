<template>
  <div class="table invisible-scrollbar">
    <div class="table-title-container">
      <p class="table-title">
        Tabla de puntajes
      </p>
    </div>
    <table>
        <thead>
            <th class="column left">
              <p class="table-text">
                Nombre
              </p>
            </th>
            <th class="column">
              <p class="table-text">
                Puntaje
              </p>
            </th>
        </thead>
            <tr v-for="user in this.$store.state.scores " :key="user">
                <td class="column left">
                  <p class="table-text">
                    {{user.name}}
                  </p>
                </td>
                <td>
                  <p class="table-text">
                    {{user.score}}
                  </p>
                </td>
            </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'LeaderBoard',
  mounted() {
    this.$store.commit('orderScores');
  },
};
</script>
<style>
table, th, td {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-collapse: collapse;
}

.left {
  border-right: 1px solid black;
}

.table {
  margin-top: 20px;
  color: #000;
  font-size: 15px;
  font-weight: bold;
  background-color: white;
  width: 20vw;
  border-radius: 10px;
  padding-bottom: 1vh;
  height: 68vh;
  border: 1px solid black;
  overflow-y: auto;
}

.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}

.table-title {
  font-size: 25px;
  margin: 0;
  color: white;
}

.table-title-container {
  background-color: #db9a60;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 7vh;
}

.table-text {
  font-size: 20px;
  margin: 1vh 0;
}

.column {
  width: 10vw;
}
</style>
