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
  let id = component.id as string;
  let type = component.__typename;
  let content_model_id =
    page.value.__typename === "Page"
      ? $pf.page_content_model_id
      : $pf.pdp_content_model_id;
  let content_view_id =
    page.value.__typename === "Page"
      ? $pf.page_content_view_id
      : $pf.pdp_content_view_id;
  let entryId = page.value.id;

  if (component.productFocus) {
    id = component.productFocus.id as string;
    type = component.productFocus.__typename;
    content_model_id = "0f2b6f20d23d45c58222985ff6fab5a4";
    content_view_id = "d5ff2aaf3c394461b61cddb521767985";
    entryId = component.productFocus.id;
  }

  const pfData = {
    // sectionId: id as string,
    componentKey: type,
    title: `${type} Component`,
    groupId: "PageSection",
    instanceId: `${type}-${id as string}`,
    providerId: "hygraph",
    content_model_id,
    content_view_id,
    entry_id: entryId,
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
