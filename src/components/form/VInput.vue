<script setup>
import { useField } from 'vee-validate'
import { toRefs } from 'vue'

const props = defineProps({
  label: String,
  type: String,
  identifier: String,
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  val: {
    type: String,
    default: ''
  }
})

const { label, type, identifier, disabled, required, placeholder, val } = toRefs(props)
const isRequired = (value) => {
  if (value) {
    if (type.value != 'number' && value.trim()) return true
    return true
  }
  if (type.value == 'number' && value == 0) return true
  return 'Le champ est requis'
}
const { value, errorMessage } = useField(identifier, required.value ? isRequired : null)
</script>

<template>
  <div>
    <label :for="identifier" class="block text-sm font-semibold leading-6 text-gray-900">{{
      label
    }}</label>
    <div class="mt-2.5">
      <input
        :id="identifier"
        v-model="value"
        :disabled="disabled"
        :type="type"
        :placeholder="placeholder"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
      />
    </div>
    <p class="mt-2 text-sm text-red-600" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>
