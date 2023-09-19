<script setup>
import FacebookIcon from '@/components/share/FacebookIcon.vue'
import LinkedinIcon from '@/components/share/LinkedinIcon.vue'
import MailIcon from '@/components/share/MailIcon.vue'
import TwitterIcon from '@/components/share/TwitterIcon.vue'
import WhatsappIcon from '@/components/share/WhatsappIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  title: String,
  url: String
})

const encodedTitle = computed(() => encodeURIComponent(props.title))
const encodedUrl = computed(() => encodeURIComponent(props.url))
const bothEncoded = computed(
  () => `${encodeURIComponent(props.url)} ${encodeURIComponent(props.title)}`
)

const links = computed(() => {
  return [
    {
      name: 'Facebook',
      url: `https://facebook.com/sharer/sharer.php?u=${encodedUrl.value}`,
      component: FacebookIcon
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl.value}&amp;text=${encodedTitle.value}`,
      component: TwitterIcon
    },
    {
      name: 'Linkedin',
      url: `https://www.linkedin.com/shareArticle?mini=true&amp;url=${encodedUrl.value}&amp;title=${encodedTitle.value}&amp;summary=${encodedTitle.value}&amp;source=https%3A%2F%2Fwww.mycityco2.org`,
      component: LinkedinIcon
    },
    {
      name: 'Whatsapp',
      url: `https://wa.me/?text=${bothEncoded.value}`,
      component: WhatsappIcon
    },
    {
      name: 'Mail',
      url: `mailto:?subject=${encodedTitle.value}&amp;body=${encodedUrl.value}`,
      component: MailIcon
    }
  ]
})
</script>

<template>
  <div class="sharing-buttons flex flex-wrap space-x-2">
    <a
      class="share-button"
      target="_blank"
      rel="noopener"
      :href="link.url"
      :aria-label="`Share on ${link.name}`"
      v-for="link in links"
      :key="link.name"
    >
      <component :is="link.component" class="h-4 w-4" />
    </a>
  </div>
</template>
