<script setup>
import VHeading from '@/components/AppHeading.vue'
import VTransitionFade from '@/components/transition/VTransitionFade.vue'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/vue/20/solid'
import { computed } from 'vue'
// import { RouterLink, RouterView, useRoute } from 'vue-router'
import MethodologyViewNav from './MethodologyViewNav.vue'

const route = useRoute()
const pageMeta = computed(() => route.meta)
const navigation = [
  {
    name: 'Présentation générale',
    to: { name: 'methodology-MethodologyViewIndex' },
    children: [
      {
        name: 'Comptabilité',
        to: { name: 'methodology-general' },
        children: [
          { name: 'Plan comptable normalisé', to: { name: 'methodology-general-accounting-AccountingPlan' } },
          { name: 'Investissement', to: { name: 'methodology-general-accounting-AccountingInvestment' } },
          { name: 'Fonctionnement', to: { name: 'methodology-general-accounting-AccountingFunctioning' } },
          { name: 'Amortissements', to: { name: 'methodology-general-accounting-AccountingDepreciations' } },
          { name: 'Durées d’amortissement', to: { name: 'methodology-general-accounting-AccountingAmortizationPeriods' } },
          {
            name: 'Configuration des comptes',
            to: { name: 'methodology-general-accounting-AccountingAccountsConfiguration' }
          }
        ]
      },
      { name: "Facteurs d'émissions monétaires", to: { name: 'methodology-general-GeneralEmissionFactor' } },
      { name: "Postes d'émissions", to: { name: 'methodology-general-GeneralEmissionPost' } },
      { name: 'Limitations', to: { name: 'methodology-general-GeneralLimitView' } }
    ]
  },
  /*{
    name: 'Partenaires',
    to: { name: 'methodologyPartners' }
  },*/
  {
    name: 'Sources de données',
    to: { name: 'methodology-datasources' }
  },
  {
    name: "License d'utilisation",
    to: { name: 'methodology-license' },
    // children: [
    //   { name: 'Contenus', to: { name: 'methodologyLicenseContent' } },
    //   { name: 'Données', to: { name: 'methodologyLicenseData' } },
    //   { name: 'Code source', to: { name: 'methodologyLicenseSourceCode' } },
    //   { name: 'Comment créditer MyCityCO2', to: { name: 'methodologyLicenseCredit' } }
    // ]
    children: [
      { name: 'Contenus', to: { name: 'methodology-license', hash: '#content' } },
      { name: 'Données', to: { name: 'methodology-license', hash: '#data' } },
      { name: 'Code source', to: { name: 'methodology-license', hash: '#source-code' } },
      { name: 'Comment créditer MyCityCO2', to: { name: 'methodology-license', hash: '#credit' } }
    ]
  }
]
</script>

<template>
  <div>
    <VHeading title="Méthodologie" text="" :alt="true" />
    <section class="section-small section-top-0">
      <div
        class="flex flex-col space-y-8 sm:flex-none sm:space-y-0 sm:grid sm:grid-cols-3 md:grid-cols-4 sm:gap-x-8"
      >
        <div class="sm:col-span-1">
          <nav class="flex flex-col sticky top-0">
            <MethodologyViewNav :navigation="navigation" :parent="true" id="methodologyNav" />
          </nav>
        </div>

        <div class="sm:col-span-2 md:col-span-3 relative" id="methodology">
          <RouterView v-slot="{ Component }">
            <VTransitionFade>
              <component :is="Component" />
            </VTransitionFade>
          </RouterView>
          <nav v-if="pageMeta" class="flex items-center justify-between mt-4 px-4 sm:px-0">
            <div class="-mt-px flex w-0 flex-1 group">
              <NuxtLink
                :to="{ name: pageMeta.previous }"
                v-if="pageMeta.previous"
                class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500"
              >
                <ArrowLongLeftIcon
                  class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors"
                  aria-hidden="true"
                />
                Précédent
              </NuxtLink>
            </div>

            <div class="-mt-px flex w-0 flex-1 justify-end group">
              <NuxtLink
                :to="{ name: pageMeta.next }"
                v-if="pageMeta.next"
                class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500"
              >
                Suivant
                <ArrowLongRightIcon
                  class="ml-3 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors"
                  aria-hidden="true"
                />
              </NuxtLink>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>