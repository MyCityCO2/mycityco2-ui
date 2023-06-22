<script setup>
import VTransitionFade from '@/components/VTransitionFade.vue'
import TheFooter from '@/layouts/TheFooter.vue'
import TheHeader from '@/layouts/TheHeader.vue'
import { RouterView } from 'vue-router'
import VCitySelectorModal from './components/VCitySelectorModal.vue'
</script>

<template>
  <TheHeader />
  <div class="bg-white shadow-sm flex-grow z-10">
    <RouterView v-slot="{ Component }">
      <VTransitionFade>
        <component :is="Component" />
      </VTransitionFade>
    </RouterView>
  </div>
  <TheFooter />
  <teleport to="body">
    <VCitySelectorModal />
  </teleport>
</template>
