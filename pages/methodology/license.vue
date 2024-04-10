<script setup>
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>{{ t("methodology.usage_license.title") }}</h3>
    </div>
    <div class="methodology__section">
      <div id="content">
        <h4>{{ t("methodology.usage_license.content_title") }}</h4>
        <p class="mt-4">
          {{ t("methodology.usage_license.content_text") }}
        </p>
      </div>
      <div id="data">
        <h4>{{ t("methodology.usage_license.data_title") }}</h4>
        <p class="mt-4">
          {{ t("methodology.usage_license.data_text") }}
        </p>
      </div>
      <div id="source-code">
        <h4>{{ t("methodology.usage_license.source_code_title") }}</h4>
        <p class="mt-4">
          {{ t("methodology.usage_license.source_code_text") }}
          <a
            href="https://github.com/MyCityCO2"
            target="_blank"
            class="text-link"
            >{{ t("here") }}</a
          >.
        </p>
      </div>
      <div id="credit">
        <h4>{{ t("methodology.usage_license.credit_title") }}</h4>
        <p class="mt-4">
          {{ t("methodology.usage_license.credit_text") }}
        </p>
      </div>
    </div>
  </div>
</template>
