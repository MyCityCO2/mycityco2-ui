<script setup>
import { useCountryStore } from '@/stores/countryStore'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale, setLocaleMessage } = useI18n()
const countryStore = useCountryStore()

defineProps({
  language: String
})

watch(
  () => countryStore.country,
  async (newCountry) => {
    await changeLanguage(locale.value, newCountry)
  }
)

const changeLanguage = async (newLocale, newCountry) => {
  const messages = await import(`../locales/${newCountry}/${newLocale}.json`)
  setLocaleMessage(newLocale, messages.default)
  locale.value = newLocale
}
</script>

<template>
  <button
    :class="{
      'text-primary': locale === language,
      'text-gray-900': locale !== language
    }"
    @click="changeLanguage(language, countryStore.country)"
  >
    {{ language.toUpperCase() }}
  </button>
</template>
