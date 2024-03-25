<script setup lang="ts">
import {
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue"

const props = defineProps({
  ask: String,
  text: String,
  modelValue: Boolean,
})

const emit = defineEmits(["update:modelValue"])
</script>

<template>
  <SwitchGroup as="div" class="flex items-center justify-between">
    <span class="flex flex-grow flex-col">
      <SwitchLabel
        as="span"
        class="text-sm font-medium leading-6 text-neutral-900"
        passive
        >{{ props.ask }}</SwitchLabel
      >
      <SwitchDescription as="span" class="text-sm text-neutral-500">{{
        props.text
      }}</SwitchDescription>
    </span>
    <Switch
      :modelValue="props.modelValue"
      @update:modelValue="(newValue) => emit('update:modelValue', newValue)"
      class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <span
        aria-hidden="true"
        class="pointer-events-none absolute h-full w-full rounded-md bg-white"
      />
      <span
        aria-hidden="true"
        :class="[
          props.modelValue == true ? 'bg-primary' : 'bg-neutral-200',
          'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out',
        ]"
      />
      <span
        aria-hidden="true"
        :class="[
          props.modelValue == true ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-neutral-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out',
        ]"
      />
    </Switch>
  </SwitchGroup>
</template>
