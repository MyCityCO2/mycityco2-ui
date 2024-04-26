<script setup lang="ts">
import { ChartBarIcon, CloudIcon, UsersIcon } from "@heroicons/vue/24/outline"
import type { ChartData, ChartDataset, ChartOptions, Point } from "chart.js"
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
  Tooltip,
} from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"
import { Bar, Chart, Doughnut } from "vue-chartjs"
import { useRoute } from "vue-router"
import { QUERY_CITY_DASHBOARD } from "~/api/query/co2"
import ShareAction from "~/components/share/ShareAction.vue"

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

const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const cityStore = useCityStore()
const sidebarOpen = ref(false)

watch(route, () => {
  const cityIdentifier = !Array.isArray(route.params.cityIdentifier)
    ? route.params.cityIdentifier.toString()
    : ""
  cityStore.setCurrentCityId(parseInt(cityIdentifier, 10))
})

const {
  data: result,
  pending,
  error,
} = await useAsyncQuery<CityData>(QUERY_CITY_DASHBOARD, {
  cityId: !Array.isArray(route.params.cityIdentifier)
    ? parseInt(route.params.cityIdentifier)
    : "",
  year: cityStore.dashboardVariables.year,
})
const stats = computed(() => {
  if (!result.value || !result.value?.city) return []
  return [
    {
      id: 1,
      name: t("diagnostic.population"),
      stat: result.value.city.population,
      change: "1%",
      icon: UsersIcon,
      changeType: "decrease",
    },
    {
      id: 2,
      name: t("diagnostic.emissions"),
      stat: `${result.value.city.co2EmissionsPerHab.toFixed(0)}`,
      statUom: "kgCO2eq/hab",
      change: "5.4%",
      icon: CloudIcon,
      changeType: "increase",
    },
    {
      id: 3,
      name: t("diagnostic.average_annual_emissions_evolution", {
        minYear: result.value.city.minYear,
      }),
      stat: `${result.value.city.co2EmissionsEvolution}`,
      statUom: "%",
      statIsChange: true,
      change: "3.2%",
      icon: ChartBarIcon,
      changeType: "decrease",
    },
  ]
})

const colors = ["rgba(108, 199, 222, 0.8)", "rgba(50, 202, 175, 0.8)"]

const emissionByCateg = computed<ChartData<"bar">>(() => {
  if (!result.value || !result.value?.city)
    return {
      labels: [],
      datasets: [],
    }

  const sortedCategories = [...result.value.city.co2EmissionByCategory].sort(
    (a, b) => b.sum - a.sum
  )

  interface GroupedData {
    [key: string]: { [key: string]: number }
  }

  const groupedData = sortedCategories.reduce<GroupedData>((acc, item) => {
    if (!acc[item.journalIdName]) {
      acc[item.journalIdName] = {}
    }
    acc[item.journalIdName][item.name] = item.sum
    return acc
  }, {})

  const labels = [...new Set(sortedCategories.map((item) => item.name))]
  const datasets = []

  for (const key in groupedData) {
    const data = labels.map((name) => groupedData[key][name] || 0)
    const backgroundColor = key === "Investissement" ? colors[0] : colors[1]

    datasets.push({
      label: key,
      backgroundColor,
      data,
    })
  }

  return {
    labels,
    datasets,
  }
})

const emissionByJournal = computed<ChartData<"doughnut">>(() => {
  if (!result.value || !result.value?.city)
    return {
      labels: [],
      datasets: [],
    }
  return {
    labels: result.value.city.co2EmissionsEvolutionByJournal.map(
      (item) => item.name
    ),
    datasets: [
      {
        data: result.value.city.co2EmissionsEvolutionByJournal.map(
          (item) => item.sum
        ),
      },
    ],
  }
})

