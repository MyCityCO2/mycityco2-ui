<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const configItems = [
  'Les données financières de la collectivité telles que publiées dans les comptes administratifs annuellement compte par compte selon la nomenclature M14 en euros;',
  'Les facteurs d’émissions représentent la quantité de gaz à effet de serre engendrée par l’utilisation d’un euro, par exemple la quantité de CO2 émise pour 1€ de nourriture achetée.'
]
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>Présentation générale</h3>
    </div>
    <div class="methodology__section">
      <p>MyCityCO2 calcule les comptes carbones flash des collectivités.</p>
      <p>
        Un compte carbone flash représente une estimation des émissions directes et indirectes de
        gaz à effet de serre liées à l'activité de la collectivité sur une période déterminée
        calculée sur la base des comptes financiers des collectivités.
      </p>
      <div>
        <p>
          Les émissions sont présentées par "poste" (alimentation, construction, maintenance,
          transports...). Ces catégories permettent d’identifier les principales sources d’émissions
          et de hiérarchiser les actions qui peuvent être mises en place pour réduire ces émissions.
          Cette estimation se fait en combinant deux types de données différentes :
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li class="flex gap-x-3" v-for="(item, idx) in configItems" :key="idx">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-emerald-500" aria-hidden="true" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <p>
        Le résultat est exprimé en « tonnes équivalent de CO2 », c’est-à-dire en émission de gaz à
        effet de serre disposant d’un potentiel de réchauffement global équivalent à un kilogramme
        de CO2.
      </p>
    </div>
  </div>
</template>
