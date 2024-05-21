import { ref, reactive, computed, watch } from "vue"

export const useCityStore = defineStore("city", () => {
  const currentCity = ref<City | null>(null)
  const selectorOpen = ref<boolean>(false)
  const dashboardVariables = reactive<DashboardVariables>({
    cityId: 0,
    year: 2022,
  })

  watch(currentCity, (newValue) => {
    if (newValue?.cityIdentifier)
      dashboardVariables.cityId = newValue.cityIdentifier
  })

  const hasCurrentCity = computed(() => dashboardVariables.cityId !== 0)

  const setCurrentCity = (city: City) =>
    (currentCity.value = { ...city, slug: city.name ? slug(city.name) : "" })
  const setCurrentCityId = (cityId: number) =>
    (currentCity.value = { cityIdentifier: cityId })
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
    dashboardVariables,
  }
})
