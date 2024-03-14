// stores/language.js
import { defineStore } from 'pinia'

export const useCountryStore = defineStore('country', {
  state: () => ({
    country: 'FR'
  }),
  actions: {
    setCountry(newCountryCode) {
      this.country = newCountryCode
    }
  }
})
