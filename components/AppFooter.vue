<script setup lang="ts">
import { socials } from "~/svg"

const { t } = useI18n()

const links = computed(() => [
  { to: "/legal", label: t("actions.legal_notice", 2) },
  { to: "/contact", label: t("actions.contact") },
])
</script>

<template>
  <footer class="bg-neutral-100 dark:bg-neutral-900">
    <div
      class="mx-auto max-w-7xl px-6 py-10 gap-4 md:gap-0 flex items-center flex-col md:flex-row md:items-center md:justify-between lg:px-8"
    >
      <div class="flex items-center space-x-4">
        <NuxtLinkLocale
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm leading-6 text-neutral-600 dark:text-neutral-300 hover:text-primary transition-all"
          >{{ link.label }}</NuxtLinkLocale
        >
        <a
          v-for="item in socials"
          :key="item.name"
          :href="item.href"
          target="_blank"
          class="text-neutral-400 hover:text-neutral-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
      <div class="text-center flex flex-col gap-2">
        <p class="text-gray-900 text-sm">
          {{ t("footer.open_source") }}
        </p>
        <a
          href="https://www.ecoindex.fr/resultat/?id=bc781b9b-1c33-49d5-980b-95e84119eed9"
          class="text-sm underline"
          target="_blank"
          rel="noopener noreferrer"
          >{{ t("footer.ecoindex", { n: 1.24 }) }}</a
        >
      </div>
      <div>
        <p
          class="text-center text-sm leading-5 text-neutral-500 dark:text-neutral-400"
        >
          &copy; {{ t("footer.copyright") }}
        </p>
      </div>
    </div>
  </footer>
</template>
