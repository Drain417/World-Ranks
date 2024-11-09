<script setup>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();

const country = computed(() => {
  const countryCode = route.params.id;
  if (!countryCode) return null;

  const foundCountry = store.state.countries.find(c => c.cca3 === countryCode) || {
    languages: [],
    currencyName: '',
    continents: [],
    borders: [],
    name: { common: '', official: '' },
    logged: false,
  }

  if (foundCountry && !foundCountry.logged) {
    console.log('Found country:', foundCountry);
    foundCountry.logged = true;
  }

  foundCountry.languages = Object.values(foundCountry.languages);
  console.log('Found country:', foundCountry);
  return foundCountry;
});

onMounted(() => {
  const foundCountry = country.value;
  if (foundCountry && !foundCountry.logged) {
    console.log('Logging country:', foundCountry);
    foundCountry.logged = true;
  }
});

const goBack = () => {
  router.push({ name: 'Home' });
};

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
}
</script>

<template>
  <div class="container">
  <div class="country-page" @click.stop>
   <img :src="country.flags" alt="Flag" class="flag" />
   <div class="country-name">
     <h2>{{ country.name.common }}</h2>
     <h3>{{ country.name.official }}</h3>
   </div>
   <div class="stats">
    <div class="stat-container">
      <div class="stat">
        <div class="label">Population</div>
        <div class="value">{{ formatNumber(country.population) }}</div>
      </div>
      <div class="stat">
        <div class="label">Area</div>
        <div class="value">{{ formatNumber(country.area) }} km²</div>
      </div>
    </div>
   </div>
  <div class="details">
    <div class="detail">
      <span class="key">Capital</span>
      <span class="value">{{ country.capital[0] }}</span>
    </div>
    <div class="detail">
      <span class="key">Subregion</span>
      <span class="value">{{ country.subregion }}</span>
    </div>
    <div class="detail">
      <span class="key">Language</span>
      <span class="value">{{ country.languages.length ? country.languages.join(', ') : 'N/A' }}</span>
    </div>
    <div class="detail">
      <span class="key">Currency</span>
      <span class="value">{{ country.currencyName }}</span>
    </div>
    <div class="detail">
      <span class="key">Continents</span>
      <span class="value">{{ country.continents.join(', ') }}</span>
    </div>
  </div>
  <div class="neighbours">
    <h4>Neighbouring Countries</h4>
    <ul class="neighbour-list" v-if="country.borders.length">
      <li v-for="neighbour in country.borders" :key="neighbour">{{ neighbour }}</li>
    </ul>
    <p v-else>No neighbouring countries.</p>
  </div>
  </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  background-color: #1B1D1F;
  border: 1px solid #D2D5DA;
  border-radius: 20px;
  margin-top: 100px;
  top: 6vw;
  width: 60%;
  left: 20%;
  min-height: 800px;
  z-index: 1;
  overflow-y: scroll;
  max-height: 80vh;
}

.container::-webkit-scrollbar {
  display: none;
}

.country-page {
  position: relative;
  text-align: center;
  padding: 20px;
  z-index: 1000;
}

.flag {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: block;
}

.country-name {
  margin: 10px 0;
  color: white;
}

.stat-container {
  padding: 10px;
  display: flex;
  justify-content: space-around;
  color: white;
}

.stats {
  margin: 20px 0;
}

.stat {
  display: flex;
  background-color: #6C727F;
  flex-direction: row;
  padding: 20px 30px;
  border-radius: 15px;
  align-items: center;
  text-align: center;
  gap: 40px;
}

.details {
  text-align: left;
  margin:20px 0;
  color: white;
}

.detail {
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
  margin: 0 -20px;
  box-shadow: 0 0 1px #D2D5DA;
}

.key{
  flex: 1;
}

.value {
  flex: 1;
  text-align: right;
}

.neighbours {
  margin-top: 20px;
  color: white;
}

.neighbour-list {
  list-style-type: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.neighbour-list li {
  margin: 0 5px;
}
</style>