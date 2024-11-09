<script setup>
import {computed} from 'vue';
import {useStore} from 'vuex';
import '@/assets/style.css';
import { onMounted, watch } from 'vue';

const store = useStore();

onMounted(async() => {
  await store.dispatch('fetchCountries');
});

watch(
    () => store.state.filter,
    () => {
  store.commit('FILTER_COUNTRIES');
});

watch(
    () => store.state.searchTerm,
    () => {
  store.commit('FILTER_COUNTRIES');
});

const filteredCountries = computed(() => store.getters.getFilteredCountries);
const loading = computed(() => !store.state.countries.length);

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
}
</script>

<template>
 <div class="country-list">
   <div class="header">
     <div class="flag">Flag</div>
     <div class="name">Name</div>
     <div class="population">Population</div>
     <div class="area">Area(km²)</div>
     <div class="region">Region</div>
   </div>
   <div v-if="loading" class="loading">
     <div class="loading-placeholder"></div>
     <div class="loading-placeholder"></div>
     <div class="loading-placeholder"></div>
   </div>
   <div v-else>
     <div
       v-for="country in filteredCountries"
       :key="country.cca3"
       class="country-item"
       >
       <router-link :to="{name: 'CountryPage', params: {id: country.cca3} }" class="country-link">
         <img :src="country.flags" alt="Flag" />
         <span>{{country.name.common}}</span>
         <span>{{formatNumber(country.population)}}</span>
         <span>{{formatNumber(country.area)}}</span>
         <span>{{country.region}}</span>
       </router-link>
     </div>
   </div>
 </div>
</template>

<style scoped>
.country-list {
  position: absolute;
  right: 70px;
  top:100px;
  display: flex;
  flex-direction: column;
  width: 70%;
}

.header {
  display: flex;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-medium);
  color: #6C727F;
}

.flag {
  flex: 0 0 140px;
  text-align: left;
}

.name, .population, .area, .region {
  flex: 1;
  text-align: left;
}

.country-item {
  display: flex;
  padding: 10px 0;
}

.country-link {
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
  color: inherit;
}

.country-item img {
  width: 60px;
  height: 40px;
  text-align: left;
  margin-right: 80px;
  border-radius: 12px;
}

.country-item span {
  flex: 1;
  text-align: left;
  color:white;
}

</style>