<script setup>
import { navigation as footerLinks } from '@/constant'
import { socials } from '@/svg'
import { RouterLink } from 'vue-router'

const navigation = {
  main: footerLinks,
  social: socials
}
</script>

<template>
  <footer class="bg-gray-50 sticky top-auto left-0 bottom-0 right-0">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-16 lg:px-8">
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="pb-6">
          <RouterLink
            :to="item.href"
            class="text-sm leading-6 text-gray-600 hover:text-primary transition-all"
            >{{ item.name }}</RouterLink
          >
        </div>
      </nav>
      <div class="mt-10 flex justify-center space-x-10">
        <a
          v-for="item in navigation.social"
          :key="item.name"
          :href="item.href"
          target="_blank"
          class="text-gray-400 hover:text-primary transition-all"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <p class="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; 2023 MyCityCO2, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>
