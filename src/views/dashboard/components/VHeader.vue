<script setup>
import VCitySelector from '@/components/VCitySelector.vue'
import { useCityStore } from '@/stores/city'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const cityStore = useCityStore()
</script>

<template>
  <div class="flex h-16 shrink-0 justify-between items-center lg:items-start gap-x-4 bg-white px-4">
    <h3>Commune de {{ cityStore.currentCity.name }}</h3>
    <div class="relative z-50 hidden lg:block">
      <div
        class="absolute right-0 w-96 transform divide-y divide-gray-500 divide-opacity-10 rounded-xl ring-1 ring-black ring-opacity-5 transition-all"
      >
        <VCitySelector :hasQuickActions="false" />
      </div>
    </div>
    <div class="block lg:hidden">
      <button class="bg-gray-50 p-3 rounded-xl group" @click="cityStore.openSelector()">
        <MagnifyingGlassIcon
          class="h-5 w-5 text-gray-900 text-opacity-40 group-hover:text-primary"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>
