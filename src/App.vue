<script setup>
import VTransitionFade from '@/components/VTransitionFade.vue'
import TheFooter from '@/layouts/TheFooter.vue'
import TheHeader from '@/layouts/TheHeader.vue'
import { RouterView } from 'vue-router'
import VCitySelectorModal from './components/VCitySelectorModal.vue'
import VNotifications from './components/VNotifications.vue'
</script>

<template>
  <TheHeader />
  <RouterView v-slot="{ Component }">
    <VTransitionFade>
      <component :is="Component" class="bg-white shadow-sm flex-grow z-10" />
    </VTransitionFade>
  </RouterView>
  <TheFooter />
  <teleport to="body">
    <VNotifications />
    <VCitySelectorModal />
  </teleport>
</template>
