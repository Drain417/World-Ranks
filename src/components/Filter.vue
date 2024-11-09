<script setup>
 import Sort from './filters/Sort.vue';
 import Region from './filters/Region.vue';
 import Status from './filters/Status.vue';
</script>

<template>
  <div class="filter-container">
    <Sort />
    <Region />
    <Status />
  </div>
</template>

<style scoped>
.filter-container {
  position: absolute;
  width:20%;
  left: 24px;
  top: 74px;
}
</style>