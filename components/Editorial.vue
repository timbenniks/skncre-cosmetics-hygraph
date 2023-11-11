<script setup>
// props
// image
</script>
<template>
  <section
    className="flex flex-col lg:flex-row bg-light justify-between p-8 lg:p-12"
  >
    <div className="flex flex-col items-stretch w-full lg:w-2/4">
      <Cta />
      <Card />
    </div>

    <img
      srcset="
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_672:1106,c_fill,w_672/machathon2022/5.png   672w,
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_672:1106,c_fill,w_872/machathon2022/5.png   872w,
        https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_672:1106,c_fill,w_1072/machathon2022/5.png 1072w
      "
      alt=""
      width="4000"
      height="6016"
      class="w-full lg:w-2/4 mt-8 lg:mt-0 lg:ml-12 object-cover"
    />
  </section>
</template>
