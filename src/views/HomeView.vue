<script setup>
import { BookOpenIcon, RadioIcon, ScaleIcon, UserPlusIcon } from '@heroicons/vue/20/solid'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/vue/24/outline'

import VCitySelector from '@/components/VCitySelector.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mailingLists = [
  { id: 1, title: 'Faible', description: 'Moins de 150', users: '-150 kgCO2e' },
  {
    id: 2,
    title: 'Moyenne',
    description: 'Entre 150 et 250',
    users: '150 - 250 kgCO2e'
  },
  { id: 3, title: 'Elevée', description: 'Plus de 250', users: '+250 kgCO2e' }
]

const selectedMailingLists = ref(mailingLists[0])

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
    description: 'à atteindre les objectifs de l’Accord de Paris en 2030 (-50%)',
    icon: UserPlusIcon
  },
  {
    name: 'Partager',
    description: 'les résultats de sa commune avec ses proches',
    icon: RadioIcon
  }
]

const features2 = [
  {
    name: 'La base de données',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    icon: InboxIcon
  },
  {
    name: 'Le réseau',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    icon: UsersIcon
  },
  {
    name: 'Devenir un acteur',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    icon: TrashIcon
  }
]

const stats = [
  { id: 1, name: 'communes françaises analysées soit 100% des communes', value: "35'000" },
  {
    id: 2,
    name: 'empreinte carbone moyenne générée par les villes françaises',
    value: '271 kgCO2eq/hab'
  },
  {
    id: 3,
    name: 'des villes seulement respectent l’Accord de Paris visant à réduire de 50% les émissions en 2030',
    value: '23 %'
  }
]

const enabled = ref(false)

const onSelect = () => {
  router.push({ name: 'diagnostic' })
}
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
              C'est peut-être un bon point de départ pour changer les choses à une autre échelle.
              Cela permettrait de proposer une méthode à toutes les collectivités mettant en place
              une application open source en ligne pour calculer automatiquement les carbones de
              chaque collectivité.
            </p>
            <div
              class="mt-10 transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl ring-1 ring-black ring-opacity-5 transition-all"
            >
              <VCitySelector @on-select="onSelect" :hasQuickActions="false" />
            </div>
            <div class="mt-10 flex items-center gap-x-6">
              <router-link to="#contribute" class="button-primary">Contribuer</router-link>
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
          manière historique sur les 6 dernières années.
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
            réduction des émissions pour atteindre les objectifs de l’Accord de Paris
          </p>
        </div>

        <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a href="#" class="button-primary">Get started</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >Learn more <span aria-hidden="true">→</span></a
          >
        </div>
      </div>
    </section>
  </div>
</template>
