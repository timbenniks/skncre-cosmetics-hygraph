<script setup>
const props = defineProps([
  "title",
  "description",
  "image",
  "theme",
  "variant",
  "url",
  "cta",
  "product",
  "uid",
]);

// const productFromBC = await useProductHighlight({
//   entityId: props.product[0].id,
// });

const oversiteHelpers = await usePfHelpers();
const helpers = oversiteHelpers?.instances.get("home");
const selector =
  helpers?.component.parts("ProductHighlight", props.uid) ||
  ((selector, classes) => {
    return classes;
  });

const pf = {
  componentKey: "ProductHighlight",
  title: "Product Highlight",
  groupId: "PageSection",
  instanceId: props.uid,
  providerId: "hygraph",
};
</script>

<template>
  <section class="md:aspect-[1440/722] relative" :data-pf="JSON.stringify(pf)">
    <NuxtImg
      provider="cloudinary"
      :src="image.public_id"
      class="md:absolute md:object-cover"
      width="2880"
      height="1446"
    />
    <div
      class="p-8 md:p-0 md:max-w-md lg:max-w-2xl md:absolute md:top-24 lg:top-56"
      :class="
        variant === 'imageLeft'
          ? 'md:right-16 lg:right-44'
          : 'md:left-16 lg:left-44'
      "
    >
      <h2 class="mb-8">
        <span
          class="block text-primary font-bold font-title text-4xl md:text-6xl"
          >your</span
        ><span
          class="font-bold font-title text-3xl sm:text-4xl md:text-6xl sm:ml-8 sm:-mt-2 block"
          :class="selector('self', 'text-dark')"
        >
          <!-- :class="theme === 'light' ? 'text-light' : 'text-dark'" -->
          {{ title }}</span
        >
      </h2>
      <!-- :class="theme === 'light' ? 'text-light' : 'text-dark'" -->

      <p
        v-if="description"
        class="text-xl ml-8 mb-8"
        :class="selector('self', 'text-dark')"
        v-html="description"
      />
      <a v-if="url" class="inline-block cta ml-8" :href="url">{{ cta }}</a>
    </div>
  </section>
</template>
