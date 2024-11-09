<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const searchTerm = computed({
  get: () => store.state.searchTerm,
  set: (value) => {
    store.commit('SET_SEARCH_TERM', value);
    store.commit('FILTER_COUNTRIES');
  }
});

</script>

<template>
  <div class="search-container">
    <div class="search-icon">
      <img src="/Search.svg" alt="Search" />
    </div>
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search by Name, Region, Subregion"
    />
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #6C727F;
  border-radius: 12px;
  position: relative;
  padding: 2px;
  width: 400px;
  left: 55vw;
  top: 1vw;
  background-color: #282B30;
}

img {
  position: relative;
  left: 5px;
  top: 1.5px;
}

.search-icon {
  margin-right: 20px;
}

input {
  border: none;
  outline: none;
  flex: 1;
  padding: 8px;
  border-radius: 20px;
  background-color: transparent;
  color: #D2D5DA;
}
</style>