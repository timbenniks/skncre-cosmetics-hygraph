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
]);

const productFromBC = await useProductHighlight({
  entityId: props.product[0].id,
});
</script>

<template>
  <section class="md:aspect-[1440/722] relative">
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
          :class="theme === 'light' ? 'text-light' : 'text-dark'"
          >{{ productFromBC.title || title }}</span
        >
      </h2>
      <p
        v-if="description"
        class="text-xl ml-8 mb-8"
        :class="theme === 'light' ? 'text-light' : 'text-dark'"
        v-html="productFromBC.seo.metaDescription || description"
      ></p>
      <a
        v-if="productFromBC.path || url"
        class="inline-block cta ml-8"
        :href="productFromBC.path || url"
        >{{ cta }}</a
      >
    </div>
  </section>
</template>
