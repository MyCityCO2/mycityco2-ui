<script setup>
import VHeading from '@/components/VHeading.vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import {
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  LanguageIcon,
  LightBulbIcon
} from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Développer',
    description:
      'Développeurs en travaillant directement sur le code (<a href="https://github.com/MyCityCO2" target="_blank" class="text-link">projet github</a>).',
    icon: CodeBracketIcon
  },
  {
    name: 'Devenir précurseur',
    description:
      'Communes (maires, adjoints, agents) qui seraient intéressées par le projet pour devenir pilote des phases suivantes, faire des retours… ',
    icon: LightBulbIcon
  },
  {
    name: 'Traduire',
    description: 'Traducteurs pour préparer le développement dans d’autres pays.',
    icon: LanguageIcon
  },
  {
    name: 'Communiquer',
    description:
      'Communicants pour préparer et exécuter une stratégie de communication et mieux faire connaître le produit. Partager MyCityCO2 sur les réseaux sociaux ?...',
    icon: ChatBubbleLeftRightIcon
  }
]

const thanks = [
  'les membres d’Open Net qui se sont intensément investis pour sortir une première version',
  'les membres bénévoles de Carbones sur factures qui définissent les comptes carbones de demain',
  'Pierre Chassany (Vocables) pour la création du logo MyCityCO2',
  'les experts qui ont contribué au développement de la solution',
  'les représentants des collectivités qui participent au test de la solution et nous aiguillent sur les besoins à couvrir',
  'les fournisseurs de données qui font l’effort de rendre publiques leurs données et ainsi faire la promotion de l’open-data',
  'Odoo SA, éditeur de l’ERP open-source Odoo sur la base duquel le module de CO2 tracking a été développé'
]
</script>

<template>
  <div>
    <VHeading
      title="Pourquoi Mycityco2 ?"
      text="MyCityCO2 a pour objectif d'automatiser les comptes carbones pour toutes les collectivités (communes, EPCI et syndicats). Ainsi, MyCityCO2 permet aux collectivités de se concentrer sur les actions à mettre en œuvre pour décarboner les services publics. MyCityCO2 facilite la prise de conscience d’un large public (citoyens, élus, etc...) sur les enjeux du dérèglement climatique lié aux émissions des gaz à effet de serre. Est-ce que ma commune est en phase avec la trajectoire définie par la Stratégie nationale bas-carbone (SNBC), feuille de route de la France pour respecter l'Accord de Paris ? MyCityCO2 vous permettra de visualiser votre trajectoire carbone vis-à-vis de la trajectoire cible."
    />
    <section>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div>
          <h3>Comment contribuer ?</h3>
          <p class="my-6 leading-text">
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
            <dd class="mt-1 text-base leading-7 text-gray-600" v-html="feature.description" />
          </div>
        </dl>
      </div>
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
            alt="Open Net Sarl logo"
            width="105"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="@/assets/images/logos/odoo.svg"
            alt="Odoo logo"
            width="104"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="@/assets/images/logos/ExioBase.png"
            alt="ExioBase logo"
            width="140"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="@/assets/images/logos/La_Poste.svg"
            alt="La Poste"
            width="136"
            height="48"
          />
          <img
            class="max-h-20 w-full object-contain object-left"
            src="@/assets/images/logos/vocables.svg"
            alt="Vocables logo"
            width="158"
            height="48"
          />
          <img
            class="max-h-20 w-full object-contain object-left"
            src="@/assets/images/logos/AB.jpg"
            alt="AB logo"
            width="147"
            height="48"
          />
          <img
            class="max-h-28 w-full object-contain object-left"
            src="@/assets/images/logos/mef.svg"
            alt="Minitsère de l'économie et de la finance logo"
            width="158"
            height="48"
          />
          <img
            class="max-h-28 w-full object-contain object-left"
            src="@/assets/images/logos/opendatasoft.svg"
            alt="Opendatasoft"
            width="158"
            height="48"
          />
          <img
            class="max-h-28 w-full object-contain object-left"
            src="@/assets/images/logos/CITEPA.avif"
            alt="CITEPA"
            width="158"
            height="48"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div
          class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 gap-x-8 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pr-8"
        >
          <img
            class="max-h-14 w-full object-contain object-left"
            src="@/assets/images/logos/vuejs.svg"
            alt="VueJS logo"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="@/assets/images/logos/tailwindcss.svg"
            alt="Tailwindcss logo"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="@/assets/images/logos/chartjs.svg"
            alt="ChartJS logo"
          />

          <img
            class="max-h-14 w-full object-contain object-left"
            src="@/assets/images/logos/heroicons.svg"
            alt="Heroicons logo"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="@/assets/images/logos/OCA.png"
            alt="OCA logo"
            width="158"
            height="48"
          />
          <img
            class="max-h-14 w-full object-contain object-left"
            src="@/assets/images/logos/crater.svg"
            alt="Crater logo"
            width="147"
            height="48"
          />
        </div>
        <div class="mx-auto w-full max-w-xl lg:mx-0">
          <h3>Crédits</h3>
          <ul
            role="list"
            class="marker:text-primary list-disc pl-5 space-y-3 mt-6 text-neutral-600"
          >
            <li>
              Le code de nombreux modules utilisés par MyCityCO2 provient de l’Odoo Community
              Association (OCA) organisation à but non lucratif qui aide ses membres à créer plus
              rapidement des solutions Odoo moins coûteuses et plus performantes, avec un accès
              facile à des applications de haute qualité et à des mises à jour ouvertes.
            </li>
            <li>
              Le framework javascript VueJS ainsi que ses composants core tel que Vue-Router et
              Pinia ont été utilsés pour réaliser l'application web
            </li>
            <li>Le framework TailwindCSS a été utilisé pour réaliser la partie graphique</li>
            <li>
              La bibliothèque graphique Chart.js utilisée dans le tableau de bord de chaque commune
            </li>
            <li>Les icones utilisées proviennent de heroicons</li>
            <li>
              Une partie de l’arborescence et du contenu général du site de « Les Greniers
              d'Abondance, Calculateur pour la Résilience Alimentaire des Territoires (CRATer)»
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
