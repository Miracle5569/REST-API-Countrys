<script setup>
import { themes, backgroundColors } from '@/Variables/CountrieVariables'
import { useCountrieStore } from '@/stores/Countrie'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useCountrieStore()
const { theme } = storeToRefs(store)
const fontIconTheme = ref('fas')

const backgroundColor = ref(backgroundColors.DarkBlue)
const textColor = ref('white')

const ChangeTheme = () => {
  if (theme.value === themes.themeDark) {
    store.setTheme(themes.themeLight)
    fontIconTheme.value = 'far'
    backgroundColor.value = backgroundColors.White
    textColor.value = 'black'
  } else {
    store.setTheme(themes.themeDark)
    fontIconTheme.value = 'fas'
    backgroundColor.value = backgroundColors.DarkBlue
    textColor.value = 'white'
  }
}
</script>

<template>
  <header
    class="countrie-header"
    :style="{ color: textColor, 'background-color': backgroundColor }"
  >
    <div class="countrie-header__container _container">
      <h1 class="countrie-header__title">Where is the world?</h1>
      <span @click="ChangeTheme" class="countrie-header__change-theme">
        <font-awesome-icon :icon="[fontIconTheme, 'moon']" /> Dark mode
      </span>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../assets/variables' as varColor;
.countrie-header {
  &__container {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 22px;
  }

  &__change-theme {
    &:hover {
      cursor: pointer;
    }
    &:active {
      text-decoration: underline;
    }
  }
}
</style>
