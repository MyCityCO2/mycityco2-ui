<script setup>
import {
  CheckIcon,
  ChevronUpDownIcon,
  MapPinIcon,
} from "@heroicons/vue/20/solid"
import { useCountryStore } from "~/stores/country"

const { t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const countryStore = useCountryStore()

const countries = computed(() => [
  { code: "FR", label: t("country.FR") },
  { code: "CH", label: t("country.CH") },
])

const selectedCountry = ref(countries.value[0])

const changeCountry = async () => {
  const { code } = selectedCountry.value
  const localeCode = `fr-${code}`
  countryStore.setCountry(code)
  await navigateTo(switchLocalePath(localeCode))
  locale.value = localeCode
}

watch(locale, () => {
  selectedCountry.value = countries.value[countryStore.country === "FR" ? 0 : 1]
})
</script>

<template>
  <HeadlessListbox as="div" v-model="selectedCountry" by="code">
    <div class="relative mt-1">
      <HeadlessListboxButton
        class="relative w-full cursor-pointer rounded-md border text-gray-900 border-gray-900 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
        <span class="flex items-center truncate gap-2"
          ><MapPinIcon class="h-5 w-5" aria-hidden="true" />{{
            selectedCountry.label
          }}</span
        >
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </HeadlessListboxButton>
      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <HeadlessListboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
          <HeadlessListboxOption
            v-slot="{ active, selected }"
            v-for="country in countries"
            :key="country.code"
            :value="country"
            as="template"
            @click="changeCountry"
          >
            <li
              :class="{ 'bg-primary/10': active }"
              class="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900"
            >
              <span
                :class="[
                  selected ? 'font-semibold' : 'font-normal',
                  'block truncate',
                ]"
              >
                {{ country.label }}</span
              >
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </HeadlessListboxOption>
        </HeadlessListboxOptions>
      </transition>
    </div>
  </HeadlessListbox>
</template>
