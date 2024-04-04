<script setup>
const { t, rt, tm } = useI18n()
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>{{ t("methodology.emission_posts.title") }}</h3>
    </div>
    <div
      v-for="(item, idx) in tm('methodology.emission_posts.paragraphs')"
      :key="idx"
      class="methodology__section"
    >
      <p
        v-html="
          rt(item, {
            link_1: `<a href='https://github.com/MyCityCO2/mycityco2-data-processing/blob/main/mycityco2_data_process/data/fr/coa_condition.csv' target='_blank' class='text-link'>${t(
              'this_link'
            )}</a>`,
            link_2: `<a href='https://github.com/MyCityCO2/mycityco2-data-processing/blob/main/mycityco2_data_process/data/fr/fr_mapping_immo_exiobase.csv' target='_blank' class='text-link'>${t(
              'this_link'
            )}</a>`,
          })
        "
      />
    </div>
  </div>
</template>
