<script setup>
import FacebookIcon from '@/components/share/FacebookIcon.vue'
import LinkedinIcon from '@/components/share/LinkedinIcon.vue'
import MailIcon from '@/components/share/MailIcon.vue'
import TwitterIcon from '@/components/share/TwitterIcon.vue'
import WhatsappIcon from '@/components/share/WhatsappIcon.vue'
import { useNotificationStore } from '@/stores/notifications'
import { PaperClipIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'

const props = defineProps({
  title: String,
  url: String
})

const notifStore = useNotificationStore()

const encodedTitle = computed(() => encodeURIComponent(props.title))
const encodedUrl = computed(() => encodeURIComponent(props.url))

const links = computed(() => {
  return [
    {
      name: 'Facebook',
      url: `https://facebook.com/sharer/sharer.php?u=${encodedUrl.value}`,
      component: FacebookIcon
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl.value}&text=${encodedTitle.value}`,
      component: TwitterIcon
    },
    {
      name: 'Linkedin',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl.value}&title=${encodedTitle.value}&summary=${encodedTitle.value}&source=${encodedUrl.value}`,
      component: LinkedinIcon
    },
    {
      name: 'Whatsapp',
      url: `https://wa.me/?text=${encodedUrl.value}%20${encodedTitle.value}`,
      component: WhatsappIcon
    },
    {
      name: 'Mail',
      url: `mailto:?subject=${encodedTitle.value}&body=${encodedUrl.value}`,
      component: MailIcon
    },
    {
      name: 'Clipboard',
      clickHandler: () => {
        navigator.clipboard.writeText(`${props.title} ${props.url}`)
        notifStore.info({
          title: 'Lien copié dans le presse papier !',
          text: 'Vous pouvez le partager via CTRL+V.'
        })
      },
      component: PaperClipIcon
    }
  ]
})
</script>

<template>
  <div class="sharing-buttons flex flex-wrap space-x-2">
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
