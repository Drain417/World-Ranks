<script setup>
import Header from "./Header.vue";
import Filter from "./Filter.vue";
import CountryList from "./CountryList.vue";
import Search from "./Search.vue";
</script>

<template>
  <div class="container">
    <Header />
    <Filter />
    <Search />
    <CountryList />
  </div>
</template>

<style scoped>

.container {
  position: relative;
  padding: 20px;
  background-color: #1B1D1F;
  border: 1px solid #D2D5DA;
  border-radius: 20px;
  margin-top: 100px;
  top: 6vw;
  width: 80%;
  left: 10%;
  min-height: 800px;
  z-index: 1;
  overflow-y: scroll;
  max-height: 80vh;
}

.container::-webkit-scrollbar {
  display: none;
}

</style>