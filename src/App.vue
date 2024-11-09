<template>
  <div id="app">
    <div id="background-image"></div>
    <img src="/Logo.svg"  alt="Logo" />
    <div class="container">
      <router-view></router-view>
    </div>
    <div id="background-overlay" ></div>
  </div>
</template>

<style scoped>
html, body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}

#app {
  position:relative;
  min-height: 100vh;
  overflow: hidden;
}

#background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background-image: url(/hero-image-wr.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 0;
}

#background-overlay {
  position: fixed;
  top: 25%;
  left: 0;
  width: 100%;
  height: 75%;
  background-color: #1B1D1F;
  z-index: 0;
}

img {
  position: absolute;
  top: 12.5%;
  left: 45%;
  z-index: 1;
}

</style>

<script setup>

</script>
