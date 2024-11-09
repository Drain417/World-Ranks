<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const regions = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania'];

const toggleRegion = (region) => {
  const currentFilter = {...store.state.filter};
  if (currentFilter.region.includes(region)) {
    currentFilter.region = currentFilter.region.filter(r => r!== region);
  } else {
    currentFilter.region.push(region);
  }
  store.commit('SET_FILTER', currentFilter);
  store.commit('FILTER_COUNTRIES');
};

const isSelected = (region) => {
  return store.state.filter.region.includes(region);
};
</script>

<template>
 <label for="region-selector">Region</label>
 <div class="region-selector">
   <span
     v-for="region in regions"
     :key="region"
     class="region-tag"
     :class="{ selected: isSelected(region) }"
     @click="toggleRegion(region)"
   >
     {{ region }}
   </span>
 </div>
</template>

<style scoped>

.region-selector {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 ;
}

.region-tag {
  display: inline-block;
  padding: 8px 12px;
  border: 2px solid transparent;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  color: #6C727F;
  transition: background-color 0.3s, color 0.3s;
}

.region-tag.selected {
  background-color: #6C727F;
  color: white;
}

label {
  font-family: var(--font-family), sans-serif;
  font-weight: var(--font-weight-medium);
  font-size: 0.75rem;
  color: #6C727F;
}

</style>