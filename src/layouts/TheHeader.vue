<script setup>
import { navigation } from '@/constant'
import { useCityStore } from '@/stores/city'
import { socials } from '@/svg'
import { slug } from '@/utils'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { isDev } from '@/utils'

const route = useRoute()
const cityStore = useCityStore()
const mobileMenuOpen = ref(false)
const stickyHeader = ref(window.scrollY > 10 ? true : false)
const closeMenu = () => (mobileMenuOpen.value = false)
const diagnosticLink = computed(() => {
  if (route.params?.cityIdentifier)
    return {
      name: 'diagnosticCity',
      params: {
        countryCode: route.params.countryCode,
        cityIdentifier: route.params.cityIdentifier,
        cityName: route.params.cityName
      }
    }
  if (cityStore.hasCurrentCity)
    return {
      name: 'diagnosticCity',
      params: {
        countryCode: 'FR',
        cityIdentifier: cityStore.currentCity.cityIdentifier,
        cityName: cityStore.currentCity.slug || slug(cityStore.currentCity.name)
      }
    }
  return { name: 'diagnosticIndex' }
})

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})

function handleScroll() {
  if (window.scrollY > 10) {
    stickyHeader.value = true
  } else {
    stickyHeader.value = false
  }
}
</script>

<template>
  <header
    :class="[
      'z-50 fixed inset-x-0 top-0 transition-all duration-500',
      stickyHeader ? 'bg-white shadow' : 'bg-transparent shadow-none'
    ]"
  >
    <div class="bg-red-300 w-full text-center py-1 text-gray-900 text-sm" v-if="isDev">
      Dev Environment
    </div>
    <div class="mx-auto flex flex-row max-w-7xl items-center justify-between pt-2 px-2 lg:px-8">
      <div class="flex mt-2 sm:mt-0 justify-center space-x-4">
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
      <div class="order-first sm:order-last">
        <p class="text-gray-900 text-sm">Initiative open source - open data</p>
      </div>
    </div>
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between pb-4 px-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link :to="{ name: 'home' }" class="-m-1.5 p-1.5">
          <img src="@/assets/logo_MyCityCo2.png" class="h-16 w-auto text-primary" alt="" />
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          active-class="!text-primary !border-primary"
          class="header-link"
          >{{ item.name }}</router-link
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <router-link :to="diagnosticLink" class="button-primary">Diagnostic</router-link>
      </div>
    </nav>

    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="closeMenu()">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-300/80 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <TransitionChild
                as="template"
                enter="transform transition ease-out sm:ease-in-out duration-300 sm:duration-500"
                enter-from="opacity-0 sm:translate-x-full"
                enter-to="opacity-100 sm:translate-x-0"
                leave="transform transition ease-in sm:ease-in-out duration-300 sm:duration-500"
                leave-from="opacity-100 sm:translate-x-0"
                leave-to="opacity-0 sm:translate-x-full"
              >
                <DialogPanel class="pointer-events-auto w-screen sm:max-w-md">
                  <div class="flex h-full flex-col overflow-y-auto px-6 py-6 shadow-xl bg-white">
                    <div class="flex items-center justify-between">
                      <router-link to="/" class="-m-1.5 p-1.5 ring-0 outline-none">
                        <img
                          src="@/assets/symboleC_MyCityCo2.png"
                          class="h-8 w-auto text-primary"
                          alt=""
                        />
                      </router-link>
                      <button
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 text-gray-700"
                        @click="closeMenu()"
                      >
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div class="mt-6 flow-root">
                      <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                          <router-link
                            v-for="item in navigation"
                            :key="item.name"
                            :to="item.href"
                            custom
                            v-slot="{ href, navigate }"
                          >
                            <a
                              :href="href"
                              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              @click.prevent="navigate(), closeMenu()"
                              >{{ item.name }}</a
                            >
                          </router-link>
                        </div>
                        <div class="py-6">
                          <router-link
                            :to="diagnosticLink"
                            custom
                            v-slot="{ href, navigate }"
                            class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            ><a
                              :href="href"
                              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              @click.prevent="navigate(), closeMenu()"
                              >Diagnostic</a
                            ></router-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </header>
</template>
