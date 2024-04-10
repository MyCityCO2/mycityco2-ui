<script setup lang="ts">
const props = defineProps({
  start: Number,
  intervalMs: {
    type: Number,
    default: 1000,
  },
})

const progressValue = ref(props.start)

const progressBarStyle = ref(`width: ${progressValue.value}%;`)

watchEffect(() => {
  progressBarStyle.value = `width: ${progressValue.value}%;`
})

const updateProgressBar = () => {
  const interval = setInterval(() => {
    if (progressValue.value >= 100) {
      clearInterval(interval)
    } else {
      progressValue.value += 0.01
      progressValue.value = Math.round(progressValue.value * 100) / 100 // Arrondir à deux décimales
    }
  }, props.intervalMs) // Toutes les secondes
}

updateProgressBar()
</script>

<template>
  <div class="w-full bg-neutral-200 rounded-full">
    <div
      class="bg-primary text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
      :style="progressBarStyle"
    >
      {{ progressValue.toFixed(2) }}%
    </div>
  </div>
</template>
