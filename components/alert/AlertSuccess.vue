<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/solid"

const props = defineProps({
  title: String,
  text: String,
})
</script>
<template>
  <AlertBase
    :data="{
      title: props.title,
      text: props.text,
      bgColor: 'bg-green-500/10',
      ringColor: 'ring-green-500/20',
      iconColor: 'text-green-400',
      titleColor: 'text-green-400',
      textColor: 'text-green-400',
      icon: CheckCircleIcon,
    }"
  />
</template>
