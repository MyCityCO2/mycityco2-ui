<script setup lang="ts"></script>

<template>
  <div class="relative z-0 min-h-screen flex flex-col">
    <AppHeader />
    <div class="shadow-sm flex-grow z-10 py-40 lg:py-56">
      <slot></slot>
    </div>
    <AppFooter />
  </div>
</template>
