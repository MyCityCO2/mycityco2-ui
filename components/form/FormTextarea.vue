<script setup lang="ts">
import { useField } from "vee-validate"
import { toRefs } from "vue"

const props = defineProps({
  label: String,
  identifier: String,
  rows: Number,
  required: {
    type: Boolean,
    default: true,
  },
})

const { label, identifier, rows, required } = toRefs(props)
const isRequired = (value) => {
  if (value && value.trim()) {
    return true
  }
  return "Le champ est requis"
}
const { value, errorMessage } = useField(
  identifier,
  required.value ? isRequired : null
)
</script>

<template>
  <label
    :for="identifier"
    class="block text-sm font-semibold leading-6 text-neutral-900 dark:text-white"
    >{{ label }}</label
  >
  <div class="mt-2.5">
    <textarea
      :id="identifier"
      v-model="value"
      :rows="rows"
      class="input-primary"
    />
  </div>
  <p class="mt-2 text-sm text-red-600" v-if="errorMessage">
    {{ errorMessage }}
  </p>
</template>
