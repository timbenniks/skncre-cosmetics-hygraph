<script setup>
const image = ref(`
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1440:632,c_fill,w_1000/machathon2022/hero-image.jpg 1000w,
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1440:632,c_fill,w_1280/machathon2022/hero-image.jpg 1280w,
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1440:632,c_fill,w_1440/machathon2022/hero-image.jpg 1440w,
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1440:632,c_fill,w_2880/machathon2022/hero-image.jpg 2880w
      `);
</script>
<template>
  <section class="md:aspect-[1440/632] relative">
    <img
      :srcset="image"
      alt=""
      class="md:absolute"
      width="2880"
      height="1264"
    />
    <div
      class="p-8 md:p-0 md:absolute md:max-w-md lg:max-w-xl md:top-28 md:left-12 lg:top-44 lg:left-56"
    >
      <h1
        class="font-title font-bold text-4xl sm:text-6xl mb-8 xl:text-7xl 2xl:text-8xl"
      >
        rediscover <span class="text-primary">your</span> skin
      </h1>
      <p class="text-xl">
        skncre offers the best of the best, just for your skin.
      </p>
    </div>
  </section>
</template>
