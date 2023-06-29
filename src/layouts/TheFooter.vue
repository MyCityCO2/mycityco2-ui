<template>
  <footer class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div>
        <RouterLink
          :to="{ name: 'legal' }"
          class="text-sm leading-6 text-gray-600 hover:text-primary transition-all"
          >Mentions légales</RouterLink
        >
      </div>
      <div class="mt-8 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-500">
          &copy; 2023 MyCityCo2 a free and open source tool.
        </p>
      </div>
    </div>
  </footer>
</template>
