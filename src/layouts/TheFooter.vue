<script setup>
import { navigation as footerLinks } from '@/constant'
import { socials } from '@/svg'

const navigation = {
  main: footerLinks,
  social: socials
}
</script>

<template>
  <footer class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in navigation.social"
          :key="item.name"
          :href="item.href"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-500">
          &copy; 2023 MyCityCo2 a free and open source tool.
        </p>
      </div>
    </div>
  </footer>
</template>
