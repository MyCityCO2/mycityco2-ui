<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid"

const props = defineProps({
  title: String,
})
const cityStore = useCityStore()
</script>

<template>
  <div
    class="flex lg:min-h-[4rem] justify-between items-center lg:items-start gap-x-4 bg-white"
  >
    <TransitionFade>
      <div class="lg:basis-1/2 xl:basis-3/5">
        <h3>{{ props.title }}</h3>
      </div>
    </TransitionFade>
    <div class="relative z-50 hidden lg:block">
      <div
        class="absolute right-0 w-96 transform divide-y divide-neutral-500 divide-opacity-10 rounded-xl ring-1 ring-black ring-opacity-5 transition-all"
      >
        <CitySelector :hasQuickActions="false" />
      </div>
    </div>
    <div class="block lg:hidden">
      <button
        class="bg-neutral-50 p-3 rounded-xl group"
        @click="cityStore.openSelector()"
      >
        <MagnifyingGlassIcon
          class="h-5 w-5 text-neutral-900 text-opacity-40 group-hover:text-primary"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>
