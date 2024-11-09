<script setup>
 import "@/assets/style.css";
 import { computed } from 'vue';
 import { useStore } from 'vuex';

 const store = useStore();

 const filteredCountriesCount = computed(() => store.getters.filteredCountriesCount);
</script>

<template>
  <div class="text">Found {{filteredCountriesCount}} countries</div>
</template>

<style scoped>
.text {
  font-family: var(--font-family), sans-serif;
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-semibold);
  color: #6C727F;
  position: absolute;
  top: 30px;
  left: 24px;
}
</style>