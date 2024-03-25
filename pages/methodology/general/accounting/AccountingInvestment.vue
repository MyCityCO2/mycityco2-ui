<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const accountClasses = [
  'Comptes 20 – Immobilisations incorporelles : par exemple les comptes 203* concernant les frais d’études.',
  'Comptes 21 – Immobilisations corporelles : par exemple les comptes 213* concernant les constructions mais aussi par exemple le compte 2151 qui concerne l’installation de réseaux de voirie.'
]
</script>
<template>
  <div>
    <div class="methodology__section_header">
      <h3>Investissement</h3>
    </div>
    <div class="methodology__section">
      <p>
        Les opérations d'investissement font référence aux dépenses engagées pour acquérir des
        actifs durables ou pour améliorer ceux déjà détenus par l'entité publique. Cela peut inclure
        l'achat de terrains, de bâtiments, d'équipements, la construction d'infrastructures
        publiques, etc. Les opérations d'investissement sont à plus long terme et visent
        généralement à renforcer ou à développer le patrimoine de la collectivité publique.
      </p>
      <div>
        <p>
          Afin de calculer l’empreinte carbone de la collectivité MyCityCO2 sélectionne les dépenses
          d’investissement uniquement et pas les recettes. Parmi les comptes de charges:
        </p>
        <ul role="list" class="mt-2 space-y-2">
          <li class="flex gap-x-3" v-for="(item, idx) in accountClasses" :key="idx">
            <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
            <span
              ><strong class="font-semibold text-gray-900">Classe {{ idx + 1 }} : </strong
              >{{ item }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>