<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline"
import { socials } from "~/svg"

const { t } = useI18n()
const route = useRoute()
const localeRoute = useLocaleRoute()
const cityStore = useCityStore()

const mobileMenuOpen = ref(false)
const stickyHeader = ref(false)

const closeMenu = () => (mobileMenuOpen.value = false)

const diagnosticLink = computed(() => {
  if (route.params?.cityIdentifier)
    return localeRoute({
      name: "diagnostic-countryCode-cityIdentifier-cityName",
      params: {
        countryCode: route.params.countryCode,
        cityIdentifier: route.params.cityIdentifier,
        cityName: route.params.cityName,
      },
    })
  if (cityStore.hasCurrentCity)
    return localeRoute({
      name: "diagnostic-countryCode-cityIdentifier-cityName",
      params: {
        countryCode: "FR",
        cityIdentifier: cityStore.currentCity.cityIdentifier,
        cityName:
          cityStore.currentCity.slug || slug(cityStore.currentCity.name),
      },
    })
  return localeRoute("diagnostic")
})

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

const handleScroll = () => {
  if (process.server) return
  if (window && window.scrollY > 10) {
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
      stickyHeader
        ? 'bg-white dark:bg-neutral-950 shadow dark:shadow-xl'
        : 'bg-transparent shadow-none',
    ]"
  >
    <nav
      class="mx-auto max-w-7xl flex justify-between lg:grid grid-cols-8 items-center py-4 px-6 lg:px-8"
      aria-label="Global"
    >
      <div class="col-span-3 flex items-center gap-4">
        <NuxtLinkLocale to="/" class="-m-1.5 p-1.5">
          <img
            src="/assets/logo_MyCityCo2.png"
            class="h-16 w-auto text-primary"
            alt="logo MyCityCo2"
          />
        </NuxtLinkLocale>
        <CountrySelector class="hidden lg:block" />
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
      <div class="hidden col-span-4 lg:flex lg:items-center lg:gap-x-12">
        <NuxtLinkLocale
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          class="header-link"
          active-class="!text-primary !border-primary"
          >{{ t(item.name) }}</NuxtLinkLocale
        >
        <button @click="navigateTo(diagnosticLink)" class="button-primary">
          Diagnostic
        </button>
      </div>
      <LanguageSelector />
    </nav>
    <ClientOnly
      ><HeadlessTransitionRoot as="template" :show="mobileMenuOpen">
        <HeadlessDialog
          as="div"
          class="relative z-50 lg:hidden"
          @close="closeMenu()"
        >
          <HeadlessTransitionChild
            as="template"
            enter="ease-in-out duration-500"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-neutral-300/80 transition-opacity" />
          </HeadlessTransitionChild>

          <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
              <div
                class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full"
              >
                <HeadlessTransitionChild
                  as="template"
                  enter="transform transition ease-out sm:ease-in-out duration-300 sm:duration-500"
                  enter-from="opacity-0 sm:translate-x-full"
                  enter-to="opacity-100 sm:translate-x-0"
                  leave="transform transition ease-in sm:ease-in-out duration-300 sm:duration-500"
                  leave-from="opacity-100 sm:translate-x-0"
                  leave-to="opacity-0 sm:translate-x-full"
                >
                  <HeadlessDialogPanel
                    class="pointer-events-auto w-screen sm:max-w-md"
                  >
                    <div
                      class="flex h-full flex-col overflow-y-auto px-6 py-6 shadow-xl bg-white"
                    >
                      <div class="flex items-center justify-between">
                        <NuxtLinkLocale
                          to="/"
                          class="-m-1.5 p-1.5 ring-0 outline-none"
                        >
                          <img
                            src="/assets/symboleC_MyCityCo2.png"
                            class="h-8 w-auto text-primary"
                            alt=""
                          />
                        </NuxtLinkLocale>
                        <button
                          type="button"
                          class="-m-2.5 rounded-md p-2.5 text-neutral-700"
                          @click="closeMenu()"
                        >
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-neutral-500/10">
                          <div class="space-y-2 py-6">
                            <NuxtLinkLocale
                              v-for="item in navigation"
                              :key="item.name"
                              :to="item.to"
                              custom
                              v-slot="{ href, navigate }"
                            >
                              <a
                                :href="href"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                                @click.prevent="navigate(), closeMenu()"
                                >{{ item.name }}</a
                              >
                            </NuxtLinkLocale>
                          </div>
                          <div class="py-6">
                            <NuxtLinkLocale
                              :to="diagnosticLink"
                              custom
                              v-slot="{ href, navigate }"
                              class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                              ><a
                                :href="href"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                                @click.prevent="navigate(), closeMenu()"
                                >Diagnostic</a
                              ></NuxtLinkLocale
                            >
                          </div>
                          <CountrySelector class="pt-8" />
                        </div>
                      </div>
                    </div>
                  </HeadlessDialogPanel>
                </HeadlessTransitionChild>
              </div>
            </div>
          </div>
        </HeadlessDialog> </HeadlessTransitionRoot
    ></ClientOnly>
  </header>
</template>
