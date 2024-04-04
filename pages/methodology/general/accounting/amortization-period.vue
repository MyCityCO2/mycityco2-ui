<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid"
const { t, rt, tm } = useI18n()
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>{{ t("methodology.amortization_periods.title") }}</h3>
    </div>
    <div class="methodology__section">
      <div>
        <p>
          {{ t("methodology.amortization_periods.paragraph_1") }}
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li
            class="flex gap-x-3"
            v-for="(item, idx) in tm('methodology.amortization_periods.rules')"
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
      <div>
        <p>
          {{ t("methodology.amortization_periods.paragraph_2") }}
        </p>
        <div class="mt-8 flow-root w-full">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
              <table class="min-w-full">
                <thead class="bg-white">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 sm:pl-3"
                    >
                      {{
                        t("methodology.amortization_periods.table_headers.type")
                      }}
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900"
                    >
                      {{
                        t(
                          "methodology.amortization_periods.table_headers.assets"
                        )
                      }}
                    </th>
                    <th
                      scope="col"
                      class="py-3.5 pl-3 pr-4 sm:pr-3 text-left text-sm font-semibold text-neutral-900"
                    >
                      {{
                        t(
                          "methodology.amortization_periods.table_headers.duration"
                        )
                      }}
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <template
                    v-for="rule in tm(
                      'methodology.amortization_periods.table_rules'
                    )"
                    :key="rt(rule.name)"
                  >
                    <tr class="border-t border-neutral-200">
                      <th
                        colspan="5"
                        scope="colgroup"
                        class="bg-neutral-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 sm:pl-3"
                      >
                        {{ rt(rule.name) }}
                      </th>
                    </tr>
                    <tr
                      v-for="(r, ruleIdx) in rule.rules"
                      :key="ruleIdx"
                      :class="[
                        ruleIdx === 0
                          ? 'border-neutral-300'
                          : 'border-neutral-200',
                        'border-t',
                      ]"
                    >
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-3"
                      />
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-neutral-500"
                      >
                        {{ rt(r.name) }}
                      </td>
                      <td
                        class="whitespace-nowrap py-4 pl-3 pr-4 sm:pr-3 text-sm text-neutral-500"
                      >
                        {{ rt(r.duration) }}
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <p>
        {{ t("methodology.amortization_periods.paragraph_3") }}
      </p>
    </div>
  </div>
</template>
