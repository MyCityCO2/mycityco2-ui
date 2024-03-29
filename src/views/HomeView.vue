<script setup>
import VCitySelector from '@/components/VCitySelector.vue'
import VProgressBar from '@/components/VProgressBar.vue'
import { BookOpenIcon, RadioIcon, ScaleIcon, UserPlusIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Consulter',
    description: 'les émissions de gaz à effet de serre de sa commune',
    icon: BookOpenIcon
  },
  {
    name: 'Evaluer',
    description: ' la réduction de l’empreinte carbone année après année',
    icon: ScaleIcon
  },
  {
    name: 'Contribuer',
    description: 'à atteindre les objectifs définis par la Stratégie nationale bas-carbone (SNBC), feuille de route de la France pour respecter l’Accord de Paris',
    icon: UserPlusIcon
  },
  {
    name: 'Partager',
    description: 'les résultats de sa commune avec ses proches',
    icon: RadioIcon
  }
]

const stats = [
  { id: 1, name: 'communes françaises analysées soit 100% des communes', value: "35'000" },
  {
    id: 2,
    name: 'empreinte carbone moyenne générée par les villes françaises',
    value: '232 kgCO2eq/hab'
  },
  {
    id: 3,
    name: 'des villes respectent la Stratégie nationale bas-carbone (SNBC) visant à réduire de 40% les émissions en 2030',
    value: '24 %'
  }
]
</script>

<template>
  <div>
    <div class="relative isolate overflow-hidden bg-gradient-to-b from-emerald-100/20 pt-14">
      <div
        class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-primary/10 ring-1 ring-emerald-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div
          class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
        >
          <h1
            class="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto"
          >
            Suivez l’empreinte carbone de votre ville
          </h1>

          <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p class="leading-text">
              Comment améliorer ce qu’on ne sait pas mesurer? MyCityCO2, un outil libre et gratuit
              de suivi des empreintes carbones des 35'000 villes françaises au service de la lutte
              contre le changement climatique.
            </p>
            <div
              class="mt-10 transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl ring-1 ring-black ring-opacity-5 transition-all"
            >
              <VCitySelector :hasQuickActions="false" auto-focus />
            </div>
            <div class="mt-10 flex items-center gap-x-6">
              <router-link to="/contact" class="button-primary">Contribuer</router-link>
              <router-link to="#project" class="text-sm font-semibold leading-6 text-gray-900"
                >En savoir plus <span aria-hidden="true">→</span></router-link
              >
            </div>
          </div>
          <img
            src="@/assets/images/main.svg"
            alt=""
            class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>

    <section class="section-small">
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
          <h3>
            {{ stat.value }}
          </h3>
          <p class="leading-text">{{ stat.name }}</p>
        </div>
      </div>
    </section>

    <section id="project">
      <div class="mx-auto max-w-3xl lg:text-center">
        <span class="tooltip"
          >Adoptez un outil libre, gratuit et transparent validé par des experts</span
        >
        <h3 class="mt-2">1er outil d’empreinte carbone pour les collectivités</h3>
        <p class="mt-6 leading">
          De la plus petite commune française à la capitale, MyCityCO2 est le premier outil qui
          permet de consulter l’empreinte carbone de n’importe quelle ville française et ce de
          manière historique sur les 7 dernières années.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
              >
                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section id="cta">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Prêts à aller plus loin ?
          </h2>
          <p class="leading-text mt-2">
            Accédez aux données détaillées de votre ville et identifiez les opportunités de
            réduction des émissions pour atteindre les objectifs fixés par l’Accord de Paris et implémentés en France par la Stratégie nationale bas-carbone (SNBC)
          </p>
        </div>

        <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <router-link to="/contact" class="button-primary">Nous contacter</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
