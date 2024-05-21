<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid"
const { t, rt, tm } = useI18n()
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>{{ t("methodology.limitations.title") }}</h3>
    </div>
    <div class="methodology__section">
      <div>
        <ul role="list" class="mt-2 space-y-2">
          <li
            class="flex gap-x-3"
            v-for="(item, idx) in tm('methodology.limitations.rules')"
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
    </div>
  </div>
</template>
