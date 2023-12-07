<script setup lang="ts">
import { getComponentForName } from "./componentMapper";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const page = ref();

page.value = props.data;

// const oversiteHelpers = await usePfHelpers();
// const helpers = oversiteHelpers?.instances.get("home");
// const part = oversiteHelpers?.section.parts(
//   helpers?.section.parts,
//   "PageSection"
// );

// const pf = {
//   sectionId: 1,
//   title: "PageSection",
// };
</script>

<template>
  <section class="mb-12" v-if="page?.components">
    <component
      v-for="component in page?.components"
      :is="getComponentForName(component?.__typename)"
      :key="(component?.id as string)"
      :uid="`${component?.__typename}-${component?.id as string}`"
      v-bind="component"
    />
  </section>
</template>
