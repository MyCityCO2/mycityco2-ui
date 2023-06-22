<script setup>
import VHeading from '@/components/VHeading.vue'
import { ref } from 'vue'

const faqs = [
  {
    question: 'Quelles sont les principales lacunes ou limites des bilans carbone actuels ?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  },
  {
    question:
      "Comment MyCityCO2 améliore-t-il la précision et la fiabilité de l'estimation des émissions de gaz à effet de serre ?",
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  },
  {
    question:
      "Comment MyCityCO2 prend-il en compte les différentes sources d'émissions, y compris les émissions directes, indirectes et liées à la chaîne d'approvisionnement ?",
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  },
  {
    question:
      "Quelles sont les fonctionnalités de cet outil qui facilitent la collecte et l'analyse des données relatives aux émissions ?",
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  },
  {
    question:
      'Comment MyCityCO2 permet-il aux utilisateurs de suivre les progrès réalisés dans la réduction des émissions et de fixer des objectifs de réduction ambitieux ?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  },
  {
    question:
      'Comment MyCityCO2 contribue-t-il à la standardisation et à la comparabilité des comptes carbone entre différentes collectivités ?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  },
  {
    question: 'Quelle est la prochaine étape importante pour le développement de MyCityCO2 ?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  }
]

const glossary = [
  {
    name: 'Accord de Paris',
    description:
      " l'Accord de Paris est un accord international sur le changement climatique adopté en 2015 lors de la COP21. Il vise à limiter le réchauffement climatique mondial à moins de 2 degrés Celsius par rapport aux niveaux préindustriels et à poursuivre les efforts pour limiter l'élévation de la température à 1,5 degré Celsius."
  },
  {
    name: 'Amortissement',
    description:
      " les amortissements en comptabilité correspondent à la répartition systématique du coût d'un actif immobilisé sur sa durée de vie utile, afin de refléter sa dépréciation progressive dans le temps et de réduire sa valeur comptable. Cela permet de prendre en compte l'usure, l'obsolescence et l'utilisation de l'actif au fil du temps."
  },
  {
    name: 'Bilan GES',
    description:
      " les bilans GES (Gaz à Effet de Serre) sont des outils d'évaluation des émissions de gaz à effet de serre d'une organisation, d'une entreprise ou d'un territoire. Ils quantifient et rapportent les émissions de gaz à effet de serre, permettant d'identifier les sources principales et d'orienter les actions pour réduire l'impact sur le climat."
  },
  {
    name: 'Carbone sur facture',
    description:
      ' la communauté Carbones Sur Factures (ou CSF) lancée par Réconcilions-nous a un objectif : permettre rapidement à chaque producteur en Europe, marchand on non marchand, d’indiquer le poids fiable en carbones de ses offres, et aider ainsi chaque acteur dans ses choix de décarbonation. Le moyen ? Encadrer les comptages actuels des carbones dans une comptabilité des carbones fiable et simple.'
  },
  {
    name: 'Changement climatique',
    description:
      " réfère à l'altération à long terme des schémas climatiques de la Terre, résultant en des variations significatives des températures, des précipitations, des vents et d'autres paramètres climatiques à l'échelle mondiale. Le changement climatique est principalement causé par les activités humaines, telles que l'émission de gaz à effet de serre, et entraîne des conséquences telles que l'élévation du niveau de la mer, les phénomènes météorologiques extrêmes et la perturbation des écosystèmes."
  },
  {
    name: 'CO2 équivalent',
    description:
      " Le CO2 équivalent est une mesure qui permet de convertir les émissions de différents gaz à effet de serre en une seule unité de mesure, en prenant en compte leur potentiel de réchauffement climatique par rapport au dioxyde de carbone (CO2). Cela facilite la comparaison et l'agrégation des émissions de différents gaz, en fournissant une estimation commune de leur contribution au changement climatique."
  },
  {
    name: 'Empreinte carbone',
    description:
      " L'empreinte carbone désigne la quantité totale de gaz à effet de serre émise directement ou indirectement par une personne, une entreprise, une collectivité ou territoire. Elle mesure l'impact sur le changement climatique et peut inclure les émissions liées à l'énergie, aux transports, à l'alimentation, à la production industrielle, etc."
  },
  {
    name: 'Exiobase',
    description:
      " base de données économiques et environnementales qui fournit des informations détaillées sur les flux de matières, d'énergie et d'émissions dans l'économie mondiale. Elle permet d'analyser les interactions entre les activités économiques et l'impact environnemental, contribuant ainsi à l'évaluation de la durabilité et à la prise de décisions éclairées. Elle fournit les facteurs d’émission monétaires pour MyCityCO2."
  },
  {
    name: 'Facteur d’émission (monétaire et physique)',
    description:
      " Un facteur d'émission monétaire est une mesure qui exprime les émissions de gaz à effet de serre associées à une unité monétaire dépensée, généralement dans le cadre de l'achat de biens ou de services. Un facteur d'émission physique quantifie les émissions de gaz à effet de serre par unité physique d'un produit, d'une activité ou d'un processus. Ces facteurs aident à évaluer l'impact environnemental des activités économiques et à orienter les choix vers des options plus durables en terme d'émissions de gaz à effet de serre."
  },
  {
    name: 'GES (Gaz à effet de Serre)',
    description:
      " les gaz à effet de serre (GES) sont des composés présents dans l'atmosphère qui contribuent au phénomène de l'effet de serre. Ils retiennent la chaleur émise par la Terre, ce qui entraîne un réchauffement de la planète. Les principaux GES d'origine humaine comprennent le dioxyde de carbone (CO2), le méthane (CH4), le protoxyde d'azote (N2O) et les gaz fluorés. Ils sont principalement émis par des activités industrielles, agricoles et énergétiques et sont responsables du changement climatique en augmentant la température moyenne de la Terre."
  },
  {
    name: 'GHG Protocol',
    description:
      ' le GHG Protocol (Greenhouse Gas Protocol) est un cadre de comptabilisation et de gestion des émissions de gaz à effet de serre (GES).'
  },
  {
    name: 'Limites planétaires',
    description:
      " les limites planétaires font référence aux seuils et aux conditions nécessaires pour préserver un état sûr et stable de la planète Terre. Elles définissent les limites de tolérance de certains processus écologiques clés, tels que le changement climatique, la perte de biodiversité, le cycle de l'eau et l'utilisation des ressources, au-delà desquels le fonctionnement global de l'écosystème terrestre pourrait être compromis. Les limites planétaires servent de guide pour orienter les actions visant à maintenir la durabilité environnementale et à préserver les conditions propices à la vie sur Terre."
  },
  {
    name: 'PRG (Potentiel de Réchauffement Global)',
    description:
      " indicateurs utilisés pour évaluer l'impact des différents gaz à effet de serre (GES) sur le réchauffement climatique. Les PRG comparent la capacité de chaque gaz à emprisonner la chaleur dans l'atmosphère par rapport au dioxyde de carbone (CO2), qui est utilisé comme référence avec un PRG de 1. Les PRG permettent de convertir les émissions de différents GES en équivalents CO2, facilitant ainsi la comparaison et l'agrégation des émissions de GES provenant de différentes sources."
  },
  {
    name: 'Scope',
    description:
      " les scopes d'un bilan carbone sont des catégories qui définissent les sources et les périmètres des émissions de gaz à effet de serre (GES) à prendre en compte lors de l'évaluation. Ils permettent une évaluation complète des émissions de GES liées aux activités d'une organisation, en prenant en compte les émissions directes et indirectes tout au long de la chaîne de valeur."
  },
  {
    name: 'Neutralité carbone',
    description:
      " la neutralité carbone fait référence à un état dans lequel les émissions nettes de gaz à effet de serre (GES) sont équivalentes à zéro. Cela signifie que les émissions totales de GES sont entièrement compensées par des actions visant à réduire, éviter ou séquestrer les émissions, souvent par le biais de projets de réduction des GES ou de l'achat de crédits carbone. Atteindre la neutralité carbone est considéré comme un objectif clé dans la lutte contre le changement climatique, car cela permet de stabiliser le niveau de concentration des GES dans l'atmosphère, contribuant ainsi à limiter le réchauffement climatique."
  },
  {
    name: 'NZI (Net Zero Initiative)',
    description:
      " mouvement mondial visant à atteindre la neutralité carbone à l'échelle mondiale. Il s'agit d'un engagement des gouvernements, des entreprises et des organisations à réduire leurs émissions de gaz à effet de serre (GES) à zéro, et à compenser toute émission résiduelle par des actions de réduction ou de séquestration des GES. L'initiative vise à accélérer les efforts pour lutter contre le changement climatique en encourageant une transition vers des économies à faible émission de carbone et en favorisant les pratiques durables."
  },
  {
    name: 'SBTi (Science Based Targets initiative)',
    description:
      " initiative collaborative entre plusieurs organisations, dont le CDP, le Global Compact des Nations Unies, le World Resources Institute et le WWF. Son objectif est de promouvoir la fixation d'objectifs de réduction des émissions de gaz à effet de serre (GES) basés sur la science. Les entreprises qui s'engagent dans la SBTI s'efforcent de fixer des cibles de réduction des émissions alignées sur les recommandations scientifiques pour limiter le réchauffement climatique mondial à 1,5 degré Celsius. La SBTI fournit des critères et des directives pour garantir que ces objectifs sont rigoureux et cohérents avec l'urgence climatique."
  },
  {
    name: 'SNBC (Stratégie Nationale Bas Carbone)',
    description:
      ' feuille de route de la France pour lutter contre le changement climatique. Elle donne des orientations pour mettre en œuvre, dans tous les secteurs d’activité, la transition vers une économie bas-carbone, circulaire et durable.'
  }
]

const currentGlossary = ref(0)
</script>

<template>
  <div>
    <VHeading
      title="Comprendre les risques liés aux émissions de Gaz à Effet de Serre"
      text="Les émissions de gaz à effet de serre (GES) représentent un ensemble de risques majeurs pour notre planète et tous les êtres vivants qui y résident. En augmentant la concentration de GES dans l'atmosphère, nous perturbons l'équilibre climatique de la Terre, ce qui entraîne des conséquences graves. Le principal risque est le réchauffement climatique, qui provoque des changements environnementaux dramatiques tels que l'élévation du niveau de la mer, les phénomènes météorologiques extrêmes et la perturbation des écosystèmes. Ces changements ont des répercussions sur l'agriculture, la disponibilité de l'eau et la santé humaine. Réduire les émissions de GES et passer à une économie durable est essentiel pour prévenir ces risques et protéger notre planète."
    />
    <section>
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <h3>Foire aux questions</h3>
          <p class="mt-4 text-base leading-7 text-gray-600">
            Vous ne trouvez pas la réponse à votre question ? N’hésitez pas à
            <router-link
              :to="{ name: 'contact' }"
              class="font-semibold text-emerald-500 hover:text-emerald-400"
              >nous contacter</router-link
            >
          </p>
        </div>
        <div class="mt-10 lg:col-span-7 lg:mt-0">
          <dl class="space-y-10">
            <div v-for="faq in faqs" :key="faq.question">
              <dt class="text-base font-semibold leading-7 text-gray-900">{{ faq.question }}</dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">{{ faq.answer }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-4xl mx-auto text-left">
        <h3>Glossaire</h3>
        <!-- <p class="mt-6 leading-text">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
          veritatis in accusamus quisquam.
        </p> -->
      </div>
      <div class="grid grid-cols-3 gap-x-10 mt-2 sm:mt-4 max-w-4xl mx-auto">
        <div class="flex">
          <nav>
            <ul class="mt-2 space-y-2">
              <li
                v-for="(item, idx) in glossary"
                @click=";(ccurrentGlossary = null), (currentGlossary = idx)"
                :key="idx"
                :class="[
                  idx == currentGlossary ? 'text-emerald-500 text-lg' : 'text-gray-400 text-xs',
                  'cursor-pointer hover:text-emerald-500 py-1 transition-all transform'
                ]"
              >
                {{ item.name }}
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex items-start justify-center col-span-2">
          <Transition name="fade" mode="out-in">
            <div v-if="currentGlossary != null" class="rounded-lg px-10 flex flex-col space-y-4">
              <h4>{{ glossary[currentGlossary].name }}</h4>
              <p class="leading">{{ glossary[currentGlossary].description }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
