<script setup>
const { locale: selectedLocale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const countryStore = useCountryStore()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code.includes(countryStore.country))
})
</script>

<template>
  <div class="hidden justify-self-end lg:flex items-center gap-1 ml-2">
    <NuxtLink
      :class="{
        'text-primary': locale.code === selectedLocale,
      }"
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="group text-gray-900"
    >
      {{ locale.name }}
      <span class="group-last:hidden">|</span>
    </NuxtLink>
  </div>
</template>
