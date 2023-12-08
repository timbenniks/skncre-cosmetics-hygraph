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

const { $pf } = useNuxtApp();

function renderPfData(component: any) {
  const pfData = {
    sectionId: component?.id as string,
    componentKey: component?.__typename,
    title: `${component?.__typename} Component`,
    groupId: "PageSection",
    instanceId: `${component?.__typename}-${component?.id as string}`,
    providerId: "hygraph",
    content_model_id:
      page.value.__typename === "Page"
        ? $pf.page_content_model_id
        : $pf.pdp_content_model_id,
    content_view_id:
      page.value.__typename === "Page"
        ? $pf.page_content_view_id
        : $pf.pdp_content_view_id,
    entry_id: page.value.id,
  };

  return JSON.stringify(pfData);
}
</script>

<template>
  <section class="mb-12" v-if="page?.components">
    <component
      v-for="component in page?.components"
      :is="getComponentForName(component?.__typename)"
      :key="(component?.id as string)"
      v-bind="component"
      :data-pf="renderPfData(component)"
    />
  </section>
</template>
