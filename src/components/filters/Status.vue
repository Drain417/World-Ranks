<script setup>
import {computed} from 'vue';
import {useStore} from 'vuex';
import '@/assets/style.css';

const store = useStore();

const toggleUnMember = () => {
  const currentValue = store.state.filter.unMember;
  store.commit('SET_UN_MEMBER', currentValue === null ? true : null);
};

const toggleIndependent = () => {
  const currentValue = store.state.filter.independent;
  store.commit('SET_INDEPENDENT', currentValue === null ? true : null);
};

const isSelected = (filter) => {
  return filter === 'unMember' ? store.state.filter.unMember : store.state.filter.independent;
}
</script>

<template>
<div class="status">
  <div class="title">Status</div>
  <div class="checkbox"  @click="toggleUnMember">
    <div class="box">
      <img v-if="isSelected('unMember')" src="/Done_round.svg" alt="Checked"/>
    </div>
    <span @click.stop>Member of the United Nations</span>
  </div>
  <div class="checkbox" @click="toggleIndependent">
    <div class="box">
      <img v-if="isSelected('independent')" src="/Done_round.svg" alt="Checked"/>
    </div>
    <span @click.stop>Independent</span>
  </div>
</div>
</template>

<style scoped>
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
}

.box {
  width: 20px;
  height: 20px;
  border: 1px solid #6C727F;
  border-radius: 5px;
  margin-right: 10px;
}


span {
  font-family: var(--font-family), sans-serif;
  font-weight: var(--font-weight-medium);
  color:white;
  font-size:0.875rem;
  letter-spacing: 0.025em;
}

img {
  overflow: hidden;
  position: relative;
  top:-1px;
  left:-1.25px;
}

.title {
  font-family: var(--font-family), sans-serif;
  font-weight: var(--font-weight-medium);
  font-size: 0.75rem;
  color: #6C727F;
}
</style>