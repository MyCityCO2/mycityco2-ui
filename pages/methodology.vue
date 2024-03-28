<script setup lang="ts">
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/20/solid"

const route = useRoute()
const pageMeta = computed(() => route.meta)
const navigation = [
  {
    name: "Présentation générale",
    to: { path: "/methodology/" },
    children: [
      {
        name: "Comptabilité",
        to: { path: "/methodology/general/accounting/" },
        children: [
          {
            name: "Plan comptable normalisé",
            to: { path: "/methodology/general/accounting/plan" },
          },
          {
            name: "Investissement",
            to: {
              path: "/methodology/general/accounting/investment",
            },
          },
          {
            name: "Fonctionnement",
            to: {
              path: "/methodology/general/accounting/functionning",
            },
          },
          {
            name: "Amortissements",
            to: {
              path: "/methodology/general/accounting/depreciations",
            },
          },
          {
            name: "Durées d’amortissement",
            to: {
              path: "/methodology/general/accounting/amortization-period",
            },
          },
          {
            name: "Configuration des comptes",
            to: {
              path: "/methodology/general/accounting/accounts-configuration",
            },
          },
        ],
      },
      {
        name: "Facteurs d'émissions monétaires",
        to: { path: "/methodology/general/emission-factor" },
      },
      {
        name: "Postes d'émissions",
        to: { path: "/methodology/general/emission-post" },
      },
      {
        name: "Limitations",
        to: { path: "/methodology/general/limitations" },
      },
    ],
  },
  {
    name: "Sources de données",
    to: { path: "/methodology/datasources" },
  },
  {
    name: "License d'utilisation",
    to: { path: "/methodology/license" },
    children: [
      {
        name: "Contenus",
        to: { path: "/methodology/license", hash: "#content" },
      },
      {
        name: "Données",
        to: { path: "/methodology/license#data", hash: "#data" },
      },
      {
        name: "Code source",
        to: {
          path: "/methodology/license#source-code",
          hash: "#source-code",
        },
      },
      {
        name: "Comment créditer MyCityCO2",
        to: {
          path: "/methodology/license#credit",
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
              <NuxtLinkLocale
                v-if="pageMeta?.meta?.previous"
                :to="pageMeta.meta.previous"
                class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-neutral-500"
              >
                <ArrowLongLeftIcon
                  class="mr-3 h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors"
                  aria-hidden="true"
                />
                Précédent
              </NuxtLinkLocale>
            </div>

            <div class="-mt-px flex w-0 flex-1 justify-end group">
              <NuxtLinkLocale
                v-if="pageMeta?.meta?.next"
                :to="pageMeta.meta.next"
                class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-neutral-500"
              >
                Suivant
                <ArrowLongRightIcon
                  class="ml-3 h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors"
                  aria-hidden="true"
                />
              </NuxtLinkLocale>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>
