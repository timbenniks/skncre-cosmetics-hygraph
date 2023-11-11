<script setup>
const image = ref(`
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1440:722,c_fill,w_1280/machathon2022/img.jpg 1280w,
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1440:722,c_fill,w_1440/machathon2022/img.jpg 1440w,
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1440:722,c_fill,w_1600/machathon2022/img.jpg 1600w
      `);
</script>

<template>
  <section class="md:aspect-[1440/722] relative">
    <img
      :srcset="image"
      alt=""
      width="2880"
      height="1446"
      class="md:absolute md:object-cover"
    />
    <div
      class="p-8 md:p-0 md:max-w-md lg:max-w-2xl md:absolute md:top-24 lg:top-56 md:right-16 lg:right-44"
    >
      <h2 class="mb-8">
        <span
          class="block text-primary font-bold font-title text-4xl md:text-6xl"
          >your</span
        ><span
          class="text-dark font-bold font-title text-3xl sm:text-4xl md:text-6xl sm:ml-8 sm:-mt-2 block"
          >face serum</span
        >
      </h2>
      <p class="text-dark text-xl ml-8 mb-8">
        this calming serum revitalizes the skin like never before.
      </p>
      <a class="inline-block cta ml-8" href="/pdp/face-serum"
        >shop this product</a
      >
    </div>
  </section>
</template>
