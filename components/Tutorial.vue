<script setup>
const image = ref(`
https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1440:978,c_fill,w_400/machathon2022/serum-tutorial.jpg   400w,
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1440:978,c_fill,w_900/machathon2022/serum-tutorial.jpg   900w,
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1440:978,c_fill,w_1280/machathon2022/serum-tutorial.jpg 1280w
      `);
</script>

<template>
  <section class="relative">
    <img
      :srcset="image"
      alt=""
      width="2880"
      height="1956"
      class="absolute h-full w-full object-cover"
    />
    <div class="max-w-2xl px-12 py-24 md:px-24 md:py-36 relative">
      <h1 class="text-6xl mb-12">How to Apply</h1>
      <ul>
        <li
          class="grid mb-12 items-center"
          style="grid-template-columns: 1fr 5fr"
        >
          <span class="text-6xl font-bold font-title">1.</span
          ><span class="text-md"
            >apply a little of the product to your index finger.</span
          >
        </li>
        <li
          class="grid mb-12 items-center"
          style="grid-template-columns: 1fr 5fr"
        >
          <span class="text-6xl font-bold font-title">2.</span
          ><span class="text-md"
            >apply small amounts to the lower part of the eye.</span
          >
        </li>
        <li
          class="grid mb-12 items-center"
          style="grid-template-columns: 1fr 5fr"
        >
          <span class="text-6xl font-bold font-title">3.</span
          ><span class="text-md"
            >spread the product from the tear duct to the outside following the
            eye contour.</span
          >
        </li>
        <li
          class="grid mb-12 items-center"
          style="grid-template-columns: 1fr 5fr"
        >
          <span class="text-6xl font-bold font-title">4.</span
          ><span class="text-md"
            >to eliminate small wrinkles, work from the outside of the eye to
            the tear duct.</span
          >
        </li>
      </ul>
    </div>
  </section>
</template>
