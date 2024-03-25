<script setup lang="ts">
const datasources = [
  {
    name: "Balances comptables des communes",
    definition:
      "Balances des budgets principaux et budgets annexes des communes",
    year: "Depuis 2010 jusqu’à 2021 tous les ans",
    geo: "Par commune pour toute la France",
    vendor: "DGFiP (Direction Générale des Finances Publiques)",
    link: "https://data.economie.gouv.fr/explore/?q=balances+comptables+des+communes&sort=title",
  },
  {
    name: "Facteurs d’émissions monétaires",
    definition:
      "140 facteurs d’émissions par pays couvrant de nombreux secteurs d’activités",
    year: "Depuis 1995 jusqu’à 2020 tous les ans",
    geo: "44 pays dont les pays de l’UE",
    vendor: "Exiobase",
    link: "https://zenodo.org/record/5589597",
  },
]
</script>

<template>
  <div>
    <div class="methodology__section_header">
      <h3>Sources de données</h3>
    </div>
    <div class="flex flex-col methodology__section">
      <div
        class="overflow-hidden shadow rounded sm:rounded-lg max-w-3xl"
        v-for="data in datasources"
        :key="data.name"
      >
        <div class="px-4 py-6 sm:px-6">
          <h3 class="text-base font-semibold leading-7 text-neutral-900">
            {{ data.name }}
          </h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-neutral-500">
            Détails complet de la source de données
          </p>
        </div>
        <div class="border-t border-neutral-100">
          <dl class="divide-y divide-neutral-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-neutral-900">Définition</dt>
              <dd
                class="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0"
              >
                {{ data.definition }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-neutral-900">Année(s)</dt>
              <dd
                class="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0"
              >
                {{ data.year }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-neutral-900">Géographie</dt>
              <dd
                class="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0"
              >
                {{ data.geo }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-neutral-900">Fournisseur</dt>
              <dd
                class="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0"
              >
                {{ data.vendor }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-neutral-900">Lien</dt>
              <dd
                class="mt-1 text-sm leading-6 text-neutral-700 sm:col-span-2 sm:mt-0"
              >
                <a :href="data.link" target="_blank" class="text-link">{{
                  data.link
                }}</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
