<script setup lang="ts">
const cityStore = useCityStore()
const { t, rt, tm } = useI18n()
</script>

<template>
  <div>
    <HeadingDiagnostic :title="t('diagnostic.title')" />
    <div class="mt-10">
      <div>
        <div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h3>{{ t("diagnostic.no_city_selected") }}</h3>
            <p class="mt-6 leading-text">
              {{ t("diagnostic.select_city_to_continue") }}
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <button @click="cityStore.openSelector()" class="button-primary">
                {{ t("diagnostic.select") }}
              </button>
              <NuxtLinkLocale to="/contact" class="link">
                {{ t("diagnostic.request_city") }}
                <span aria-hidden="true">→</span>
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
