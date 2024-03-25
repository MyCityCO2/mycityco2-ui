<script setup lang="ts">
const props = defineProps({
  title: String,
  tooltip: String,
  text: String,
  alt: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="top-padding">
    <div :class="['bg-white py-24 sm:py-32']">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          :class="[
            props.alt
              ? 'flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-32'
              : 'mx-auto max-w-4xl lg:mx-0',
          ]"
        >
          <div>
            <p class="text-base font-semibold leading-7 text-primary">
              {{ props.tooltip }}
            </p>
            <h2 class="mt-2">
              {{ props.title }}
            </h2>
          </div>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {{ props.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
