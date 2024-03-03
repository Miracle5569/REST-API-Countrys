<script setup>
import CountrieSearch from '@/components/CountrieSearch.vue'
import CountrieFilter from '@/components/CountrieFilter.vue'
import { ref } from 'vue'

const searchCountry = ref('')
</script>

<template>
  <main class="countrie">
    <div class="countrie__container _container">
      <div class="countrie__search-and-filter">
        <CountrieSearch @send-country="(country) => (searchCountry = country)" />
        <CountrieFilter />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '../assets/variables' as varColor;

.countrie {
  background-color: varColor.$Very-Dark-Blue;

  &__search-and-filter {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px 0;
  }
}
</style>