const emissionByJournalYearly = computed<ChartData>(() => {
  if (!result.value || !result.value.city)
    return {
      labels: [],
      datasets: [],
    }

  let data: { year: number; name: string; sum: number }[] =
    result.value.city.co2EmissionsEvolutionByJournalYearly
  const years = [...new Set(data.map((item) => item.year))]
  const minYear = Math.min(...years)

  const minYearTotalSum = data
    .filter((item) => item.year === minYear)
    .reduce((total, item) => total + item.sum, 0)

  const datasets: ChartDataset[] = data.reduce(
    (result: ChartDataset[], item, idx) => {
      const { name, sum, year } = item
      const existingDataset = result.find((dataset) => dataset.label === name)

      if (existingDataset) {
        const existingData = existingDataset.data.find(
          (dataItem): dataItem is { x: number; y: number } =>
            !!dataItem &&
            typeof dataItem === "object" &&
            "x" in dataItem &&
            dataItem.x === year
        )
        if (existingData) {
          existingData.y += sum
        } else {
          existingDataset.data.push({ x: year, y: sum })
        }
      } else {
        result.push({
          label: name,
          type: "bar",
          backgroundColor: colors[idx % colors.length],
          data: [{ x: year, y: sum }],
          borderWidth: 1,
        })
      }

      return result
    },
    []
  )

  const idealProgressionDataset: ChartDataset = {
    label: t("diagnostic.national_low_carbon_strategy"),
    type: "line",
    data: data.map((item) => {
      const { year } = item
      const adjustedSum =
        minYearTotalSum - minYearTotalSum * 0.0216 * (year - minYear)
      return { x: year, y: adjustedSum }
    }),
    fill: false,
    borderColor: "#737373",
    borderWidth: 2,
    borderDash: [10, 10],
    pointStyle: false,
    pointRadius: 0,
    pointHitRadius: 0,
  }

  datasets.push(idealProgressionDataset)

  return {
    labels: years,
    datasets,
  }
})

const emissionByJournalYearlyChartOptions: ChartOptions = {
  elements: {
    bar: {
      backgroundColor: colors[0],
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      onClick: () => undefined,
      position: "bottom",
    },
    datalabels: {
      anchor: "end",
      align: "end",
      font: {
        weight: "bold",
      },
      formatter: (_, context) => {
        if (context.datasetIndex == 2) return ""
        const datasetArray: number[] = []
        context.chart.data.datasets.forEach((dataset: ChartDataset) => {
          if (dataset.type != "line") {
            datasetArray.push((dataset.data[context.dataIndex] as Point)?.y)
          }
        })
        const totalSum = (total: number, datapoint: number) => total + datapoint

        let sum = datasetArray.reduce(totalSum, 0)
        if (
          datasetArray.length == 1 ||
          context.datasetIndex == datasetArray.length - 1
        )
          return Math.floor(sum)
        else return ""
      },
    },
  },
}

const emissionByJournalChartOptions: ChartOptions<"doughnut"> = {
  backgroundColor: (ctx, options) => {
    const index = ctx.dataIndex ?? 0
    return colors[index % colors.length]
  },
  responsive: true,
  maintainAspectRatio: true,
  cutout: "70%",
  plugins: {
    legend: {
      onClick: () => undefined,
      position: "bottom",
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      font: {
        weight: "bold",
      },
      formatter: (value: number) => {
        let newValue = Math.floor(value)
        return newValue.toString()
      },
    },
  },
}

const emissionByCategChartOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y",
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    title: {
      display: false,
    },
    legend: {
      onClick: () => undefined,
      position: "bottom",
    },
    datalabels: {
      font: {
        weight: "bold",
      },
      formatter: (value: number) => (value ? Math.floor(value).toString() : ""),
    },
  },
}

const title = computed(() => {
  if (pending.value || error.value) return ""
  if (result.value && result.value?.city)
    return t("diagnostic.co2_emissions_at", { city: result.value.city.name })
  return ""
})

const shareTitle = computed(() =>
  result.value?.city.name
    ? t("diagnostic.check_carbon_footprint_of", {
        city: result.value.city.name,
      })
    : ""
)

