<script setup>
import { useCityStore } from '@/stores/city'
import { computed, onMounted, ref, watch } from 'vue'

import { QUERY_CITY_DASHBOARD } from '@/api/query/co2'
import VLoading from '@/components/VLoading.vue'
import VError from '@/components/alerts/VError.vue'
import { ChartBarIcon, CloudIcon, UsersIcon } from '@heroicons/vue/24/outline'
import { useLazyQuery } from '@vue/apollo-composable'
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Bar, Doughnut } from 'vue-chartjs'
import VHeader from './components/VHeader.vue'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineController,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  ChartDataLabels,
  LineElement
)

const cityStore = useCityStore()
const sidebarOpen = ref(false)
const { result, load, loading, error, forceDisabled } = useLazyQuery(
  QUERY_CITY_DASHBOARD,
  cityStore.dashboardVariables
)

onMounted(() => {
  if (cityStore.dashboardVariables.cityId && forceDisabled.value) load()
})

watch(cityStore.dashboardVariables, (newVars) => {
  if (newVars.cityId && forceDisabled.value) {
    console.log('trigger')
    load()
  }
})
const stats = computed(() => {
  if (!result.value || !result.value?.city) return []
  return [
    {
      id: 1,
      name: 'Population en 2021',
      stat: result.value.city.population,
      change: '1%',
      icon: UsersIcon,
      changeType: 'decrease'
    },
    {
      id: 2,
      name: 'Emissions en 2021',
      stat: `${result.value.city.co2EmissionsPerHab.toFixed(0)}`,
      statUom: 'kgCO2eq/hab',
      change: '5.4%',
      icon: CloudIcon,
      changeType: 'increase'
    },
    {
      id: 3,
      name: 'Evol. annuelle moyenne des émissions 2016-2021',
      stat: `${result.value.city.co2EmissionsEvolution}`,
      statUom: '%',
      statIsChange: true,
      change: '3.2%',
      icon: ChartBarIcon,
      changeType: 'decrease'
    }
  ]
})

const colors = ['rgba(50, 202, 175, 0.5)', 'rgba(108, 199, 222, 0.5)']

const emissionByCateg = computed(() => {
  if (!result.value || !result.value?.city) return []
  return {
    labels: result.value.city.co2EmissionByCategory.map((item) => item.name),
    datasets: [
      {
        backgroundColor: colors[0],
        data: result.value.city.co2EmissionByCategory.map((item) => item.sum)
      }
    ]
  }
})

const emissionByJournal = computed(() => {
  if (!result.value || !result.value?.city) return []
  return {
    labels: result.value.city.co2EmissionsEvolutionByJournal.map((item) => item.name),
    datasets: [
      {
        data: result.value.city.co2EmissionsEvolutionByJournal.map((item) => item.sum)
      }
    ]
  }
})

const emissionByJournalYearly = computed(() => {
  if (!result.value || !result.value?.city) return []
  let data = result.value.city.co2EmissionsEvolutionByJournalYearly
  const years = [...new Set(data.map((item) => item.year))]
  const minYear = Math.min(...years)

  const minYearTotalSum = data
    .filter((item) => item.year === minYear)
    .reduce((total, item) => total + item.sum, 0)

  const datasets = data.reduce((result, item, idx) => {
    const { name, sum, year } = item
    const existingDataset = result.find((dataset) => dataset.label === name)

    if (existingDataset) {
      const existingData = existingDataset.data.find((dataItem) => dataItem.x === year)
      if (existingData) {
        existingData.y += sum
      } else {
        existingDataset.data.push({ x: year, y: sum })
      }
    } else {
      result.push({
        label: name,
        type: 'bar',
        backgroundColor: colors[idx % colors.length],
        data: [{ x: year, y: sum }],
        borderWidth: 1
      })
    }

    return result
  }, [])

  const idealProgressionDataset = {
    label: 'Accord de Paris',
    type: 'line',
    data: data.map((item) => {
      const { year } = item
      const adjustedSum = minYearTotalSum - minYearTotalSum * 0.035 * (year - minYear)
      return { x: year, y: adjustedSum }
    }),
    fill: false,
    borderColor: colors[0],
    borderWidth: 2
  }

  datasets.push(idealProgressionDataset)

  return {
    labels: years,
    datasets: datasets
  }
})

const emissionByJournalYearlyChartOptions = {
  element: {
    bar: {
      backgroundColor: colors[0]
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false
      }
    },
    y: {
      stacked: true,
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      onClick: null,
      position: 'bottom'
    },
    datalabels: {
      anchor: 'end',
      align: 'end',
      font: {
        weight: 'bold'
      },
      formatter: (value, context) => {
        if (context.datasetIndex == 2) return ''
        const datasetArray = []
        context.chart.data.datasets.forEach((dataset) => {
          if (dataset.type != 'line' && dataset.data[context.dataIndex] != undefined) {
            datasetArray.push(dataset.data[context.dataIndex].y)
          }
        })
        const totalSum = (total, datapoint) => total + datapoint

        let sum = datasetArray.reduce(totalSum, 0)
        if (datasetArray.length == 1 || context.datasetIndex == datasetArray.length - 1)
          return Math.floor(sum)
        else return ''
      }
    }
  }
}

