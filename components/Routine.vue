<script setup>
const image = ref(`
https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_805:535,c_fill,w_400/machathon2022/3.png   400w,
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_805:535,c_fill,w_900/machathon2022/3.png   900w,
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_805:535,c_fill,w_1280/machathon2022/3.png 1280w
      `);
</script>

<template>
  <section class="py-16 relative bg-light">
    <img class="lg:w-2/4" :srcset="image" alt="" width="5810" height="3863" />
    <div
      class="w-full bg-tertiary p-8 lg:max-w-2xl lg:absolute top-32 right-32"
    >
      <h2 class="mb-8 font-title">
        <span class="block text-primary font-bold text-4xl lg:text-6xl"
          >your</span
        ><span class="block text-dark font-bold text-4xl lg:text-6xl ml-8 -mt-2"
          >beauty routine</span
        >
      </h2>
      <p class="text-xl ml-8 mb-8">
        containing face cream, serum and eye contour; ideal for an excellent
        beauty routine.
      </p>
      <a href="/pdp/face-serum" class="inline-block cta ml-8"
        >shop the full range</a
      >
    </div>
  </section>
</template>
