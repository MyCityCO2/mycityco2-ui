import { acceptHMRUpdate, defineStore } from 'pinia'
import { reactive, ref, watch } from 'vue'

export const useCityStore = defineStore('city', () => {
  const currentCity = ref(null)
  const selectorOpen = ref(false)
  const dashboardVariables = reactive({
    cityId: null,
    year: 2022
  })

  watch(currentCity, (newValue) => {
    if (newValue?.id) dashboardVariables.cityId = newValue.id
  })

  const setCurrent = (city) => (currentCity.value = city)
  const openSelector = () => (selectorOpen.value = true)
  const closeSelector = () => (selectorOpen.value = false)

  return {
    currentCity,
    selectorOpen,
    openSelector,
    closeSelector,
    setCurrent,
    dashboardVariables
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCityStore, import.meta.hot))
}