const shareUrl = computed(() => runtimeConfig.public.baseUrl + route.fullPath)
</script>

<template>
  <div>
    <HeadingDiagnostic @opensidebar="sidebarOpen = true" :title="title" />
    <div class="mt-4">
      <div v-if="error" class="max-w-2xl mx-auto">
        <AlertError
          :title="t('diagnostic.error_occurred')"
          :text="t('diagnostic.unable_to_load_data')"
        />
      </div>
      <div v-else-if="result && result.city">
        <ShareAction :title="shareTitle" :url="shareUrl" />
        <dl
          class="mx-auto grid grid-cols-1 gap-4 sm:gap-y-0 sm:grid-cols-3 mt-10"
        >
          <div
            v-for="stat in stats"
            :key="stat.name"
            class="flex space-x-4 sm:space-x-6 xl:space-x-8 items-center border rounded-xl border-black/10 dark:border-white/10 px-4 py-10 sm:px-6 xl:px-8"
          >
            <div>
              <component
                :is="stat.icon"
                class="h-10 w-10 text-primary"
                aria-hidden="true"
              />
            </div>
            <div
              class="flex-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2"
            >
              <dt class="text-sm font-medium leading-6">
                {{ stat.name }}
              </dt>
              <!-- <dd
                  :class="[
                    stat.changeType === 'decrease' ? 'text-rose-600' : 'text-gray-700',
                    'text-xs font-medium'
                  ]"
                >
                  {{ stat.change }}
                </dd> -->
              <dd class="w-full flex-none text-3xl font-bold leading-10">
                <span v-number="stat.stat" />
                <span class="text-xl ml-1">{{ stat.statUom }}</span>
              </dd>
            </div>
          </div>
        </dl>
        <div
          class="mt-10 grid grid-cols-1 gap-4 gap-y-2 sm:gap-y-0 lg:grid-cols-3"
        >
          <div
            class="rounded-xl border border-black/10 dark:border-white/10 px-4 py-5 sm:py-6 flex flex-col min-h-[20rem]"
          >
            <h5 class="pb-4">
              {{
                t("diagnostic.emission_evolution_between", {
                  minYear: result.city.minYear,
                })
              }}
              <span class="text-sm font-normal leading-none">{{
                t("diagnostic.co2_eq_per_hab")
              }}</span>
            </h5>
            <div class="flex-1">
              <ClientOnly>
                <Chart
                  type="bar"
                  :options="emissionByJournalYearlyChartOptions"
                  :data="emissionByJournalYearly"
                />
              </ClientOnly>
            </div>
          </div>
          <div
            class="rounded-xl border border-black/10 dark:border-white/10 px-4 py-5 sm:py-6 flex flex-col"
          >
            <h5 class="pb-4">
              {{ t("diagnostic.emission_distribution") }}
              <span class="text-sm font-normal leading-none">{{
                t("diagnostic.co2_eq_per_hab")
              }}</span>
            </h5>
            <div class="flex-1">
              <ClientOnly>
                <Doughnut
                  :data="emissionByJournal"
                  :options="emissionByJournalChartOptions"
                />
              </ClientOnly>
            </div>
          </div>
          <div
            class="rounded-xl border border-black/10 dark:border-white/10 px-4 py-5 sm:py-6 flex flex-col"
          >
            <h5 class="pb-4">
              {{ t("diagnostic.emission_by_category") }}
              <span class="text-sm font-normal leading-none">{{}}</span>
            </h5>
            <div class="flex-1">
              <ClientOnly>
                <Bar
                  :options="emissionByCategChartOptions"
                  :data="emissionByCateg"
                />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="max-w-2xl mx-auto">
        <AlertWarning
          :title="t('diagnostic.no_results')"
          :text="t('diagnostic.no_result_found')"
        />
      </div>
    </div>
  </div>
</template>
