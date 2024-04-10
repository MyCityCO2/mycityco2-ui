<script setup lang="ts">
import { useField } from "vee-validate"
import { toRefs } from "vue"

const props = defineProps({
  label: String,
  type: String,
  identifier: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
})

const { label, type, identifier, disabled, required, placeholder } =
  toRefs(props)
const isRequired = (value) => {
  if (value) {
    if (type.value != "number" && value.trim()) return true
    return true
  }
  if (type.value == "number" && value == 0) return true
  return "Le champ est requis"
}
const { value, errorMessage } = useField(
  identifier,
  required.value ? isRequired : null
)
</script>

<template>
  <div>
    <label
      :for="identifier"
      class="block text-sm font-semibold leading-6 text-neutral-900 dark:text-white"
      >{{ label }}</label
    >
    <div class="mt-2.5">
      <input
        :id="identifier"
        v-model="value"
        :disabled="disabled"
        :type="type"
        :placeholder="placeholder"
        class="input-primary"
      />
    </div>
    <p class="mt-2 text-sm text-red-600" v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>
