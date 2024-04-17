<script setup lang="ts">
import { PaperClipIcon } from "@heroicons/vue/24/outline"
import ShareIconFacebook from "./icon/ShareIconFacebook.vue"
import ShareIconLinkedin from "./icon/ShareIconLinkedin.vue"
import ShareIconMail from "./icon/ShareIconMail.vue"
import ShareIconTwitter from "./icon/ShareIconTwitter.vue"
import ShareIconWhatsapp from "./icon/ShareIconWhatsapp.vue"

const props = defineProps({
  title: String,
  url: String,
})
const { t } = useI18n()
const notifStore = useNotificationStore()
const encodedTitle = computed(() => encodeURIComponent(props.title))
const encodedUrl = computed(() => encodeURIComponent(props.url))
const links = computed(() => {
  return [
    {
      name: "Facebook",
      url: `https://facebook.com/sharer/sharer.php?u=${encodedUrl.value}`,
      component: ShareIconFacebook,
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodedUrl.value}&text=${encodedTitle.value}`,
      component: ShareIconTwitter,
    },
    {
      name: "Linkedin",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl.value}&title=${encodedTitle.value}&summary=${encodedTitle.value}&source=${encodedUrl.value}`,
      component: ShareIconLinkedin,
    },
    {
      name: "Whatsapp",
      url: `https://wa.me/?text=${encodedUrl.value}%20${encodedTitle.value}`,
      component: ShareIconWhatsapp,
    },
    {
      name: "Mail",
      url: `mailto:?subject=${encodedTitle.value}&body=${encodedUrl.value}`,
      component: ShareIconMail,
    },
    {
      name: "Clipboard",
      clickHandler: () => {
        if (props.url) {
          navigator.clipboard.writeText(props.url)
          return notifStore.info({
            title: t("diagnostic.copy_link_title"),
            text: t("diagnostic.copy_link_text"),
          })
        }
        return notifStore.info({
          title: t("error_title"),
          text: "",
        })
      },
      component: PaperClipIcon,
    },
  ]
})
</script>

<template>
  <div class="flex flex-wrap space-x-2">
    <template v-for="link in links" :key="link.name">
      <button
        v-if="link?.clickHandler"
        @click="link.clickHandler"
        class="share-button"
        :aria-label="`Share on ${link.name}`"
      >
        <component :is="link.component" class="h-4 w-4" />
      </button>
      <a
        class="share-button"
        target="_blank"
        rel="noopener"
        :href="link.url"
        :aria-label="`Share on ${link.name}`"
        v-else
      >
        <component :is="link.component" class="h-4 w-4" />
      </a>
    </template>
  </div>
</template>
