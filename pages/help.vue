<script setup lang="ts">
const { t, rt, tm } = useI18n()

const currentGlossary = ref(0)
</script>

<template>
  <div>
    <AppHeading :title="t('help.hero.title')" :text="t('help.hero.text')" />
    <section>
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <h3>{{ t("help.faqs.title") }}</h3>
          <p class="my-6 leading-text">
            {{ t("help.faqs.text") }}
          </p>
          <NuxtLinkLocale to="/contact" class="button-primary">{{
            t("actions.contact_us")
          }}</NuxtLinkLocale>
        </div>
        <div class="mt-10 lg:col-span-7 lg:mt-0">
          <dl class="space-y-10">
            <div v-for="faq in tm('help.faqs.list')" :key="rt(faq.question)">
              <dt class="text-base font-semibold leading-7">
                {{ rt(faq.question) }}
              </dt>
              <dd class="mt-2 text-base leading-7">
                {{ rt(faq.answer) }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-4xl mx-auto text-left">
        <h3>{{ t("help.glossary.title") }}</h3>
      </div>
      <div class="grid grid-cols-3 gap-x-10 mt-2 sm:mt-4 max-w-4xl mx-auto">
        <div class="flex">
          <nav>
            <ul class="mt-2 space-y-2">
              <li
                v-for="(item, idx) in tm('help.glossary.list')"
                @click=";(currentGlossary = null), (currentGlossary = idx)"
                :key="idx"
                :class="[
                  idx == currentGlossary
                    ? 'text-primary text-lg'
                    : 'text-neutral-400 text-xs',
                  'cursor-pointer hover:text-primary py-1 transition-all transform',
                ]"
              >
                {{ rt(item.name) }}
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex items-start justify-center col-span-2">
          <Transition name="fade" mode="out-in">
            <div
              v-if="currentGlossary != null"
              class="rounded-lg px-10 flex flex-col space-y-4"
            >
              <h4>{{ t(`help.glossary.list.${currentGlossary}.name`) }}</h4>
              <p class="leading">
                {{ t(`help.glossary.list.${currentGlossary}.description`) }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
