<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const configItems = [
  "22 – Immobilisations reçues en affectation : fait référence à des biens ou des actifs qui sont transférés à une entité publique par une autre entité, généralement l'État ou une collectivité territoriale, dans le cadre d'une affectation spécifique. On considère que ces investissements sont venus impacter le compte carbone de la collectivité qui l’a construite et sont donc ignorés au moment du transfert.",
  '23 – Immobilisations en cours : ce qui est en cours de construction. On en prendra compte uniquement au moment quand la construction sera terminée.',
  '24 – Immobilisations affectées, concédées, affermées ou mises à disposition : les mises à disposition sont ignorées de la même manière que les immobilisations reçues en affectation.',
  '26 – Participations et créances rattachées à des participations : les prises de participations n’engendrent pas d’émissions. Le pouvoir conféré par la participation au sein d’un autre établissement peut engendrer des émissions liées aux décisions mais elles seront simplement comptabilisées dans la collectivité en question.',
  '27 – Autres immobilisations financières : que ce soient des prêts, des dépôts, cautionnement… c’est le bénéficiaire qui dans l’utilisation de cette facilité financière utilisera d’une manière ou d’une autre cette facilité et engendrera des émissions.',
  '28 – Amortissement des immobilisations : les amortissements des immobilisations sont ignorées cf chapitre sur les amortissements.',
  '29 – Provisions pour dépréciation des immobilisations : les provisions sont des opérations comptables qui ne génèrent pas d’émissions.'
]

const expenseRules = [
  '641* – Rémunérations du personnel : la rémunération d’un employé en tant que telle ne génère pas d’émission. C’est ce que va en faire l’employé qui engendrera des émissions.',
  '68* - Dotations aux amortissements et provisions : comme expliqué dans le chapitre amortissements, cette catégorie est exclue et gérée correctement par MyCityCO2 en s’appuyant sur les dépenses d’investissement.'
]
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>Configuration des comptes</h3>
    </div>
    <div class="methodology__section">
      <div>
        <p>
          En ce qui concerne les dépenses d’investissement seuls les comptes de la classe 2 «
          comptes d’immobilisations » sont pris en considération. Les comptes suivants sont exclus
          du calcul :
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li class="flex gap-x-3" v-for="(item, idx) in configItems" :key="idx">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div>
        <p>
          Pour ce qui est des dépenses de fonctionnement, seuls les comptes de la classe 6 « comptes
          de charges » sont pris en compte. Les comptes suivants sont exclus du calcul :
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li class="flex gap-x-3" v-for="(item, idx) in expenseRules" :key="idx">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>