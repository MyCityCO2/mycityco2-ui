<script setup lang="ts">
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/20/solid"

const { t } = useI18n()
const route = useRoute()
const pageMeta = computed(() => route.meta)
const navigation = [
  {
    name: t("methodology.general_overview.title"),
    to: { path: "/methodology/" },
    children: [
      {
        name: t("methodology.accounting.title"),
        to: { path: "/methodology/general/accounting/" },
        children: [
          {
            name: t("methodology.standardized_chart_of_accounts.title"),
            to: { path: "/methodology/general/accounting/plan" },
          },
          {
            name: t("methodology.investment.title"),
            to: {
              path: "/methodology/general/accounting/investment",
            },
          },
          {
            name: t("methodology.operation.title"),
            to: {
              path: "/methodology/general/accounting/functionning",
            },
          },
          {
            name: t("methodology.depreciations.title"),
            to: {
              path: "/methodology/general/accounting/depreciations",
            },
          },
          {
            name: t("methodology.amortization_periods.title"),
            to: {
              path: "/methodology/general/accounting/amortization-period",
            },
          },
          {
            name: t("methodology.account_configuration.title"),
            to: {
              path: "/methodology/general/accounting/accounts-configuration",
            },
          },
        ],
      },
      {
        name: t("methodology.monetary_emission_factors.title"),
        to: { path: "/methodology/general/emission-factor" },
      },
      {
        name: t("methodology.emission_posts.title"),
        to: { path: "/methodology/general/emission-post" },
      },
      {
        name: t("methodology.limitations.title"),
        to: { path: "/methodology/general/limitations" },
      },
    ],
  },
  {
    name: t("methodology.data_sources.title"),
    to: { path: "/methodology/datasources" },
  },
  {
    name: t("methodology.usage_license.title"),
    to: { path: "/methodology/license" },
    children: [
      {
        name: t("methodology.contents.title"),
        to: { path: "/methodology/license", hash: "#content" },
      },
      {
        name: t("methodology.data.title"),
        to: { path: "/methodology/license#data", hash: "#data" },
      },
      {
        name: t("methodology.source_code.title"),
        to: {
          path: "/methodology/license#source-code",
          hash: "#source-code",
        },
      },
      {
        name: t("methodology.credit.title"),
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
    <AppHeading :title="t('methodology.title')" text="" :alt="true" />
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
                {{ t("actions.previous") }}
              </NuxtLinkLocale>
            </div>

            <div class="-mt-px flex w-0 flex-1 justify-end group">
              <NuxtLinkLocale
                v-if="pageMeta?.meta?.next"
                :to="pageMeta.meta.next"
                class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-neutral-500"
              >
                {{ t("actions.next") }}
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
