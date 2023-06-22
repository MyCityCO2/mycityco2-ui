<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const accountClasses = [
  'Comptes 60 - Achats de biens et services : par exemple les comptes 60221 – Combustibles et carburants, 60612 Energie et électricité, 6061 achats de fournitures administratives…',
  'Comptes 61 et 62 – Services extérieurs : par exemple les comptes 615* concernant l’entretien et les réparations qui ne sont pas de l’ordre d’un investissement, 617 pour les études et recherches et 623* pour la publicité, les publications et les relations publiques'
]
</script>
<template>
  <div>
    <div class="methodology__section_header">
      <h3>Fonctionnement</h3>
    </div>
    <div class="methodology__section">
      <p>
        Les opérations de fonctionnement correspondent aux activités régulières et courantes d'une
        entité publique, telles que les dépenses liées à la fourniture de services publics, les
        salaires des employés, les frais de fonctionnement, les achats de biens et de services
        nécessaires au bon fonctionnement de l'entité, etc. Ces opérations de fonctionnement sont
        généralement récurrentes et se produisent fréquemment dans le cadre des activités
        quotidiennes de la collectivité publique.
      </p>
      <div>
        <p>
          Afin de calculer l’empreinte carbone de la collectivité, MyCityCO2 sélectionne les
          dépenses de fonctionnement uniquement et pas les recettes. Parmi les comptes de charges:
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li class="flex gap-x-3" v-for="(item, idx) in accountClasses" :key="idx">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-emerald-500" aria-hidden="true" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
