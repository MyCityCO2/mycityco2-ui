<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/20/solid"
import { computed } from "vue"
import { useRoute } from "vue-router"

const props = defineProps({
  navigation: Object,
  parent: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()
const currentUrl = computed(() => route.path + route.hash)
const isActiveLink = (linkUrl) => currentUrl.value === linkUrl
</script>

<template>
  <ul role="list" class="space-y-1 overflow-hidden">
    <li v-for="item in props.navigation" :key="item.name">
      <template v-if="!item.children">
        <NuxtLinkLocale
          :to="item.to"
          :class="[
            isActiveLink(item.to.path)
              ? 'bg-neutral-50 dark:bg-white/10 !text-primary dark:!text-primary'
              : 'hover:bg-neutral-50 dark:hover:bg-white/10',
            props.parent ? 'font-semibold' : 'font-normal',
            'block rounded-md py-2 pr-2 pl-10 text-sm leading-6 text-neutral-700 dark:text-neutral-300',
          ]"
          >{{ item.name }}</NuxtLinkLocale
        >
      </template>

      <div v-else>
        <NuxtLinkLocale
          :to="item.to"
          exact-active-class="bg-neutral-50 dark:bg-white/10 !text-primary"
          class="hover:bg-neutral-50 dark:hover:bg-white/10 flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-neutral-700 dark:text-neutral-300"
        >
          <ChevronRightIcon
            :class="[
              'rotate-90 text-neutral-500 dark:text-neutral-400 h-5 w-5 shrink-0',
            ]"
            aria-hidden="true"
          />
          {{ item.name }}
        </NuxtLinkLocale>
        <ul class="mt-1 px-4">
          <NavSide :navigation="item.children" />
        </ul>
      </div>
    </li>
  </ul>
</template>
