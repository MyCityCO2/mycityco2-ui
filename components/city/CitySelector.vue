<script setup lang="ts">
import { Combobox, ComboboxInput } from "@headlessui/vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

const emit = defineEmits(["onSelect"]);
const input = ref(null);
const params = reactive({
  search: "",
});

// here watchEffect is used instead of onMounted because the ComboBoxInput render
// later than the VCityselector component causing null value in inputRef
watchEffect(() => {
  if (input.value) {
    input.value.focus();
  }
});
</script>

<template>
  <Combobox :model-value="params.search">
    <div class="relative">
      <MagnifyingGlassIcon
        class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-900 text-opacity-40"
        aria-hidden="true"
      />
      <ComboboxInput as="template">
        <input
          ref="input"
          placeholder="Rechercher une ville..."
          class="h-12 w-full border-0 bg-gray-50 px-11 text-gray-900 focus:ring-0 sm:text-sm"
        />
      </ComboboxInput>
    </div>
  </Combobox>
</template>
