<script setup lang="ts">
import { ref, watchEffect } from "vue"

import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/20/solid"

const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

const prevPath = ref("")
const nextPath = ref("")

interface RouteItem {
  name: string
  to: { path: string; hash?: string }
  children?: RouteItem[]
}

const navigation: RouteItem[] = [
  {
    name: t("methodology.general_overview.title"),
    to: { path: "/methodology" },
    children: [
      {
        name: t("methodology.accounting.title"),
        to: { path: "/methodology/general/accounting" },
        children: [
          {
            name: t("methodology.accounting_plan.title"),
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
            name: t("methodology.accounts_config.title"),
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
        name: t("methodology.usage_license.content_title"),
        to: { path: "/methodology/license#content", hash: "#content" },
      },
      {
        name: t("methodology.usage_license.data_title"),
        to: { path: "/methodology/license#data", hash: "#data" },
      },
      {
        name: t("methodology.usage_license.source_code_title"),
        to: {
          path: "/methodology/license#source-code",
          hash: "#source-code",
        },
      },
      {
        name: t("methodology.usage_license.credit_title"),
        to: {
          path: "/methodology/license#credit",
          hash: "#credit",
        },
      },
    ],
  },
]

const findAdjacentPaths = (
  items: RouteItem[],
  currentPath: string
): { prev: string; next: string } => {
  let prev = ""
  let next = ""
  let foundCurrent = false

  const traverse = (items: RouteItem[]) => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      if (localePath(item.to.path) === currentPath) {
        foundCurrent = true
      } else if (foundCurrent && next === "") {
        next = localePath(item.to.path)
      } else if (!foundCurrent) {
        prev = localePath(item.to.path)
      }
      if (item.children) traverse(item.children)
    }
  }

  traverse(items)

  return { prev, next }
}

watchEffect(() => {
  const { prev, next } = findAdjacentPaths(navigation, route.path + route.hash)
  prevPath.value = prev
  nextPath.value = next
})
</script>

<template>
  <div>
    <AppHeading :title="t('methodology.title')" text="" :alt="true" />
    <section>
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
          <nav class="flex items-center justify-between mt-4 px-4 sm:px-0">
            <div class="-mt-px flex w-0 flex-1 group">
              <NuxtLinkLocale
                v-if="prevPath"
                :to="prevPath"
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
                v-if="nextPath"
                :to="nextPath"
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
