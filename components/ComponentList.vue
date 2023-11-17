<script setup lang="ts">
import { getComponentForName } from "./componentMapper";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const page = ref();

if (props.type === "page") {
  page.value = await usePage({ slug: props.slug });
} else {
  page.value = await useProductPage({ slug: props.slug });
}
</script>

<template>
  <section class="mb-12" v-if="page?.components">
    <component
      v-for="component in page?.components"
      :is="getComponentForName(component?.__typename)"
      :key="(component?.id as string)"
      v-bind="component"
    />
  </section>
</template>
