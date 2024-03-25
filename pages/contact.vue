<script setup>
// import { MUTATION_CONTACT } from '@/api/mutation'
import VSpin from '@/components/transition/VSpin.vue'
import VInput from '@/components/form/VInput.vue'
import VTextarea from '@/components/form/VTextarea.vue'
import { useNotificationStore } from '@/assets/stores/notifications'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
// import { useMutation } from '@vue/apollo-composable'
import { useForm } from 'vee-validate'

const notifStore = useNotificationStore()
// const { mutate: mutateContact, onDone, onError, loading } = useMutation(MUTATION_CONTACT)
const { handleSubmit, meta, handleReset } = useForm()

// onDone(() => {
//   handleReset()
//   notifStore.add({
//     title: 'Succès !',
//     text: 'Le mail a bien été envoyé',
//     type: 'success'
//   })
// })

// onError(() => {
//   notifStore.add({
//     title: 'Erreur !',
//     text: "Une erreur s'est produite lors de l'envoi de mail !",
//     type: 'error'
//   })
// })

// const onSubmit = handleSubmit((values) => {
//   mutateContact({ contactData: values })
// })
</script>

<template>
  <div class="top-padding">
    <section class="relative isolate">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="relative lg:static">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h3>Contactez nous</h3>
            <p class="mt-6 text-lg leading-8">
              Vous souhaitez poser une question, faire un commentaire, donner votre avis, nous
              signaler un problème technique ou autre ? Contactez-nous en complétant ce formulaire
            </p>
            <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
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
        <form @submit="onSubmit">
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
                <VInput identifier="company" label="Société" type="text" :required="false" />
              </div>
              <div class="sm:col-span-2">
                <VInput identifier="subject" label="Sujet" type="text" />
              </div>
              <div class="sm:col-span-2">
                <VTextarea identifier="message" label="Message" :rows="4" />
              </div>
            </div>
            <div class="mt-8 flex justify-end">
            <!-- TODO: Add the button with apollo -->
              <!-- <button type="submit" class="button-primary" :disabled="!meta.dirty">
                <template v-if="loading"><VSpin /></template><template v-else>Envoyer</template>
              </button> -->
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>