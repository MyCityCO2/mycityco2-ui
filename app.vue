<script setup>
// Use SSR-safe IDs for Headless UI
provideHeadlessUseId(() => useId())
</script>

<template>
  <NuxtLoadingIndicator color="#47b9a3" />
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
  <ClientOnly>
    <teleport to="body">
      <AppNotifications />
      <CitySelectorModal />
    </teleport>
  </ClientOnly>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
