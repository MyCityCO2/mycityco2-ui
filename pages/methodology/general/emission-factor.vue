<script setup>
const { t, rt, tm } = useI18n()
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>{{ t("methodology.monetary_emission_factors.title") }}</h3>
    </div>
    <div
      v-for="(item, idx) in tm(
        'methodology.monetary_emission_factors.paragraphs'
      )"
      :key="idx"
      class="methodology__section"
    >
      <p
        v-html="
          rt(item, {
            link: `<a href='https://github.com/MyCityCO2/mycityco2-data-processing/blob/main/mycityco2_data_process/data/fr/coa_condition.csv' target='_blank' class='text-link'>${t(
              'this_link'
            )}</a>`,
          })
        "
      />
    </div>
  </div>
</template>
