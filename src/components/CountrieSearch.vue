<script setup>
import { ref } from 'vue'
const searchCountry = ref('')
const emits = defineEmits(['sendCountry'])

const sendCountryForSearch = () => {
  emits('sendCountry', searchCountry.value)
}
</script>

<template>
  <div class="search">
    <font-awesome-icon class="search-icon" :icon="['fas', 'magnifying-glass']" />
    <input
      v-model="searchCountry"
      type="text"
      class="search-input"
      placeholder="Search for the country..."
      @keyup.enter="sendCountryForSearch"
    />
  </div>
</template>

<style scoped lang="scss">
@use '../assets/variables' as varColor;

.search {
  position: relative;

  &-icon {
    position: absolute;
    left: 20px;
    top: 17px;
    color: varColor.$White;
  }

  &-input {
    width: 380px;
    height: 45px;
    border: none;
    outline: none;
    background-color: varColor.$Dark-Blue;
    color: varColor.$White;
    border-radius: 5px;
    padding-left: 55px;
    padding-right: 15px;

    &::placeholder {
      color: varColor.$White;
    }
  }
}
</style>
