import { slug } from '@/utils'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'

export const useCityStore = defineStore('city', () => {
  const currentCity = ref(null)
  const selectorOpen = ref(false)
  const dashboardVariables = reactive({
    cityId: 0,
    year: 2022
  })

  watch(currentCity, (newValue) => {
    if (newValue?.cityIdentifier) dashboardVariables.cityId = newValue.cityIdentifier
  })

  const hasCurrentCity = computed(() => !!dashboardVariables.cityId != 0)

  const setCurrentCity = (city) => (currentCity.value = { ...city, slug: slug(city.name) })
  const setCurrentCityId = (cityId) => (currentCity.value = { cityIdentifier: cityId })
  const openSelector = () => (selectorOpen.value = true)
  const closeSelector = () => (selectorOpen.value = false)

  return {
    hasCurrentCity,
    selectorOpen,
    currentCity,
    openSelector,
    closeSelector,
    setCurrentCity,
    setCurrentCityId,
    dashboardVariables
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCityStore, import.meta.hot))
}
