<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <AppHeading title="Mentions légales" text="" alt />
    <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-24 space-y-5">
      <p>
        {{ t("pages.legal.intro") }}
      </p>
      <h4>Edition du site</h4>
      <p>
        Le présent site, accessible à l’URL www.mycityco2.org (le « Site »), est
        édité par : Open Net S. à r.l. , société au capital de 100000 CHF,
        inscrite au Registre du commerce du Canton de Vaud sous le numéro
        CH-550.1.020.926-6, dont le siège social est situé au Chemin de la Lande
        1 1008 Prilly, représenté(e) par Jacques-André Eberhard dûment
        habilité(e)
      </p>
      <p>Le numéro individuel TVA de l’éditeur est : CHE-101.430.355 TVA.</p>
      <h4>Hébergement</h4>
      <p>
        Le Site est hébergé par la société Infomaniak, situé Rue Eugène-Marziano
        25, 1227 Genève, Suisse, (contact téléphonique ou email : (+41) 22 820
        35 44).
      </p>
      <h4>Directeur de publication</h4>
      <p>Le Directeur de la publication du Site est Jacques-André Eberhard.</p>
      <h4>Nous contacter</h4>
      <ul class="list-disc pl-6 text-gray-600">
        <li>Par téléphone: +41217014245</li>
        <li>Par email: contact@mycityco2.org</li>
        <li>Par courrier: Rue de Genève 77 1004 Lausanne, Suisse</li>
      </ul>
      <h4>Données personnelles</h4>
      <p>Aucune donnée personnelle n'est stockée.</p>
    </div>
  </div>
</template>
