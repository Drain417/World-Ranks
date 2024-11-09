<script setup>
import "@/assets/style.css";
import { useStore } from "vuex";
import { computed } from 'vue';

const store = useStore();

const sortBy = computed(() => store.state.sortBy);

const handleSortChange = (event) => {
  store.commit('SET_SORT_BY', event.target.value);
};

</script>

<template>
 <div class="font">
   <label for="sort-select">Sort by:</label>
   <div>
   <select name="sort" id="sort-select" v-model="sortBy" @change="handleSortChange">
    <option value="population" >Population</option>
    <option value="name" >Name</option>
    <option value="area" >Area</option>
   </select>
   <img src="/Expand_down.svg" alt="Down Arrow" />
   </div>
 </div>
</template>

<style scoped>
label {
  font-family: var(--font-family), sans-serif;
  font-weight: var(--font-weight-medium);
  font-size: 0.75rem;
  color: #6C727F;
}

select {
  appearance: none;
  background-color: #282B30;
  border-radius: 4px;
  border: 1px solid #D2D5DA;
  padding: 7px 5vw 7px 1vw;
  color: white;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: var(--font-family), sans-serif;
  font-weight: var(--font-weight-medium);
}

img {
  position:relative;
  right: 20px;
  top: 5px;
}

option {
  color: white;
  font-family: var(--font-family), sans-serif;
  font-weight: var(--font-weight-medium);
}

</style>