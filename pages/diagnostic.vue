<script setup lang="ts">
const { t, rt, tm } = useI18n()
</script>

<template>
  <div class="top-padding">
    <section class="section-small">
      <NuxtPage :page-key="(route) => route.path" />
    </section>
    <section id="project">
      <div class="mx-auto max-w-3xl lg:text-center">
        <span class="tooltip">{{ t("diagnostic.development_axes") }}</span>
        <h3 class="mt-2">{{ t("diagnostic.community_development") }}</h3>
        <p class="mt-6 leading">
          {{ t("diagnostic.community_development_description") }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in tm('diagnostic.features')"
            :key="rt(feature.name)"
            class="relative pl-16"
          >
            <dt class="text-base font-semibold leading-7 text-neutral-900">
              {{ rt(feature.name) }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-neutral-600">
              {{ rt(feature.description) }}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>
