<template>
  <div class="loading-screen">
    <p class="loading-text">
      Cargando...
    </p>
  </div>
</template>

<style>
.loading-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.loading-text {
  font-size: 80px;
  color: #FFF;
  font-weight: bold;
}
</style>
