<script setup>
const features = [
  {
    name: 'Accompagnement des collectivités',
    description:
      'MyCityCO2 va lancer des modules « matières » (énergie, réfection voies, …) et une assistance aux collectivités qui veulent aller plus loin, et affiner leurs comptes en carbones en vue de l’obtention de cerfication. Intéressé ? Contactez-nous.'
  },
  {
    name: 'Extension aux autres collectivités territoriales',
    description: 'Les syndicats, les communautés de communes, les départements et les régions publiant elles aussi leur comptabilité en open data, nous prévoyons aussi de les prendre en compte dans un futur proche.'
  },
  {
    name: 'Développement à l’international (Suisse,…)',
    description:
      'MyCityCO2 part de France et de Suisse avec d’emblée une ambition internationale. Sa méthode s’appuie sur la comptabilité financière des collectivités et s’inspire des grands référentiels carbones internationaux.'
  },
  {
    name: 'Module projet pour évaluer l’impact de décarbonation d’un projet (nouveau bâtiment, nouvelle infrastructure…)',
    description:
      'Les collectivités locales vont prendre des décisions essentielles dans les 30 ans qui viennent : des outils de mesure partagés sont la meilleure façon de trouver les bons compromis.'
  }
]
</script>

<template>
  <div class="top-padding">
    <section class="section-small">
      <RouterView v-slot="{ Component }">
        <VTransitionFade>
          <component :is="Component" />
        </VTransitionFade>
      </RouterView>
    </section>
    <section id="project">
      <div class="mx-auto max-w-3xl lg:text-center">
        <span class="tooltip">Les grands axes de développement</span>
        <h3 class="mt-2">Un bien commun qui ne demande qu’à se développer</h3>
        <p class="mt-6 leading">
          MyCityCO2 a vocation à continuer à se développer que ce soit en termes de couverture
          géographique (union européenne notamment) ou en termes de couverture fonctionnelle, vous
          êtes les bienvenus pour contribuer au développement de ce bien commun numérique.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>