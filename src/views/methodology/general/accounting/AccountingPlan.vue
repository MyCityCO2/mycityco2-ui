<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const accountClasses = [
  {
    key: 'Comptes de capitaux',
    text: 'comporte la majeure partie des éléments regroupés dans cette classe par le PCG (fonds propres, emprunts et dettes assimilées), mais aussi des comptes spécifiques aux collectivités (FCTVA, Taxe d’aménagement, produit des amendes de police, …). Par ailleurs, le compte 13 « subventions d’investissement » retrace les subventions reçues et le compte 15 les provisions pour risques et charges.'
  },
  {
    key: 'Comptes d’immobilisations',
    text: 'présente les éléments d’actif destinés à servir de façon durable à l’activité des collectivités locales et intégrés dans leur patrimoine sous forme corporelle, incorporelle ou financière (comptes 20 à 27). Les amortissements des immobilisations sont récapitulés aux subdivisions du compte 28. Ceux-ci sont justifiés par un plan d’amortissement dont la collectivité fixera la durée. Élément de sincérité du bilan et du compte de résultat, l’amortissement est la constatation comptable d’un amoindrissement de la valeur d’un élément d’actif résultant de l’usage, du temps, du changement technique ou de toute autre cause. L’amortissement n’est obligatoire que pour les collectivités de 3 500 habitants et plus et certains biens. Il s’agit d’une forme d’autofinancement (matérialisé par une dépense de la section de fonctionnement et en contrepartie une recette de la section d’investissement), qui permet de prévoir le renouvellement des biens dont la valeur se déprécie. Les provisions pour dépréciation des immobilisations sont retracées au compte 29. Les provisions pour dépréciation des immobilisations procèdent de la constatation d’un amoindrissement de la valeur d’un élément d’actif immobilisé résultant de causes dont les effets ne sont pas nécessairement irréversibles.'
  },
  {
    key: 'Comptes de stocks et en-cours',
    text: ' servent à retracer : – les stocks de fournitures et de denrées destinés à être consommés, – les stocks entrant dans un cycle de production. Ceux-ci concernent les opérations relatives aux lotissements et aux zones d’aménagement (315 « Terrains à aménager », 3 555 « Terrains aménagés ») qui sont gérées en budget annexe. Seuls sont budgétaires les stocks qui rentrent dans le cycle de production.'
  },
  {
    key: 'Comptes de tiers',
    text: 'comprend les créances et les dettes non exclusivement financières dont l’échéance est à moins d’un an, ou du moins à court terme. Elle enregistre également des comptes de régularisation. Les comptes de la classe 4 sont mouvementés par le comptable public sauf pour le compte 481 « Charges à répartir sur plusieurs exercices », qui figurera au budget, ainsi que les comptes 454, 456, 457, 458 « Opérations pour compte de tiers » et, si la commune a opté pour des provisions budgétaires, le compte 49 « Provisions pour dépréciation des comptes de tiers ». On peut signaler également l’utilisation des comptes 408 et 418, non budgétaires, servant au rattachement des charges et des produits.'
  },
  {
    key: 'Comptes financiers',
    text: 'enregistrent les mouvements de valeurs et les opérations faites avec le trésor public, les banques et les établissements financiers. Ils peuvent également comprendre les comptes relatifs aux placements de trésorerie autorisés. Non budgétaires, ces comptes sont gérés par le comptable de la collectivité.'
  },
  {
    key: 'Comptes de charges',
    text: 'regroupent les comptes destinés à enregistrer, dans l’exercice, les charges par nature qui se rapportent au financement normal ou courant (comptes 60 à 65), à la gestion financière (compte 66) et aux dotations aux amortissements et aux provisions (compte 68). Par ailleurs, la section de fonctionnement comprend trois chapitres globalisés regroupant des comptes de classe 6 : les chapitres 011 « charges à caractère général », 012 « charges de personnel et frais assimilés » et 013 « atténuation de charges ».'
  },
  {
    key: 'Comptes de produits',
    text: 'répondent à la même présentation que la classe 6. Le compte 73 retrace les impôts et taxes en distinguant les impositions reclassées selon des critères économiques. Il y a ensuite correspondance entre les comptes retraçant les autres charges et produits courants (comptes 60 à 65 et 70 à 75), les charges et produits financiers (comptes 66 et 76) et les dotations et reprises sur amortissements et provisions (comptes 68 et 78). Le compte 79 est utilisé pour transférer en investissement des charges provisoirement imputées en section de fonctionnement en vue de leur étalement. Par ailleurs, la section de fonctionnement comprend un chapitre globalisé regroupant des comptes de classe 7 : le chapitre 014 « atténuations de produits ».'
  },
  {
    key: 'Comptes spéciaux',
    text: 'comptabilisent les engagements hors bilan ainsi que les mouvements affectant les valeurs inactives de la collectivité.'
  }
]

