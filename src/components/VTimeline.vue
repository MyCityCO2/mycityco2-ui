<script setup>
const props = defineProps({
  title: String,
  text: String,
  history: Array,
  inverse: {
    type: Boolean,
    default: false
  },
  dashed: {
    type: Boolean,
    default: false
  }
})

const moduloCheck = (idx) => {
  if (props.inverse) return idx % 2 != 0
  return idx % 2 == 0
}
</script>

<template>
  <div class="container mx-auto flex flex-col items-start md:flex-row">
    <div
      :class="[
        'flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 ',
        props.inverse ? 'md:order-2 text-right' : ''
      ]"
    >
      <h3>{{ props.title }}</h3>
      <p class="leading-text mt-4">
        {{ props.text }}
      </p>
    </div>
    <div :class="['lg:w-2/3 sticky', props.inverse ? 'md:order-1 mr-0 md:mr-12' : 'ml-0 md:ml-12']">
      <div class="container mx-auto w-full h-full">
        <div class="relative wrap overflow-hidden px-4 py-8 h-full">
          <div
            :class="[
              'border-primary absolute h-full border rounded-[1%] right-1/2',
              props.dashed ? 'border-dashed' : ''
            ]"
          ></div>
          <!-- <div
            class="border-primary absolute h-full border border-dashed rounded-[1%] left-1/2"
          ></div> -->
          <div
            v-for="(item, idx) in history"
            :key="item"
            :class="[
              'mb-8 flex justify-between items-center w-full',
              moduloCheck(idx) ? 'right-timeline' : ' flex-row-reverse left-timeline'
            ]"
          >
            <div class="order-1 w-5/12"></div>
            <div
              :class="['order-1 w-5/12 px-1 py-4', moduloCheck(idx) ? 'text-left' : 'text-right']"
            >
              <p class="mb-3 text-base text-primary">{{ item.date }}</p>
              <h4 class="mb-1">{{ item.title }}</h4>
              <p>
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
