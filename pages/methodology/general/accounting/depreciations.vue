<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid"
const { t, rt, tm } = useI18n()
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>{{ t("methodology.depreciations.title") }}</h3>
    </div>
    <div class="methodology__section">
      <p>
        {{ t("methodology.depreciations.paragraph_1") }}
      </p>
      <div>
        <p>
          {{ t("methodology.depreciations.paragraph_2") }}
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li
            class="flex gap-x-3"
            v-for="(item, idx) in tm('methodology.depreciations.checklist_1')"
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
          {{ t("methodology.depreciations.paragraph_3") }}
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li
            class="flex gap-x-3"
            v-for="(item, idx) in tm('methodology.depreciations.checklist_2')"
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
      <p>
        {{ t("methodology.depreciations.paragraph_4") }}
      </p>
      <p>
        {{ t("methodology.depreciations.paragraph_5") }}
      </p>
      <p>
        {{ t("methodology.depreciations.paragraph_6") }}
      </p>
    </div>
  </div>
</template>
