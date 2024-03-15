<script setup>
import { socials } from '@/svg'
</script>

<template>
  <footer class="bg-gray-100">
    <div
      class="mx-auto max-w-7xl px-6 py-12 flex items-center flex-col md:flex-row md:items-center md:justify-between lg:px-8"
    >
      <div class="flex items-center space-x-4">
        <RouterLink
          :to="{ name: 'legal' }"
          class="text-sm leading-6 text-gray-600 hover:text-primary transition-all"
          >Mentions légales</RouterLink
        >
        <RouterLink
          :to="{ name: 'contact' }"
          class="text-sm leading-6 text-gray-600 hover:text-primary transition-all"
          >Contact</RouterLink
        >
        <a
          v-for="item in socials"
          :key="item.name"
          :href="item.href"
          target="_blank"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
      <p class="text-gray-900 text-sm">Initiative open source - open data</p>
      <div class="mt-8 md:mt-0">
        <p class="text-center text-sm leading-5 text-gray-500">
          &copy; 2023 MyCityCo2 a free and open source tool.
        </p>
      </div>
    </div>
  </footer>
</template>
