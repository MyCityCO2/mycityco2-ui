<script setup>
import VHeader from './components/VHeader.vue'
</script>

<template>
  <div>
    <VHeader @opensidebar="sidebarOpen = true" title="Diagnostic" />

    <div class="mt-10">
      <div>
        <div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h3>Aucune commune sélectionnée !</h3>
            <p class="mt-6 leading-text">
              Veuillez sélectionner votre commune pour continuer. Vous pouvez la trouvez par son nom
              ou son code postal.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <button @click="cityStore.openSelector()" class="button-primary">Sélectionner</button>
              <router-link :to="{ name: 'contact' }" class="link"
                >Demander une commune <span aria-hidden="true">→</span></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
