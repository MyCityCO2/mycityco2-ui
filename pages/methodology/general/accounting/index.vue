<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>{{ t("methodology.accounting.intro") }}</h3>
    </div>
    <div class="methodology__section">
      <p>
        {{ t("methodology.accounting.description") }}
      </p>
    </div>
  </div>
</template>
