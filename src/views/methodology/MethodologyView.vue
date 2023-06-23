<script setup>
import VHeading from '@/components/VHeading.vue'
import VTransitionFade from '@/components/VTransitionFade.vue'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/vue/20/solid'
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import MethodologyViewNav from './MethodologyViewNav.vue'

const route = useRoute()
const pageMeta = computed(() => route.meta)
const navigation = [
  {
    name: 'Présentation générale',
    to: { name: 'methodologyIndex' },
    children: [
      {
        name: 'Comptabilité',
        to: { name: 'generalAccounting' },
        children: [
          { name: 'Plan comptable normalisé', to: { name: 'generalAccountingPlan' } },
          { name: 'Investissement', to: { name: 'generalAccountingInvestment' } },
          { name: 'Fonctionnement', to: { name: 'generalAccountingFunctionning' } },
          { name: 'Amortissements', to: { name: 'generalAccountingDepreciations' } },
          { name: 'Durées d’amortissement', to: { name: 'generalAccountingAmortizationPeriod' } },
          {
            name: 'Configuration des comptes',
            to: { name: 'generalAccountingAccountsConfiguration' }
          }
        ]
      },
      { name: "Facteurs d'émissions monétaires", to: { name: 'generalEmissionFactor' } },
      { name: "Postes d'émissions", to: { name: 'generalEmissionPost' } }
    ]
  },
  {
    name: 'Sources de données',
    to: { name: 'methodologyDataSources' }
  },
  {
    name: "License d'utilisation",
    to: { name: 'methodologyLicense' },
    // children: [
    //   { name: 'Contenus', to: { name: 'methodologyLicenseContent' } },
    //   { name: 'Données', to: { name: 'methodologyLicenseData' } },
    //   { name: 'Code source', to: { name: 'methodologyLicenseSourceCode' } },
    //   { name: 'Comment créditer MyCityCO2', to: { name: 'methodologyLicenseCredit' } }
    // ]
    children: [
      { name: 'Contenus', to: { name: 'methodologyLicense', hash: '#content' } },
      { name: 'Données', to: { name: 'methodologyLicense', hash: '#data' } },
      { name: 'Code source', to: { name: 'methodologyLicense', hash: '#source-code' } },
      { name: 'Comment créditer MyCityCO2', to: { name: 'methodologyLicense', hash: '#credit' } }
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
              <RouterLink
                :to="{ name: pageMeta.previous }"
                v-if="pageMeta.previous"
                class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500"
              >
                <ArrowLongLeftIcon
                  class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors"
                  aria-hidden="true"
                />
                Précédent
              </RouterLink>
            </div>

            <div class="-mt-px flex w-0 flex-1 justify-end group">
              <RouterLink
                :to="{ name: pageMeta.next }"
                v-if="pageMeta.next"
                class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500"
              >
                Suivant
                <ArrowLongRightIcon
                  class="ml-3 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors"
                  aria-hidden="true"
                />
              </RouterLink>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>
