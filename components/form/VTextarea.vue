<script setup>
import { useField } from 'vee-validate'
import { toRefs } from 'vue'

const props = defineProps({
  label: String,
  identifier: String,
  rows: Number,
  required: {
    type: Boolean,
    default: true
  }
})

const { label, identifier, rows, required } = toRefs(props)
const isRequired = (value) => {
  if (value && value.trim()) {
    return true
  }
  return 'Le champ est requis'
}
const { value, errorMessage } = useField(identifier, required.value ? isRequired : null)
</script>

<template>
  <label :for="identifier" class="block text-sm font-semibold leading-6 text-gray-900">{{
    label
  }}</label>
  <div class="mt-2.5">
    <textarea
      :id="identifier"
      v-model="value"
      :rows="rows"
      class="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 bg-gray-50 ring-1 ring-inset ring-black ring-opacity-5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
    />
  </div>
  <p class="mt-2 text-sm text-red-600" v-if="errorMessage">{{ errorMessage }}</p>
</template>