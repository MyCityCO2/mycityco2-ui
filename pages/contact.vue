<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline"
import { MUTATION_CONTACT } from "~/api/mutation"

const { t } = useI18n()

const notifStore = useNotificationStore()
const {
  mutate: mutateContact,
  onDone,
  onError,
  loading,
} = useMutation(MUTATION_CONTACT)
const { handleSubmit, meta, handleReset } = useForm()

onDone(() => {
  handleReset()
  notifStore.add({
    title: t("contact.success_title"),
    text: t("contact.success_message"),
    type: "success",
  })
})

onError(() => {
  notifStore.add({
    title: t("contact.error_title"),
    text: t("contact.error_message"),
    type: "error",
  })
})

const onSubmit = handleSubmit((values) => {
  mutateContact({ contactData: values })
})
</script>

<template>
  <div class="top-padding">
    <section class="relative isolate">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="relative lg:static">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h3>{{ t("actions.contact_us") }}</h3>
            <p class="mt-6 text-lg leading-8">
              {{ t("contact.contact_us_description") }}
            </p>
            <dl class="mt-10 space-y-4 text-base leading-7 text-neutral-600">
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">{{ t("contact.email_label") }}</span>
                  <EnvelopeIcon
                    class="h-7 w-6 text-neutral-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a href="mailto:contact@mycityco2.org"
                    >contact@mycityco2.org</a
                  >
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form @submit="onSubmit">
          <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <FormInput
                  identifier="firstname"
                  :label="t('contact.first_name_label')"
                  type="text"
                />
              </div>
              <div>
                <FormInput
                  identifier="lastname"
                  :label="t('contact.last_name_label')"
                  type="text"
                />
              </div>
              <div class="sm:col-span-2">
                <FormInput
                  identifier="email"
                  :label="t('contact.email_label')"
                  type="email"
                />
              </div>
              <div class="sm:col-span-2">
                <FormInput
                  identifier="phone"
                  :label="t('contact.phone_label')"
                  type="text"
                  placeholder="+41 00 000 00 00"
                  :required="false"
                />
              </div>
              <div class="sm:col-span-2">
                <FormInput
                  identifier="company"
                  :label="t('contact.company_label')"
                  type="text"
                  :required="false"
                />
              </div>
              <div class="sm:col-span-2">
                <FormInput
                  identifier="subject"
                  :label="t('contact.subject_label')"
                  type="text"
                />
              </div>
              <div class="sm:col-span-2">
                <FormTextarea
                  identifier="message"
                  :label="t('contact.message_label')"
                  :rows="4"
                />
              </div>
            </div>
            <div class="mt-8 flex justify-end">
              <button
                type="submit"
                class="button-primary"
                :disabled="!meta.dirty"
              >
                <template v-if="loading"><LoadingSpin /></template
                ><template v-else>{{ t("contact.send_button") }}</template>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
