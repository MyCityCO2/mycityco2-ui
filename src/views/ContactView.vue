<script setup>
import VInput from '@/components/form/VInput.vue'
import VTextarea from '@/components/form/VTextarea.vue'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div>
    <!-- <VHeading
      title="Contact"
      tooltip="let's disscuss"
      text="Remplissez le formulaire ci dessous ou utiliser l'une des informations de contact pour engager une disscution avec nos spécialistes"
    /> -->
    <div class="relative isolate">
      <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h3>Contactez nous</h3>
            <p class="mt-6 text-lg leading-8">
              Vous souhaitez poser une question, faire un commentaire, donner votre avis, nous
              signaler un problème technique ou autre ? Contactez-nous en complétant ce formulaire
            </p>
            <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <!-- <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Addresse</span>
                  <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>Rue de Genève 77<br />1004 Lausanne</dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Téléphone</span>
                  <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a href="tel:+41 21 701 42 45">+41 21 701 42 45</a>
                </dd>
              </div> -->
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Email</span>
                  <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a href="mailto:contact@mycityco2.org">contact@mycityco2.org</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <VInput identifier="firstname" label="Prénom" type="text" />
              </div>
              <div>
                <VInput identifier="lastname" label="Nom" type="text" />
              </div>
              <div class="sm:col-span-2">
                <VInput identifier="email" label="Email" type="email" />
              </div>
              <div class="sm:col-span-2">
                <VInput
                  identifier="phone"
                  label="Numéro de téléphone"
                  type="text"
                  placeholder="+41 00 000 00 00"
                  :required="false"
                />
              </div>
              <div class="sm:col-span-2">
                <VInput identifier="company" label="Société" type="text" />
              </div>
              <div class="sm:col-span-2">
                <VInput identifier="subject" label="Sujet" type="text" />
              </div>
              <div class="sm:col-span-2">
                <VTextarea identifier="message" label="Message" :rows="4" />
              </div>
            </div>
            <div class="mt-8 flex justify-end">
              <button type="submit" class="button-primary">Envoyer</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
