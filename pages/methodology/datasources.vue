<script setup lang="ts">
const { t, rt, tm } = useI18n()
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>{{ t("methodology.data_sources.title") }}</h3>
    </div>
    <div class="flex flex-col methodology__section">
      <div
        class="overflow-hidden shadow rounded sm:rounded-lg max-w-3xl"
        v-for="data in tm('methodology.data_sources.list')"
        :key="rt(data.name)"
      >
        <div class="px-4 py-6 sm:px-6">
          <h3 class="text-base font-semibold leading-7 text-neutral-900">
            {{ rt(data.name) }}
          </h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-neutral-500">
            {{ t("methodology.data_sources.details") }}
          </p>
        </div>
        <div class="border-t border-neutral-100">
          <dl class="divide-y divide-neutral-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-neutral-900">
                {{ t("definition") }}
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0"
              >
                {{ rt(data.definition) }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-neutral-900">
                {{ t("year", 2) }}
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0"
              >
                {{ rt(data.year) }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-neutral-900">
                {{ t("geography") }}
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0"
              >
                {{ rt(data.geo) }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-neutral-900">
                {{ t("supplier") }}
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0"
              >
                {{ rt(data.vendor) }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-neutral-900">
                {{ t("link") }}
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0"
              >
                <a :href="rt(data.link)" target="_blank" class="text-link">{{
                  rt(data.link)
                }}</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
