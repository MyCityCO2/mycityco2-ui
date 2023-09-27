<script setup>
import { useCityStore } from '@/stores/city'
import { computed, onMounted, ref, watch } from 'vue'

import { QUERY_CITY_DASHBOARD } from '@/api/query/co2'
import VLoading from '@/components/VLoading.vue'
import VError from '@/components/alerts/VError.vue'
import VWarning from '@/components/alerts/VWarning.vue'
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
import { useRoute } from 'vue-router'
import VHeader from './components/VHeader.vue'
import VShare from './components/VShare.vue'

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

const route = useRoute()
const cityStore = useCityStore()
const sidebarOpen = ref(false)

if (cityStore.hasCurrentCity == false && route.params?.cityIdentifier)
  cityStore.setCurrentCityId(parseInt(route.params.cityIdentifier))

const { result, load, loading, error, forceDisabled } = useLazyQuery(
  QUERY_CITY_DASHBOARD,
  cityStore.dashboardVariables
)

onMounted(() => {
  if (cityStore.dashboardVariables.cityId && forceDisabled.value) load()
})

watch(cityStore.dashboardVariables, (newVars) => {
  if (newVars.cityId && forceDisabled.value) {
    load()
  }
})

const stats = computed(() => {
  if (!result.value || !result.value?.city) return []
  return [
    {
      id: 1,
      name: 'Population en 2022',
      stat: result.value.city.population,
      change: '1%',
      icon: UsersIcon,
      changeType: 'decrease'
    },
    {
      id: 2,
      name: 'Emissions en 2022',
      stat: `${result.value.city.co2EmissionsPerHab.toFixed(0)}`,
      statUom: 'kgCO2eq/hab',
      change: '5.4%',
      icon: CloudIcon,
      changeType: 'increase'
    },
    {
      id: 3,
      name: `Evolution annuelle moyenne des émissions ${result.value.city.minYear}-2022`,
      stat: `${result.value.city.co2EmissionsEvolution}`,
      statUom: '%',
      statIsChange: true,
      change: '3.2%',
      icon: ChartBarIcon,
      changeType: 'decrease'
    }
  ]
})

const colors = ['rgba(108, 199, 222, 0.8)', 'rgba(50, 202, 175, 0.8)']

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
    label: 'Stratégie nationale bas-carbone',
    type: 'line',
    data: data.map((item) => {
      const { year } = item
      const adjustedSum = minYearTotalSum - minYearTotalSum * 0.0216 * (year - minYear)
      return { x: year, y: adjustedSum }
    }),
    fill: false,
    borderColor: '#737373',
    borderWidth: 2,
    borderDash: [10, 10],
    pointStyle: false,
    pointRadius: 0,
    pointHitRadius: 0
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

const title = computed(() => {
  if (loading.value == true || error.value == true) return ''
  if (result.value && result.value?.city) return `Les émissions de CO2 à ${result.value.city.name}`
  return ''
})

const shareTitle = computed(() =>
  result.value?.city.name ? `Consultez l'empreinte carbone de ${result.value.city.name}` : ''
)

const shareUrl = computed(() => import.meta.env.VITE_BASE_URL + route.fullPath)
</script>

<template>
  <div>
    <VHeader @opensidebar="sidebarOpen = true" :title="title" />

    <div class="mt-4">
      <div v-if="loading">
        <VLoading />
      </div>
      <div v-else-if="error" class="max-w-2xl mx-auto">
        <VError
          title="Une erreur est survenue !"
          text="Nous n'avons malheureusement pas pu charger les données."
        />
      </div>
      <div v-else-if="result && result.city">
        <VShare :title="shareTitle" :url="shareUrl" />
        <dl class="mx-auto grid grid-cols-1 gap-4 sm:gap-y-0 sm:grid-cols-3 mt-10">
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
                <span v-number="stat.stat" /> <span class="text-xl">{{ stat.statUom }}</span>
              </dd>
            </div>
          </div>
        </dl>
        <div class="mt-10 grid grid-cols-1 gap-4 gap-y-2 sm:gap-y-0 lg:grid-cols-3">
          <div
            class="rounded-xl border border-gray-100 bg-white px-4 py-5 sm:py-6 flex flex-col min-h-[20rem]"
          >
            <h5 class="pb-4">
              Evolution des émissions entre {{ result.city.minYear }} et 2022
              <span class="text-sm font-normal leading-none">en kgCO2eq/hab</span>
            </h5>
            <div class="flex-1">
              <Bar :options="emissionByJournalYearlyChartOptions" :data="emissionByJournalYearly" />
            </div>
          </div>
          <div class="rounded-xl border border-gray-100 bg-white px-4 py-5 sm:py-6 flex flex-col">
            <h5 class="pb-4">
              Répartition des émissions en 2022
              <span class="text-sm font-normal leading-none">en kgCO2eq/hab</span>
            </h5>
            <div class="flex-1">
              <Doughnut :data="emissionByJournal" :options="emissionByJournalChartOptions" />
            </div>
          </div>
          <div class="rounded-xl border border-gray-100 bg-white px-4 py-5 sm:py-6 flex flex-col">
            <h5 class="pb-4">
              Emissions par poste en 2022
              <span class="text-sm font-normal leading-none">en kgCO2eq/hab</span>
            </h5>
            <div class="flex-1">
              <Bar :options="emissionByCategChartOptions" :data="emissionByCateg" />
            </div>
          </div>
        </div>
      </div>
      <div v-else class="max-w-2xl mx-auto">
        <VWarning
          title="Aucun résultat !"
          text="Nous n'avons pas pu trouver de résultat pour votre recherche"
        />
      </div>
    </div>
  </div>
</template>