const accountClasses2 = [
  {
    key: 'Comptes de capitaux',
    text: 'comptes de bilan regroupant les comptes qui enregistrent les ressources financières à long terme de la collectivité. C’est au moment de l’utilisation de ces ressources que le carbone sera comptabilisé.'
  },
  {
    key: 'Comptes de stocks et en-cours',
    text: 'comptes de bilan représentant l’état du stock de la collectivité à un moment donné, ils n’entrent pas dans le calcul de l’empreinte carbone de la collectivité. Les dépenses effectuées pour mettre en stock ces produits auront été capturées soit via les comptes de charges soit les comptes d’immobilisations.'
  },
  {
    key: 'Comptes de tiers',
    text: 'comptes de bilan reflétant les relations financières avec les tiers à une date donnée, ces comptes auront été alimentés par les achats et les ventes des classes 6 et 7.'
  },
  {
    key: 'Comptes financiers',
    text: 'ces comptes sont liés à des opérations d’ordres, non budgétaires, enregistrant des mouvements de valeur avec le trésor public, les banques…'
  },
  {
    key: 'Comptes de produits',
    text: 'les produits sont exclus car nous nous concentrons à ce stade au calcul de l’empreinte carbone de la collectivité.'
  },
  {
    key: 'Comptes spéciaux',
    text: 'correspondant aux engagements que la collectivité locale a pris, mais qui ne sont pas directement reflétés dans son bilan, ces engagements sont des obligations potentielles qui peuvent générer des charges financières futures pour la collectivité. C’est à ce moment qu’elles seront comptabilisées en termes d’émissions.'
  }
]
</script>
<template>
  <div>
    <div class="methodology__section_header">
      <h3>Plan comptable normalisé</h3>
    </div>
    <div class="methodology__section">
      <p>
        Différentes comptabilités sont applicables au secteur public local selon le type de
        collectivités (communes, départements, régions) et selon la nature de l'activité exercée
        (service public administratif ou service public à caractère industriel et commercial). Ces
        différents types de comptabilités se déclinaient jusqu’à présent au sein d’instructions
        comptables différentes selon les catégories de collectivités : M14 pour les communes, M52
        pour les départements, M71 pour les régions, M4 pour les services à caractère industriel et
        commercial, M22 pour les ESMS, M31 pour les OPH, etc. A compter du 1er janvier 2024, les
        communes, intercommunalités, départements et régions utiliseront une seule instruction
        comptable, l’instruction M57, déjà utilisée par les métropoles. Toutefois, l’instruction M4
        (utilisée pour les services publics industriels et commerciaux) et l’instruction M22
        (établissements sociaux et médico sociaux) seront conservées.
      </p>
      <div>
        <p>
          MyCityCO2 s’appuie aujourd’hui sur l’instruction M14 et exploitera à compter de 2024
          l’instruction M57. Dans les deux cas, les classes de comptes sont les suivantes :
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li class="flex gap-x-3" v-for="(item, idx) in accountClasses" :key="idx">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
            <span
              ><strong class="font-semibold text-gray-900"
                >Classe {{ idx + 1 }} - {{ item.key }} : {{ '' }}</strong
              >{{ item.text }}</span
            >
          </li>
        </ul>
      </div>

      <div>
        <p>
          MyCityCO2 ne retient que les classes 2 et 6 représentant les dépenses réelles de
          fonctionnement et d’investissement, génératrices d’émissions de CO2. Les classes suivantes
          sont exclues pour les raisons ci-dessous :
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li class="flex gap-x-3" v-for="(item, idx) in accountClasses2" :key="idx">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
            <span
              ><strong class="font-semibold text-gray-900"
                >Classe {{ idx + 1 }} - {{ item.key }} : {{ '' }}</strong
              >{{ item.text }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
