<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid"

const { t, tm, rt } = useI18n()
</script>

<template>
  <div>
    <AppHeading
      :title="t('project.hero.title')"
      :text="t('project.hero.text')"
    />
    <section>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div>
          <h3>{{ t("project.contribute.title") }}</h3>
          <p class="my-6 leading-text">
            {{ t("project.contribute.text") }}
          </p>
          <router-link to="/contact" class="button-primary">{{
            t("actions.contact_us")
          }}</router-link>
        </div>
        <dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          <div
            v-for="feature in tm('project.contribute.features')"
            :key="rt(feature.name)"
            class="relative group"
          >
            <div
              class="absolute -inset-x-4 -inset-y-6 -z-10 scale-95 bg-zinc-50 dark:bg-white/10 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"
            ></div>
            <dt
              class="text-base font-semibold leading-7 text-neutral-900 dark:text-white"
            >
              <div
                class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg"
              >
                <component
                  :is="iconsMap(rt(feature.icon))"
                  class="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
              </div>
              {{ rt(feature.name) }}
            </dt>
            <dd
              class="mt-1 text-base leading-7 text-neutral-600 dark:text-neutral-400"
              v-html="
                rt(feature.description, {
                  link: `<a href='https://github.com/MyCityCO2' target='_blank' class='text-link'>projet github</a>`,
                })
              "
            />
          </div>
        </dl>
      </div>
    </section>
    <section>
      <div
        class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2"
      >
        <div class="mx-auto w-full max-w-xl lg:mx-0">
          <h3>{{ t("project.thanks.title") }}</h3>
          <p class="mt-6 leading-text">
            {{ t("project.thanks.text") }}
          </p>
          <div class="mx-4">
            <ul role="list" class="mt-2 space-y-2">
              <li
                class="flex gap-x-3"
                v-for="(item, idx) in tm('project.thanks.list')"
                :key="idx"
              >
                <CheckCircleIcon
                  class="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span class="text-neutral-600 dark:text-neutral-400">{{
                  rt(item)
                }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 gap-x-8 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8"
        >
          <img
            class="max-h-14 w-full object-contain object-left"
            src="/assets/images/logos/opennet.png"
            alt="Open Net Sarl logo"
            width="105"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="/assets/images/logos/odoo.svg"
            alt="Odoo logo"
            width="104"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="/assets/images/logos/ExioBase.png"
            alt="ExioBase logo"
            width="140"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="/assets/images/logos/La_Poste.svg"
            alt="La Poste"
            width="136"
            height="48"
          />
          <img
            class="max-h-20 w-full object-contain object-left"
            src="/assets/images/logos/vocables.svg"
            alt="Vocables logo"
            width="158"
            height="48"
          />
          <img
            class="max-h-20 w-full object-contain object-left"
            src="/assets/images/logos/AB.jpg"
            alt="AB logo"
            width="147"
            height="48"
          />
          <img
            class="max-h-28 w-full object-contain object-left"
            src="/assets/images/logos/mef.svg"
            alt="Minitsère de l'économie et de la finance logo"
            width="158"
            height="48"
          />
          <img
            class="max-h-28 w-full object-contain object-left"
            src="/assets/images/logos/opendatasoft.svg"
            alt="Opendatasoft"
            width="158"
            height="48"
          />
          <img
            class="max-h-28 w-full object-contain object-left"
            src="/assets/images/logos/CITEPA.avif"
            alt="CITEPA"
            width="158"
            height="48"
          />
        </div>
      </div>
    </section>
    <section>
      <div
        class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2"
      >
        <div
          class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 gap-x-8 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pr-8"
        >
          <img
            class="max-h-14 w-full object-contain object-left"
            src="/assets/images/logos/vuejs.svg"
            alt="VueJS logo"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="/assets/images/logos/tailwindcss.svg"
            alt="Tailwindcss logo"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="/assets/images/logos/chartjs.svg"
            alt="ChartJS logo"
          />

          <img
            class="max-h-14 w-full object-contain object-left"
            src="/assets/images/logos/heroicons.svg"
            alt="Heroicons logo"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="/assets/images/logos/OCA.png"
            alt="OCA logo"
            width="158"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="/assets/images/logos/crater.svg"
            alt="Crater logo"
            width="147"
            height="48"
          />
        </div>
        <div class="mx-auto w-full max-w-xl lg:mx-0">
          <h3>{{ t("project.credits.title") }}</h3>
          <ul
            v-for="tool in tm('project.credits.list')"
            :key="rt(tool)"
            role="list"
            class="marker:text-primary list-disc pl-5 space-y-3 mt-6 text-neutral-600 dark:text-neutral-400"
          >
            <li>{{ rt(tool) }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
