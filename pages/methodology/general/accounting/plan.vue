<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid"

const { t, rt, tm } = useI18n()
</script>
<template>
  <div>
    <div class="methodology__section_header">
      <h3>{{ t("methodology.accounting_plan.title") }}</h3>
    </div>
    <div class="methodology__section">
      <p>
        {{ t("methodology.accounting_plan.description_1") }}
      </p>
      <div>
        <p>
          {{ t("methodology.accounting_plan.description_2") }}
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li
            class="flex gap-x-3"
            v-for="(item, idx) in tm('methodology.accounting_plan.checklist_1')"
            :key="idx"
          >
            <CheckCircleIcon
              class="mt-1 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span
              ><strong class="font-semibold text-neutral-900"
                >{{ t("class") }} {{ idx + 1 }} - {{ rt(item.key) }} :
                {{ "" }}</strong
              >{{ rt(item.text) }}</span
            >
          </li>
        </ul>
      </div>

      <div>
        <p>
          {{ t("methodology.accounting_plan.description_1") }}
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li
            class="flex gap-x-3"
            v-for="(item, idx) in tm('methodology.accounting_plan.checklist_1')"
            :key="idx"
          >
            <CheckCircleIcon
              class="mt-1 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span
              ><strong class="font-semibold text-neutral-900"
                >{{ t("class") }} {{ idx + 1 }} - {{ rt(item.key) }} :
                {{ "" }}</strong
              >{{ rt(item.text) }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
