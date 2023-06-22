<script setup>
import VTransitionFade from '@/components/VTransitionFade.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterView v-slot="{ Component }">
      <VTransitionFade>
        <component :is="Component" />
      </VTransitionFade>
    </RouterView>
  </div>
</template>
