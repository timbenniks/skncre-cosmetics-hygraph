<script setup lang="ts">
const props = defineProps(["id", "__typename", "productFocus"]);

// const oversiteHelpers = await usePfHelpers();
// const helpers = oversiteHelpers?.instances.get("home");
// const selector =
//   helpers?.component.parts("ProductHighlight", props.uid) ||
//   ((selector, classes) => {
//     return classes;
//   });

const variant = ref("imageLeft");
const theme = ref("dark");
</script>

<template>
  <div class="text-dark">
    <section class="md:aspect-[1440/722] relative">
      <NuxtImg
        provider="cloudinary"
        :src="productFocus.image.public_id"
        class="md:absolute md:object-cover"
        width="2880"
        height="1446"
      />
      <div
        class="lol p-8 md:p-0 md:max-w-md lg:max-w-2xl md:absolute md:top-24 lg:top-56"
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
          >
            {{ productFocus.title }}</span
          >
        </h2>

        <p
          v-if="productFocus.description"
          class="text-xl ml-8 mb-8"
          v-html="productFocus.description"
        />
        <a
          v-if="productFocus.url"
          class="inline-block cta ml-8"
          :href="productFocus.url"
          >{{ productFocus.cta }}</a
        >
      </div>
    </section>
  </div>
</template>
