<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const rules = [
  'des frais relatifs aux documents d’urbanisme visés à l’article L.121-7 du code de l’urbanisme qui sont amortis sur une durée maximale de 10 ans',
  'des frais d’études et des frais d’insertion non suivis de réalisation qui sont amortis sur une durée maximale de 5 ans',
  'des frais de recherche et de développement qui sont amortis sur une durée maximale de 5 an',
  'des brevets qui sont amortis sur la durée du privilège dont ils bénéficient ou sur la durée effective de leur utilisation si elle est plus brève',
  'des subventions d’équipement versées qui sont amorties sur une durée maximale de 5 ans lorsque le bénéficiaire est une personne de droit privé, ou de quinze ans lorsque le bénéficiaire est un organisme publi'
]

const tableRules = [
  {
    name: 'Incorporelles',
    rules: [
      {
        name: 'Logiciels',
        duration: '2 ans'
      }
    ]
  },
  {
    name: 'Corporelles',
    rules: [
      {
        name: 'Voitures',
        duration: '5 à 10 ans'
      },
      {
        name: 'Camions et véhicules industriels',
        duration: '4 à 8 ans'
      },
      {
        name: 'Mobilier',
        duration: '10 à 15 ans'
      },
      {
        name: 'Matériel de bureau éléectrique ou électronique',
        duration: '5 à 10 ans'
      },
      {
        name: 'Matériel informatique',
        duration: '2 à 5 ans'
      },
      {
        name: 'Matériels classiques',
        duration: '6 à 10 ans'
      },
      {
        name: 'Coffre-fort',
        duration: '20 à 30 ans'
      }
    ]
  }
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
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div>
        <p>
          Pour les autres immobilisations, l’assemblée peut se référer au barème indicatif ci-après
          :
        </p>
        <div class="mt-8 flow-root w-full">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table class="min-w-full">
                <thead class="bg-white">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Immobilisations
                    </th>
                    <th
                      scope="col"
                      class="py-3.5 pl-3 pr-4 sm:pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Durée
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <template v-for="rule in tableRules" :key="rule.name">
                    <tr class="border-t border-gray-200">
                      <th
                        colspan="5"
                        scope="colgroup"
                        class="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                      >
                        {{ rule.name }}
                      </th>
                    </tr>
                    <tr
                      v-for="(rule, ruleIdx) in rule.rules"
                      :key="rule"
                      :class="[ruleIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t']"
                    >
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"
                      />
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {{ rule.name }}
                      </td>
                      <td class="whitespace-nowrap py-4 pl-3 pr-4 sm:pr-3 text-sm text-gray-500">
                        {{ rule.duration }}
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <p>
        MyCityCO2 respecte les mêmes durées d’amortissement en définissant néanmoins une durée
        maximale de 7 ans pour les amortissements les plus longs. MyCityCO2 ne pouvant se fier au
        mécanisme de gestion des amortissements (cf ci-dessus), il faut reconstruire l’historique
        des amortissements pour constituer une image fidèle l’état des amortissements. Les données
        sont fournies depuis 2010, en générant les amortissements dès la date de l’investissement,
        cela nous permet après 7 exercices, soit en 2016, d’avoir une vision complète des émissions
        des collectivités. C’est en 2016 que l’Accord de Paris est entré en vigueur, c’est donc
        depuis 2016 que la trajectoire des collectivités pourra être mesurée.
      </p>
    </div>
  </div>
</template>
