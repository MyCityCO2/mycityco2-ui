<script setup lang="ts">
const { t, tm, rt } = useI18n()

definePageMeta({
  layout: "home",
})

defineOgImageComponent("NuxtSeo", {
  title: "MyCityCO2",
  description:
    "A free and open-source tool for monitoring the carbon footprints of the 35,000 French cities, serving the fight against climate change.",
})
</script>

<template>
  <div>
    <div
      class="relative isolate overflow-hidden bg-gradient-to-b from-emerald-100/20 dark:from-emerald-700/20 pt-40 lg:pt-56"
    >
      <div
        class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white dark:bg-neutral-950 shadow-xl shadow-primary/10 ring-1 ring-emerald-50 dark:ring-emerald-600 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
        >
          <h1
            class="max-w-2xl text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto"
          >
            {{ t("home.hero.title") }}
          </h1>

          <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p class="leading-text">
              {{ t("home.hero.text") }}
            </p>
            <div
              class="mt-10 transform divide-y divide-neutral-500 dark:divide-neutral-300 divide-opacity-10 overflow-hidden rounded-xl ring-1 ring-black dark:ring-white ring-opacity-5 transition-all"
            >
              <CitySelector :hasQuickActions="false" auto-focus />
            </div>
            <div class="mt-10 flex items-center gap-x-6">
              <NuxtLinkLocale to="/contact" class="button-primary">{{
                t("actions.contribute")
              }}</NuxtLinkLocale>
              <NuxtLinkLocale
                :to="{ path: '/', hash: '#project' }"
                class="text-sm font-semibold leading-6 text-neutral-900"
                >{{ t("actions.learn_more") }}
                <span aria-hidden="true">→</span></NuxtLinkLocale
              >
            </div>
          </div>
          <img
            src="/assets/images/main.svg"
            alt=""
            class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div
        class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-neutral-950 sm:h-32"
      />
    </div>

    <section>
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <div
          v-for="stat in tm('home.stats')"
          :key="rt(stat.value)"
          class="mx-auto flex max-w-xs flex-col gap-y-4"
        >
          <h3>{{ rt(stat.value) }}</h3>
          <p class="leading-text">{{ rt(stat.name) }}</p>
        </div>
      </div>
    </section>

    <section id="project">
      <div class="mx-auto max-w-3xl lg:text-center">
        <span class="tooltip">{{ t("home.features.subtitle") }}</span>
        <h3 class="mt-2">
          {{ t("home.features.title") }}
        </h3>
        <p class="mt-6 leading">
          {{ t("home.features.description") }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in tm('home.features.list')"
            :key="rt(feature.name)"
            class="relative pl-16"
          >
            <dt
              class="text-base font-semibold leading-7 text-neutral-900 dark:text-white"
            >
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
              >
                <component
                  :is="iconsMap(rt(feature.icon))"
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ rt(feature.name) }}
            </dt>
            <dd
              class="mt-2 text-base leading-7 text-neutral-600 dark:text-neutral-400"
            >
              {{ rt(feature.description) }}
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section id="cta">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="max-w-3xl">
          <h2
            class="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            {{ t("home.pre_footer.title") }}
          </h2>
          <p class="leading-text mt-2">
            {{ t("home.pre_footer.description") }}
          </p>
        </div>

        <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <NuxtLink to="/contact" class="button-primary">{{
            t("actions.contact_us")
          }}</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
