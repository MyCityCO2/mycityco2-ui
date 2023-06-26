<script setup>
import { navigation as footerLinks } from '@/constant'
import { socials } from '@/svg'

const navigation = {
  main: footerLinks,
  social: socials
}
</script>

<template>
  <footer class="bg-gray-50 sm:sticky sm:top-auto sm:left-0 sm:bottom-0 sm:right-0">
    <div class="flex flex-col items-center overflow-hidden py-10 sm:py-16">
      <div class="container relative m-auto px-6 md:px-12">
        <div class="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div class="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div
              class="flex w-full justify-center space-x-12 text-gray-600 sm:w-7/12 md:justify-start"
            >
              <ul class="list-inside list-disc space-y-8">
                <li v-for="item in navigation.main" :key="item.name">
                  <RouterLink class="transition hover:text-primary" :to="item.href">{{
                    item.name
                  }}</RouterLink>
                </li>
              </ul>

              <!-- <ul role="list" class="space-y-8">
                <li v-for="item in navigation.social" :key="item.name">
                  <a
                    :href="item.href"
                    target="_blank"
                    class="flex items-center space-x-3 transition hover:text-primary"
                  >
                    <component :is="item.icon" class="w-5" />
                    <span>{{ item.name }}</span>
                  </a>
                </li>
              </ul> -->
            </div>
            <div
              class="m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left"
            >
              <span class="block text-gray-500"
                >On ne peut pas améliorer ce qu’on ne sait pas compter</span
              >
              <span class="block text-gray-500"
                >Besoin d'aide ?
                <RouterLink to="/contact" class="font-semibold">Contactez-nous</RouterLink></span
              >

              <span class="block text-gray-500"
                >&copy; <span id="year">2023 MyCityCO2. All rights reserved.</span></span
              >

              <!-- <span class="flex justify-between">
                <a href="#" class="font-semibold">Terms of Use</a>
                <a href="#" class="font-semibold">Privacy Policy</a>
              </span> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
