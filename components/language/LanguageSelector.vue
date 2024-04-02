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
    <div
      v-for="locale in availableLocales"
      :key="locale.code"
      class="text-gray-900 group"
    >
      <NuxtLink
        :class="{
          'text-primary': locale.code === selectedLocale,
        }"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.name }}
      </NuxtLink>
      <span class="group-last:hidden ml-1">|</span>
    </div>
  </div>
</template>
