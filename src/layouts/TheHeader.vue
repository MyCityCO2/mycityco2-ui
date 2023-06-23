<script setup>
import { navigation } from '@/constant'
import { socials } from '@/svg'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { onBeforeMount, ref } from 'vue'

const mobileMenuOpen = ref(false)
const stickyHeader = ref(false)
const closeMenu = () => (mobileMenuOpen.value = false)

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})

function handleScroll() {
  if (window.scrollY) {
    stickyHeader.value = true
  } else {
    stickyHeader.value = false
  }
}
</script>

<template>
  <header :class="['z-50 absolute inset-x-0 top-0']">
    <div
      class="mx-auto flex flex-col sm:flex-row max-w-7xl items-center justify-between pt-2 px-6 lg:px-8"
    >
      <div class="flex mt-2 sm:mt-0 justify-center space-x-4">
        <a
          v-for="item in socials"
          :key="item.name"
          :href="item.href"
          target="_blank"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="order-first sm:order-last">
        <p class="text-gray-900 text-sm">Initiative OpenData - OpenSource</p>
      </div>
    </div>
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link :to="{ name: 'home' }" class="-m-1.5 p-1.5">
          <img src="@/assets/image.png" class="h-24 w-auto text-primary" alt="" />
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
        <router-link to="/dashboard" class="button-primary-small">Diagnostic</router-link>
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
                  <div class="flex h-full flex-col overflow-y-auto bg-white px-6 py-6 shadow-xl">
                    <div class="flex items-center justify-between">
                      <router-link to="/" class="-m-1.5 p-1.5 ring-0 outline-none">
                        <img src="@/assets/image.png" class="h-8 w-auto text-primary" alt="" />
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
                            :to="{ name: 'dashboard' }"
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
