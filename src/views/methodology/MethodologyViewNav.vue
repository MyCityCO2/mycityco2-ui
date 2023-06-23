<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  navigation: Object,
  parent: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()

const currentHash = computed(() => route.hash)
</script>

<template>
  <ul role="list" class="space-y-1 overflow-hidden">
    <li v-for="item in props.navigation" :key="item.name">
      <template v-if="!item.children">
        <template v-if="item.to?.hash">
          <router-link
            :to="item.to"
            :class="[
              item.to.hash == currentHash ? 'bg-gray-50 text-primary' : 'hover:bg-gray-50',
              props.parent ? 'font-semibold' : 'font-normal',
              'block rounded-md py-2 pr-2 pl-10 text-sm leading-6  text-gray-700'
            ]"
            >{{ item.name }}</router-link
          >
        </template>
        <template v-else>
          <router-link
            :to="item.to"
            exact-active-class="bg-gray-50 !text-primary"
            :class="[
              props.parent ? 'font-semibold' : 'font-normal',
              'block rounded-md py-2 pr-2 pl-10 text-sm leading-6  text-gray-700'
            ]"
            >{{ item.name }}</router-link
          >
        </template>
      </template>

      <div v-else>
        <router-link
          :to="item.to"
          exact-active-class="bg-gray-50 !text-primary"
          class="hover:bg-gray-50 flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
        >
          <ChevronRightIcon
            :class="['rotate-90 text-gray-500 h-5 w-5 shrink-0']"
            aria-hidden="true"
          />
          {{ item.name }}
        </router-link>
        <ul class="mt-1 px-4">
          <MethodologyViewNav :navigation="item.children" />
        </ul>
      </div>
    </li>
  </ul>
</template>
