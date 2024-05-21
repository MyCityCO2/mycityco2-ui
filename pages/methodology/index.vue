<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid"
import { Bars2Icon, XMarkIcon } from "@heroicons/vue/24/outline"

const { t, rt, tm } = useI18n()

definePageMeta({
  meta: {
    previous: null,
    next: "/methodology/general/accounting/",
  },
})
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>{{ t("methodology.general_overview.title") }}</h3>
    </div>
    <div class="methodology__section">
      <p>
        {{
          t("methodology.general_overview.carbon_flash_accounts_calculation")
        }}
      </p>
      <p>
        {{ t("methodology.general_overview.carbon_flash_accounts_definition") }}
      </p>
      <div>
        <p>
          {{ t("methodology.general_overview.emissions_by_category") }}
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li
            class="flex gap-x-3"
            v-for="(item, idx) in tm('methodology.general_overview.checklist')"
            :key="idx"
          >
            <CheckCircleIcon
              class="mt-1 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span>{{ rt(item) }}</span>
          </li>
        </ul>
      </div>
      <div
        class="flex flex-col lg:flex-row justify-around space-x-4 items-center lg:items-start"
      >
        <div class="p-4">
          <h5>{{ t("methodology.general_overview.ghg_emissions") }}</h5>
          <p class="mt-1">(CO2e)</p>
        </div>
        <div class="my-8">
          <Bars2Icon class="h-5 w-5 text-black" />
        </div>
        <div class="flex flex-col space-y-2">
          <div class="rounded-xl bg-primary p-4">
            <h5 class="text-white">
              {{ t("methodology.general_overview.financial_data") }}
            </h5>
            <p class="mt-1 !text-white">
              {{ t("methodology.general_overview.in_euros") }}
            </p>
          </div>
          <p>{{ t("methodology.general_overview.per_account") }}</p>
          <p class="!text-sm italic">
            {{ t("methodology.general_overview.annual_accounts_collection") }}
          </p>
        </div>

        <div class="my-8">
          <XMarkIcon class="h-5 w-5 text-black" />
        </div>
        <div class="flex flex-col space-y-2">
          <div class="rounded-xl bg-primary p-4">
            <h5 class="text-white">
              {{ t("methodology.general_overview.emission_factor") }}
            </h5>
            <p class="mt-1 !text-white">
              {{ t("methodology.general_overview.co2e_per_euro") }}
            </p>
          </div>
          <p>
            {{ t("methodology.general_overview.emission_factor_database") }}
          </p>
          <p class="!text-sm italic">
            {{ t("methodology.general_overview.exiobase_carbon_database") }}
          </p>
        </div>
      </div>
      <p>
        {{ t("methodology.general_overview.result_tonnes_co2_equivalent") }}
      </p>
    </div>
  </div>
</template>
