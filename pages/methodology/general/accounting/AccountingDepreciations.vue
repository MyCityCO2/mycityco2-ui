<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const accountClasses = [
  'les communes dont la population est égale ou supérieure à 3.500 habitants',
  'les groupements de communes dont la population totale est égale ou supérieure à ce seuil',
  'ainsi que leurs établissements publics ; dès lors, un centre communal d’action sociale et une caisse des écoles dont la commune de rattachement répond aux critères ci-dessus amortit également ses immobilisations.'
]

const groups = [
  `s’agissant des immobilisations incorporelles (20), celles figurant aux comptes 202 "Frais d’études, d’élaboration, de modifications et de révisions des documents d’urbanisme", 2031 "Frais d’études" (non suivis de réalisation), 2032 "Frais de recherche et de développement", 2033 "Frais d’insertion" (non suivis de réalisation), 204 "Subventions d’équipement versées", 205 "Concessions et droits similaires, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires" et 208 "Autres immobilisations incorporelles" à l’exception des immobilisations qui font l’objet d’une provision`,
  `s’agissant des immobilisations corporelles (21), les biens figurant aux comptes 2156 "matériel et outillages d’incendie et de défense civile", 2157 "matériel et outillage de voirie", 2158 "autres installations, matériel et outillage techniques" et 218 "autres immobilisations corporelles".`
]
</script>
<template>
  <div>
    <div class="methodology__section_header">
      <h3>Amortissements</h3>
    </div>
    <div class="methodology__section">
      <p>
        D’un point de vue de la comptabilité générale au sens large, l’amortissement est défini
        d’une manière générale comme étant la réduction irréversible, répartie sur une période
        déterminée, du montant porté à certains postes du bilan. L’amortissement pour dépréciation
        est la constatation comptable d’un amoindrissement de la valeur d’un élément d’actif
        résultant de l’usage, du temps, du changement de technique ou de toute autre cause. C’est en
        raison des difficultés de mesure de cet amoindrissement que l’amortissement consiste
        généralement en l’étalement, sur une durée probable de vie, de la valeur des biens
        amortissables.
      </p>
      <div>
        <p>
          D’un point de vue des collectivités, conformément aux dispositions de l’article
          L.2321-2-27° du CGCT, l’application de la mise en place des amortissements est adaptée
          comme suit :
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li class="flex gap-x-3" v-for="(item, idx) in accountClasses" :key="idx">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div>
        <p>
          Par ailleurs, conformément à l’article R.2321-1 du CGCT, les dotations aux amortissements
          des immobilisations suivantes constituent des dépenses obligatoires pour les communes, les
          groupements et les établissements susmentionnés :
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li class="flex gap-x-3" v-for="(item, idx) in groups" :key="idx">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <p>
        Concernant les immobilisations incorporelles les comptes définis semblent être exhaustifs,
        en revanche le problème vient des immobilisations corporelles pour lesquelles tous les
        comptes significatifs sont omis tels les 2131 « Constructions de Bâtiments publics », 2153 «
        Installations, matériel et outillage techniques » … qui représentent la majorité des
        dépenses publiques d’investissement.
      </p>
      <p>
        MyCityCO2 ne peut donc se fier au mécanisme de gestion des amortissements tel qu’il est
        défini dans la comptabilité des collectivités. Ainsi, les amortissements passés dans le
        budget de fonctionnement aux comptes 68 doivent être ignorés et l’ensemble des
        amortissements recréés virtuellement en partant des dépenses d’investissement.
      </p>
      <p>
        MyCityCO2 génère ainsi pour chaque dépense d’investissement les amortissements associés.
      </p>
    </div>
  </div>
</template>