const emissionByJournalChartOptions = {
  backgroundColor: colors,
  responsive: true,
  maintainAspectRatio: false,
  cutout: 90,
  plugins: {
    legend: {
      onClick: null,
      position: 'bottom'
    },
    tooltip: {
      enabled: false
    },
    datalabels: {
      font: {
        weight: 'bold'
      },
      formatter: (value) => {
        let newValue = Math.floor(value)
        return newValue.toString()
      }
    }
  }
}

const emissionByCategChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y',
  scales: {
    y: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    title: {
      display: false
    },
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    },
    datalabels: {
      anchor: 'end',
      align: 'end',
      font: {
        weight: 'bold'
      },
      formatter: (value) => {
        let newValue = Math.floor(value)
        return newValue.toString()
      }
    }
  }
}

const features = [
  {
    name: 'Quels services engendrent le plus de CO2 (éducation, santé, sécurité…) ?',
    description: 'Quels services engendrent le plus de CO2 (éducation, santé, sécurité…) ?'
  },
  {
    name: 'Accompagnement des collectivités',
    description:
      'MyCityCO2 va lancer des modules « matières » (énergie, réfection voies, …) et une assistance aux collectivités qui veulent aller plus loin, et affiner leurs comptes en carbones en vue de l’obtention de cerfication. Intéressé ? Inscrivez-vous'
  },
  {
    name: 'Développement à l’international (Suisse,…)',
    description:
      'MyCityCO2 part de France et de Suisse avec d’emblée une ambition internationale. Sa méthode s’appuie sur une Comptabilité des carbones compatible avec les différentes comptabilités nationales, privées et publiques, et avec les grands standards carbones internationaux. Les empreintes produites suivent le standard « scopes 1, 2 et 3 amont ».'
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
      <VHeader @opensidebar="sidebarOpen = true" v-if="cityStore.currentCity" />

      <main class="mt-10">
        <div v-if="!cityStore.currentCity">
          <div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
              <h3>Aucune commune sélectionnée !</h3>
              <p class="mt-6 leading-text">
                Veuillez sélectionner votre commune pour continuer. Vous pouvez la trouvez par son
                nom ou son code postal.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <button @click="cityStore.openSelector()" class="button-primary">
                  Sélectionner
                </button>
                <router-link :to="{ name: 'contact' }" class="link"
                  >Demander une commune <span aria-hidden="true">→</span></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="loading">
          <VLoading />
        </div>
        <div v-else-if="error" class="max-w-2xl mx-auto">
          <VError
            title="Une erreur est survenue !"
            text="Nous n'avons malheureusement pas pu charger les données."
          />
        </div>
        <div v-else-if="result && result.city">
          <dl class="mx-auto grid grid-cols-1 gap-4 sm:gap-y-0 sm:grid-cols-3">
            <div
              v-for="stat in stats"
              :key="stat.name"
              class="flex space-x-4 sm:space-x-6 xl:space-x-8 items-center border rounded-xl border-gray-100 bg-white px-4 py-10 sm:px-6 xl:px-8"
            >
              <div>
                <component :is="stat.icon" class="h-10 w-10 text-primary" aria-hidden="true" />
              </div>
              <div class="flex-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <dt class="text-sm font-medium leading-6 text-gray-500">{{ stat.name }}</dt>
                <!-- <dd
                  :class="[
                    stat.changeType === 'decrease' ? 'text-rose-600' : 'text-gray-700',
                    'text-xs font-medium'
                  ]"
                >
                  {{ stat.change }}
                </dd> -->
                <dd class="w-full flex-none text-3xl font-bold leading-10 text-gray-900">
                  {{ stat.stat }} <span class="text-xl">{{ stat.statUom }}</span>
                </dd>
              </div>
            </div>
          </dl>
          <div class="mt-10 grid grid-cols-1 gap-4 gap-y-2 sm:gap-y-0 lg:grid-cols-3">
            <div class="rounded-xl border border-gray-100 bg-white px-4 py-5 sm:py-6 flex flex-col">
              <h5 class="pb-4">
                Evolution des émissions entre 2016 et 2021
                <span class="text-sm font-normal leading-none">en kgCO2eq/hab</span>
              </h5>
              <div class="flex-1">
                <Bar
                  :options="emissionByJournalYearlyChartOptions"
                  :data="emissionByJournalYearly"
                />
              </div>
            </div>
            <div class="rounded-xl border border-gray-100 bg-white px-4 py-5 sm:py-6 flex flex-col">
              <h5 class="pb-4">
                Répartition des émissions en 2021
                <span class="text-sm font-normal leading-none">en kgCO2eq/hab</span>
              </h5>
              <div class="flex-1">
                <Doughnut :data="emissionByJournal" :options="emissionByJournalChartOptions" />
              </div>
            </div>
            <div class="rounded-xl border border-gray-100 bg-white px-4 py-5 sm:py-6 flex flex-col">
              <h5 class="pb-4">
                Emissions par poste en 2021
                <span class="text-sm font-normal leading-none">en kgCO2eq/hab</span>
              </h5>
              <div class="flex-1">
                <Bar :options="emissionByCategChartOptions" :data="emissionByCateg" />
              </div>
            </div>
          </div>
        </div>
      </main>
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
