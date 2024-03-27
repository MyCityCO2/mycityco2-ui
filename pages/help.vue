<script setup lang="ts">
const { data: faqs } = await useAsyncData("help_faqs", () =>
  queryContent("help", "_faqs").findOne()
);

const { data: glossary } = await useAsyncData("help_glossary", () =>
  queryContent("help", "_glossary").findOne()
);

const currentGlossary = ref(0);
</script>

<template>
  <div>
    <AppHeading
      title="Comprendre les risques liés aux émissions de Gaz à Effet de Serre"
      text="Les émissions de gaz à effet de serre (GES) représentent un ensemble de risques majeurs pour notre planète et tous les êtres vivants qui y résident. En augmentant la concentration de GES dans l'atmosphère, nous perturbons l'équilibre climatique de la Terre, ce qui entraîne des conséquences graves. Le principal risque est le réchauffement climatique, qui provoque des changements environnementaux dramatiques tels que l'élévation du niveau de la mer, les phénomènes météorologiques extrêmes et la perturbation des écosystèmes. Ces changements ont des répercussions sur l'agriculture, la disponibilité de l'eau et la santé humaine. Réduire les émissions de GES et passer à une économie durable est essentiel pour prévenir ces risques et protéger notre planète."
    />
    <section>
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <h3>Foire aux questions</h3>
          <p class="my-6 leading-text">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <NuxtLink to="/contact" class="button-primary"
            >Contactez-nous</NuxtLink
          >
        </div>
        <div class="mt-10 lg:col-span-7 lg:mt-0">
          <dl class="space-y-10">
            <div v-for="faq in faqs.body" :key="faq.question">
              <dt class="text-base font-semibold leading-7">
                {{ faq.question }}
              </dt>
              <dd class="mt-2 text-base leading-7">
                {{ faq.answer }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-4xl mx-auto text-left">
        <h3>Glossaire</h3>
      </div>
      <div class="grid grid-cols-3 gap-x-10 mt-2 sm:mt-4 max-w-4xl mx-auto">
        <div class="flex">
          <nav>
            <ul class="mt-2 space-y-2">
              <li
                v-for="(item, idx) in glossary.body"
                @click="(currentGlossary = null), (currentGlossary = idx)"
                :key="idx"
                :class="[
                  idx == currentGlossary
                    ? 'text-primary text-lg'
                    : 'text-neutral-400 text-xs',
                  'cursor-pointer hover:text-primary py-1 transition-all transform',
                ]"
              >
                {{ item.name }}
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex items-start justify-center col-span-2">
          <Transition name="fade" mode="out-in">
            <div class="rounded-lg px-10 flex flex-col space-y-4">
              <h4>{{ glossary.body[currentGlossary].name }}</h4>
              <p class="leading">
                {{ glossary.body[currentGlossary].description }}
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
