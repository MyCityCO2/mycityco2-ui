<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const rules = [
  'des frais relatifs aux documents d’urbanisme visés à l’article L.121-7 du code de l’urbanisme qui sont amortis sur une durée maximale de 10 ans',
  'des frais d’études et des frais d’insertion non suivis de réalisation qui sont amortis sur une durée maximale de 5 ans',
  'des frais de recherche et de développement qui sont amortis sur une durée maximale de 5 an',
  'des brevets qui sont amortis sur la durée du privilège dont ils bénéficient ou sur la durée effective de leur utilisation si elle est plus brève',
  'des subventions d’équipement versées qui sont amorties sur une durée maximale de 5 ans lorsque le bénéficiaire est une personne de droit privé, ou de quinze ans lorsque le bénéficiaire est un organisme publi'
]
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>Durées d’amortissement</h3>
    </div>
    <div class="methodology__section">
      <div>
        <p>
          Les durées d’amortissement des immobilisations corporelles et incorporelles sont fixées
          pour chaque bien ou chaque catégorie de biens par l’assemblée délibérante, à l’exception
          toutefois :
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li class="flex gap-x-3" v-for="(item, idx) in rules" :key="idx">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-emerald-500" aria-hidden="true" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div>
        <p>
          Pour les autres immobilisations, l’assemblée peut se référer au barème indicatif ci-après
          :
        </p>
      </div>
    </div>
  </div>
</template>
