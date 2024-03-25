<template>
  <div>
    <section>
      <div class="top-padding grid min-h-full place-items-center">
        <div class="text-center">
          <span class="tooltip">404</span>
          <h2 class="mt-4">Page introuvable</h2>
          <p class="mt-6 leading">
            Désolé, nous n'avons pas trouvé la page que vous recherchez.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink :to="{ name: 'index' }" class="button-primary"
              >Retourner a l'accueil</NuxtLink
            >
            <NuxtLink
              :to="{ name: 'contact' }"
              class="text-sm font-semibold text-gray-900"
              >Contactez-nous <span aria-hidden="true">&rarr;</span></NuxtLink
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
