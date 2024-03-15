<script setup>
import { QUERY_CITIES } from '@/api/query'
import { useCityStore } from '@/stores/city'
import { slug } from '@/utils'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { DocumentPlusIcon, FolderPlusIcon, HomeIcon } from '@heroicons/vue/24/outline'
import { useLazyQuery } from '@vue/apollo-composable'
import { reactive, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import VSpin from './VSpin.vue'
import VError from './alerts/VError.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  hasQuickActions: {
    type: Boolean,
    default: true
  },
  autoFocus: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['onSelect'])
const router = useRouter()
let timeoutRef = null
const input = ref(null)
const cityStore = useCityStore()
const params = reactive({
  search: ''
})
const { load, result, loading, error } = useLazyQuery(QUERY_CITIES, params)
const recent = ref([])
const quickActions = [
  { name: 'Request new city...', icon: DocumentPlusIcon, shortcut: 'N', url: '#' },
  { name: 'Report wrong data...', icon: FolderPlusIcon, shortcut: 'F', url: '#' }
]
const doLazySearch = (value) => {
  if (timeoutRef !== null) clearTimeout(timeoutRef)
  timeoutRef = setTimeout(async () => {
    params.search = value
    load()
  }, 500)
}

const onSelect = (item) => {
  cityStore.setCurrentCity(item)
  emit('onSelect', item)
  params.search = ''
  router.push({
    name: 'diagnosticCity',
    params: { countryCode: 'FR', cityIdentifier: item.cityIdentifier, cityName: slug(item.name) }
  })
}

// here watchEffect is used instead of onMounted because the ComboBoxInput render
// later than the VCityselector component causing null value in inputRef
watchEffect(() => {
  if (input.value) {
    input.value.focus()
  }
})
</script>

<template>
  <div>
    <Combobox :model-value="params.search" @update:modelValue="onSelect">
      <div class="relative">
        <MagnifyingGlassIcon
          class="pointer-events-none absolute left-4 top-5 h-6 w-6 text-gray-900 text-opacity-40"
          aria-hidden="true"
        />
        <ComboboxInput as="template" @change="doLazySearch($event.target.value)">
          <input
            ref="input"
            :placeholder="t('actions.search_city') + '...'"
            class="w-full border-0 bg-gray-50 px-12 py-4 text-gray-900 focus:ring-0 sm:text-sm lg:text-2xl"
          />
        </ComboboxInput>
        <VSpin v-if="loading" class="absolute right-4 top-3.5 text-primary" />
      </div>

      <ComboboxOptions
        v-if="
          (params.search === '' && (recent.length > 0 || props.hasQuickActions)) ||
          (result && result.cities?.length > 0)
        "
        static
        class="max-h-80 scroll-py-2 bg-gray-50 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto"
      >
        <li class="p-2">
          <h2
            v-if="params.search === ''"
            class="mb-2 mt-4 px-3 text-xs font-semibold text-gray-900"
          >
            {{ recent.length > 0 ? 'Recherches récentes' : 'Aucune recherche récente' }}
          </h2>
          <ul class="text-sm text-gray-700">
            <ComboboxOption
              v-for="city in params.search === '' ? recent : result.cities"
              :key="city.id"
              :value="city"
              as="template"
              v-slot="{ active }"
            >
              <li
                :class="[
                  'flex cursor-default select-none items-center rounded-md px-3 py-2',
                  active && 'bg-gray-900 bg-opacity-5 text-gray-900 cursor-pointer'
                ]"
              >
                <HomeIcon
                  :class="[
                    'h-6 w-6 flex-none text-gray-900 text-opacity-40',
                    active && 'text-opacity-100'
                  ]"
                  aria-hidden="true"
                />
                <span class="ml-3 flex-auto truncate"
                  >{{ city.name }} - {{ city.zipCodes.join(' - ') }}</span
                >
                <span v-if="active" class="ml-3 flex-none text-gray-500">Sélectionner...</span>
              </li>
            </ComboboxOption>
          </ul>
        </li>
        <li v-if="props.hasQuickActions && params.search === ''" class="p-2">
          <h2 class="sr-only">Quick actions</h2>
          <ul class="text-sm text-gray-700">
            <ComboboxOption
              v-for="action in quickActions"
              :key="action.shortcut"
              :value="action"
              as="template"
              v-slot="{ active }"
            >
              <li
                :class="[
                  'flex cursor-default select-none items-center rounded-md px-3 py-2',
                  active && 'bg-gray-900 bg-opacity-5 text-gray-900'
                ]"
              >
                <component
                  :is="action.icon"
                  :class="[
                    'h-6 w-6 flex-none text-gray-900 text-opacity-40',
                    active && 'text-opacity-100 cursor-pointer'
                  ]"
                  aria-hidden="true"
                />
                <span class="ml-3 flex-auto truncate">{{ action.name }}</span>
                <span class="ml-3 flex-none text-xs font-semibold text-gray-500">
                  <kbd class="font-sans">⌘</kbd>
                  <kbd class="font-sans">{{ action.shortcut }}</kbd>
                </span>
              </li>
            </ComboboxOption>
          </ul>
        </li>
      </ComboboxOptions>

      <div v-if="error" class="p-6 bg-gray-50">
        <VError title="Une erreur s'est produite !" text="Veuillez réessayer plus tard." />
      </div>

      <div
        v-else-if="
          !loading &&
          params.search !== '' &&
          (!result || !result.cities || result.cities.length === 0)
        "
        class="px-6 py-6 text-center sm:px-14 bg-gray-50"
      >
        <HomeIcon class="mx-auto h-6 w-6 text-gray-900 text-opacity-40" aria-hidden="true" />
        <p class="mt-4 text-sm text-gray-900">
          Aucune commune correspondant à votre recherche, 16% restent à charger, vous pouvez par
          exemple essayer avec votre commune de naissance ou la commune voisine.
        </p>
      </div>
    </Combobox>
  </div>
</template>
