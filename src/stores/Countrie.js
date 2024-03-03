import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { themes } from '@/Variables/CountrieVariables'

export const useCountrieStore = defineStore('Countrie', () => {
  const theme = ref(themes.themeDark)
  // const doubleCount = computed(() => count.value * 2)
  function setTheme(newTheme) {
    theme.value = newTheme
  }

  return { theme, setTheme }
})
