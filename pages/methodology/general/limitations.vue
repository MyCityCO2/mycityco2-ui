<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid"

const rules = [
  `Facteurs monétaires vs facteurs physiques : les données publiées en open data par la direction générale des finances permet seulement de récupérer les données comptables des collectivités mais pas les consommations physiques associées aux dépenses telle la consommation d’électricité, de gaz, le nombre de kilomètres de voirie rénovées… Ainsi l’utilisation des facteurs d’émissions physiques est impossible. C’est dans une seconde étape que les collectivités pourront passer de leur compte carbone flash à un compte carbone plus précis basé sur les consommations et donc sur des facteurs d’émissions physiques.`,
  `Emissions vs Absorptions : MyCityCO2 à ce stade ne peut pas quantifier les émissions absorbées par la collectivité que ce soit via son patrimoine naturel ou des procédés techniques. Seules les émissions sont comptabilisées.`,
  `Budgets annexes à intégrer : pour cette première version seuls les budgets principaux sont pris en compte.`,
  `Collectivités autres que communes à inclure : à ce jour seules les communes sont prises en compte, l’objectif est d’étendre la couverture et ainsi d’intégrer aussi les EPCI, les syndicats, les départements et les régions.`,
]
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>Limitations</h3>
    </div>
    <div class="methodology__section">
      <div>
        <ul role="list" class="mt-2 space-y-2">
          <li class="flex gap-x-3" v-for="(item, idx) in rules" :key="idx">
            <CheckCircleIcon
              class="mt-1 h-5 w-5 flex-none text-primary"
              aria-hidden="true"
            />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
