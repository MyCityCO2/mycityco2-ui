<script setup>
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  ServerIcon
} from '@heroicons/vue/20/solid'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/vue/24/outline'

import VCitySelector from '@/components/VCitySelector.vue'
import VSwitch from '@/components/form/VSwitch.vue'
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption
} from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
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
    name: 'Push to deploy.',
    description:
      "MyCityCO2 a pour objectif d'automatiser les comptes carbone pour toutes les collectivités (communes, EPCI et syndicats).",
    icon: CloudArrowUpIcon
  },
  {
    name: 'SSL certificates.',
    description:
      'Ainsi, MyCityCO2 permet aux collectivités de se concentrer sur les actions à mettre en oeuvre pour décarboner les services publics. MyCityCO2 facilite la prise de conscience d’un large public (citoyens, élus, etc...) sur les enjeux du dérèglement climatique lié aux émissions des gaz à effet de serre.',
    icon: LockClosedIcon
  },
  {
    name: 'Database backups.',
    description:
      " Est-ce que ma commune est en phase avec la trajectoire définie par l'Accord de Paris? MyCityCO2 vous permettra de visualiser votre trajectoire carbone vis-à-vis de la trajectoire cible.",
    icon: ServerIcon
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

const enabled = ref(false)

const onSelect = (item) => {
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <div>
    <div class="relative isolate overflow-hidden bg-gradient-to-b from-emerald-100/20 pt-14">
      <div
        class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-50 sm:-mr-80 lg:-mr-96"
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
      <div
        class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <img
          class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
          alt="Transistor"
          width="158"
          height="48"
        />
        <img
          class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
          alt="Reform"
          width="158"
          height="48"
        />
        <img
          class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
          alt="Tuple"
          width="158"
          height="48"
        />
        <img
          class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
          alt="SavvyCal"
          width="158"
          height="48"
        />
        <img
          class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
          alt="Statamic"
          width="158"
          height="48"
        />
      </div>
    </section>

    <section id="project">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h3 class="mt-2">Le projet</h3>
        <p class="mt-6 leading-text">
          Avec MyCityCO2, consultez simplement et gratuitement le compte carbone de toutes les
          communes de France
        </p>
      </div>
      <div class="mt-10 mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
        <div
          v-for="feature in features"
          :key="feature.name"
          class="border border-gray-100 rounded-3xl bg-white px-8 pt-12 shadow-gray-600/10 sm:px-12 lg:px-8"
        >
          <div class="mb-12 space-y-4">
            <h3 class="text-2xl font-semibold text-gray-800">{{ feature.name }}</h3>
            <p class="mb-6 text-gray-600">
              {{ feature.description }}
            </p>
          </div>
          <img
            src="@/assets/images/undraw_search_app_oso2.svg"
            class="ml-auto w-2/3"
            alt="illustration"
            loading="lazy"
            width="900"
            height="600"
          />
        </div>
      </div>
    </section>

    <section id="contribute" class="max-w-xl lg:max-w-5xl relative isolate">
      <h3>Contribuez au projet</h3>
      <p class="mt-2 leading-text">
        We help companies and individuals build out their brand guidelines.
      </p>
      <div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
        <form action="#" method="POST" class="lg:flex-auto">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900"
                >Indiquez ici le code postal de votre ville</label
              >
              <div class="relative mt-2.5">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full border-0 rounded-md shadow-sm pl-10 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <RadioGroup v-model="selectedMailingLists">
                <RadioGroupLabel class="text-base font-semibold leading-6 text-gray-900"
                  >Selon vous quelle est l'empreinte carbone de votre mairie en kgCO2e par habitant
                  ?</RadioGroupLabel
                >

                <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <RadioGroupOption
                    as="template"
                    v-for="mailingList in mailingLists"
                    :key="mailingList.id"
                    :value="mailingList"
                    v-slot="{ checked, active }"
                  >
                    <div
                      :class="[
                        checked ? 'border-transparent' : 'border-gray-300',
                        active ? 'border-emerald-500 ring-2 ring-emerald-500' : '',
                        'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                      ]"
                    >
                      <span class="flex flex-1">
                        <span class="flex flex-col">
                          <RadioGroupLabel
                            as="span"
                            class="block text-sm font-medium text-gray-900"
                            >{{ mailingList.title }}</RadioGroupLabel
                          >
                          <RadioGroupDescription
                            as="span"
                            class="mt-1 flex items-center text-sm text-gray-500"
                            >{{ mailingList.description }}</RadioGroupDescription
                          >
                          <RadioGroupDescription
                            as="span"
                            class="mt-6 text-sm font-medium text-gray-900"
                            >{{ mailingList.users }}</RadioGroupDescription
                          >
                        </span>
                      </span>
                      <CheckCircleIcon
                        :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-emerald-500']"
                        aria-hidden="true"
                      />
                      <span
                        :class="[
                          active ? 'border' : 'border-2',
                          checked ? 'border-emerald-500' : 'border-transparent',
                          'pointer-events-none absolute -inset-px rounded-lg'
                        ]"
                        aria-hidden="true"
                      />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
            <div class="sm:col-span-2">
              <VSwitch
                ask="Pensez-vous que votre mairie respecte l'engagement de l'Accord de Paris ?"
                text="à savoir une réduction de y % de ses émissions de CO2e depuis 2016 ?."
                :modelValue="enabled"
                @update:modelValue="(newValue) => (enabled = newValue)"
              />
            </div>
          </div>
          <div class="mt-10 flex justify-start">
            <button type="submit" class="button-primary">Soumettre</button>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-500">
            En soumettant ce formulaire, j'accepte la
            <a href="#" class="font-semibold text-emerald-500">politique de confidentialité</a>.
          </p>
        </form>
        <div class="lg:mt-6 lg:w-80 lg:flex-none">
          <!-- <img
              class="h-12 w-auto"
              src="https://d33wubrfki0l68.cloudfront.net/893dbe71105203dd1798678c1ae2655fdb4967c3/08097/images/open_net_eco_vert_blanc.png"
              alt=""
            /> -->
          <figure class="mt-10">
            <blockquote class="text-lg font-semibold leading-8 text-gray-900">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
                culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption class="mt-10 flex gap-x-6">
              <img
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                alt=""
                class="h-12 w-12 flex-none rounded-full bg-gray-50"
              />
              <div>
                <div class="text-base font-semibold text-gray-900">Brenna Goyette</div>
                <div class="text-sm leading-6 text-gray-600">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="follow">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h3>Pourquoi nous suivre...</h3>
        <p class="mt-6 leading-text">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
          veritatis in accusamus quisquam.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features2" :key="feature.name" class="flex flex-col">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg">
                <component :is="feature.icon" class="h-6 w-6 text-emerald-500" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-emerald-500"
                  >Learn more <span aria-hidden="true">→</span></a
                >
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>
