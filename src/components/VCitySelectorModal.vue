<script setup>
import { useCityStore } from '@/stores/city'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { reactive } from 'vue'
import VCitySelector from './VCitySelector.vue'

const cityStore = useCityStore()
const params = reactive({
  search: ''
})

const onSelect = (item) => {
  cityStore.closeSelector()
}
</script>

<template>
  <TransitionRoot
    :show="cityStore.selectorOpen"
    as="template"
    @after-leave="params.search = ''"
    appear
  >
    <Dialog as="div" class="relative z-50" @close="cityStore.closeSelector()">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel
            class="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
          >
            <VCitySelector @on-select="onSelect" />
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
