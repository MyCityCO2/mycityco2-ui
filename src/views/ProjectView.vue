<script setup>
import VHeading from '@/components/VHeading.vue'
import VTimeline from '@/components/VTimeline.vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  CodeBracketIcon,
  HeartIcon,
  PencilSquareIcon
} from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Développer',
    description: 'Développeurs en travaillant directement sur le code (TODO lien projet github).',
    icon: CodeBracketIcon
  },
  {
    name: 'Devenir précurseur',
    description:
      'Communes (maires, adjoints, agents) qui seraient intéressées par le projet pour devenir pilote des phases suivantes, faire des retours… ',
    icon: PencilSquareIcon
  },
  {
    name: 'Traduire',
    description: 'Traducteurs pour préparer le développement dans d’autres pays.',
    icon: ChatBubbleOvalLeftEllipsisIcon
  },
  {
    name: 'Communiquer',
    description:
      'Communicants pour préparer et exécuter une stratégie de communication et mieux faire connaître le produit. Partager MyCityCO2 sur les réseaux sociaux ?...',
    icon: HeartIcon
  }
]

const versionHistory = [
  {
    date: 'Juin 2023',
    title: 'First release',
    text: "la première version de l’application est en ligne. Elle couvre les 35'000 communes de la France. Le moteur de calcul est disponible en open-source, les configurations sont accessibles en toute transparence et les résultats sont publiés en open-data."
  }
]

const roadmapHistory = [
  {
    date: 'Juillet 2023',
    title: 'Certification',
    text: 'reporting certifié GHG Protocol, Bilan GES.'
  },
  {
    date: 'Août 2023',
    title: 'Portail',
    text: 'le portail de production des données est accessible.'
  },
  {
    date: 'Septembre 2023',
    title: 'Européen',
    text: 'MyCityCO2 devient européen en intégrant les communes des cantons Suisse de Genève et de Vaud.'
  },
  {
    date: 'Octobre 2023',
    title: "Facteurs d'émissions annuel",
    text: 'les facteurs d’émission monétaires sont dorénavant pris en compte de manière annuelle. Les données sont regénérées même si les impacts sont mineurs.'
  },
  {
    date: 'Novembre 2023',
    title: 'Toute la Suisse',
    text: 'extension à toute la Suisse romande et à d’autres cantons.'
  },
  {
    date: 'Décembre 2023',
    title: 'V2.0',
    text: 'MyCityCO2 v2.0 des comptes flash monétaires aux comptes physiques pour une précision accrue des comptes carbones.'
  },
  {
    date: '2024',
    title: 'Nouveaux pays',
    text: 'de nouveaux pays s’emparent de la solution et publient les comptes carbones de leurs villes.'
  }
]

const thanks = [
  'les membres d’Open Net qui se sont intensément investis pour sortir une première version',
  'les membres bénévoles de Carbones sur factures qui définissent les comptes carbones de demain',
  'les experts qui ont contribué au développement de la solution',
  'les représentants des collectivités qui participent au test de la solution et nous aiguillent sur les besoins à couvrir',
  'les fournisseurs de données qui font l’effort de rendre publiques leurs données et ainsi faire la promotion de l’open-data',
  'Odoo SA, éditeur de l’ERP open-source Odoo sur la base duquel le module de CO2 tracking a été développé'
]
</script>

<template>
  <div>
    <VHeading
      title="Pourquoi Mycityco2"
      text="MyCityCO2 a pour objectif d'automatiser les comptes carbones pour toutes les collectivités (communes, EPCI et syndicats). Ainsi, MyCityCO2 permet aux collectivités de se concentrer sur les actions à mettre en œuvre pour décarboner les services publics. MyCityCO2 facilite la prise de conscience d’un large public (citoyens, élus, etc...) sur les enjeux du dérèglement climatique lié aux émissions des gaz à effet de serre. Est-ce que ma commune est en phase avec la trajectoire définie par l'Accord de Paris ? MyCityCO2 vous permettra de visualiser votre trajectoire carbone vis-à-vis de la trajectoire cible."
    />
    <section>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comment contribuer ?
          </h2>
          <p class="text-base my-6">
            MyCityCO2 est développée par une équipe de volontaires. Nous sommes à la recherche de
            tous types de contributeurs.
          </p>
          <router-link to="/contact" class="button-primary">Contactez-nous</router-link>
        </div>

        <dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          <div v-for="feature in features" :key="feature.name" class="relative group">
            <div
              class="absolute -inset-x-4 -inset-y-6 -z-10 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"
            ></div>
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg">
                <component :is="feature.icon" class="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </section>
    <section>
      <VTimeline
        title="Historique des versions"
        text="Here’s your guide to the tech fest 2021 process. Go through all the steps to know the
            exact process of the fest."
        :history="versionHistory"
        inverse
      />
    </section>
    <section>
      <VTimeline
        title="Feuille de route"
        text="Here’s your guide to the tech fest 2021 process. Go through all the steps to know the
            exact process of the fest."
        :history="roadmapHistory"
        dashed
      />
    </section>
    <section>
      <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div class="mx-auto w-full max-w-xl lg:mx-0">
          <h3>Remerciements</h3>
          <p class="mt-6 leading-text">
            Merci à toutes celles et ceux qui ont rendu le lancement de MyCityCO2 possible :
          </p>
          <div class="mx-4">
            <ul role="list" class="mt-2 space-y-2">
              <li class="flex gap-x-3" v-for="(item, idx) in thanks" :key="idx">
                <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 gap-x-8 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8"
        >
          <img
            class="max-h-14 w-full object-contain object-left"
            src="@/assets/images/logos/opennet.png"
            alt="Tuple"
            width="105"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="@/assets/images/logos/odoo.svg"
            alt="Reform"
            width="104"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="@/assets/images/logos/ExioBase.png"
            alt="SavvyCal"
            width="140"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg"
            alt="Laravel"
            width="136"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
            alt="Statamic"
            width="147"
            height="48"
          />
        </div>
      </div>
    </section>
  </div>
</template>
