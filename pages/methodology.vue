<script setup lang="ts">
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/20/solid"

const route = useRoute()
const pageMeta = computed(() => route.meta)
console.log(pageMeta.value)
const localePath = useLocalePath()
const navigation = [
  {
    name: "Présentation générale",
    to: { path: localePath("/methodology/") },
    children: [
      {
        name: "Comptabilité",
        to: { path: localePath("/methodology/general/accounting/") },
        children: [
          {
            name: "Plan comptable normalisé",
            to: { path: localePath("/methodology/general/accounting/plan") },
          },
          {
            name: "Investissement",
            to: {
              path: localePath("/methodology/general/accounting/investment"),
            },
          },
          {
            name: "Fonctionnement",
            to: {
              path: localePath("/methodology/general/accounting/functionning"),
            },
          },
          {
            name: "Amortissements",
            to: {
              path: localePath("/methodology/general/accounting/depreciations"),
            },
          },
          {
            name: "Durées d’amortissement",
            to: {
              path: localePath(
                "/methodology/general/accounting/amortization-period"
              ),
            },
          },
          {
            name: "Configuration des comptes",
            to: {
              path: localePath(
                "/methodology/general/accounting/accounts-configuration"
              ),
            },
          },
        ],
      },
      {
        name: "Facteurs d'émissions monétaires",
        to: { path: localePath("/methodology/general/emission-factor") },
      },
      {
        name: "Postes d'émissions",
        to: { path: localePath("/methodology/general/emission-post") },
      },
      {
        name: "Limitations",
        to: { path: localePath("/methodology/general/limitations") },
      },
    ],
  },
  {
    name: "Sources de données",
    to: { path: localePath("/methodology/datasources") },
  },
  {
    name: "License d'utilisation",
    to: { path: localePath("/methodology/license") },
    children: [
      {
        name: "Contenus",
        to: { path: localePath("/methodology/license"), hash: "#content" },
      },
      {
        name: "Données",
        to: { path: localePath("/methodology/license#data"), hash: "#data" },
      },
      {
        name: "Code source",
        to: {
          path: localePath("/methodology/license#source-code"),
          hash: "#source-code",
        },
      },
      {
        name: "Comment créditer MyCityCO2",
        to: {
          path: localePath("/methodology/license#credit"),
          hash: "#credit",
        },
      },
    ],
  },
]
</script>

<template>
  <div>
    <AppHeading title="Méthodologie" text="" :alt="true" />
    <section class="section-small section-top-0">
      <div
        class="flex flex-col space-y-8 sm:flex-none sm:space-y-0 sm:grid sm:grid-cols-3 md:grid-cols-4 sm:gap-x-8"
      >
        <div class="sm:col-span-1">
          <nav class="flex flex-col sticky top-0">
            <NavSide
              :navigation="navigation"
              :parent="true"
              id="methodologyNav"
            />
          </nav>
        </div>

        <div class="sm:col-span-2 md:col-span-3 relative" id="methodology">
          <NuxtPage :page-key="(route) => route.path" />
          <nav
            v-if="pageMeta"
            class="flex items-center justify-between mt-4 px-4 sm:px-0"
          >
            <div class="-mt-px flex w-0 flex-1 group">
              <NuxtLink
                v-if="pageMeta?.meta?.previous"
                :to="localePath(pageMeta.meta.previous)"
                class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500"
              >
                <ArrowLongLeftIcon
                  class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors"
                  aria-hidden="true"
                />
                Précédent
              </NuxtLink>
            </div>

            <div class="-mt-px flex w-0 flex-1 justify-end group">
              <NuxtLink
                v-if="pageMeta?.meta?.next"
                :to="localePath(pageMeta.meta.next)"
                class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500"
              >
                Suivant
                <ArrowLongRightIcon
                  class="ml-3 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors"
                  aria-hidden="true"
                />
              </NuxtLink>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>
