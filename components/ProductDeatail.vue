<template>
  <section class="bg-light product-detail pb-12">
    <div class="grid grid-cols-2">
      <img
        src="https://res.cloudinary.com/dwfcofnrd/image/fetch/c_fill,ar_1:1,q_auto,f_auto/https://cdn11.bigcommerce.com/s-52xtt66di6/products/112/images/376/p3__20436.1652881692.1280.1280.jpg?c=1"
        alt="face serum"
        class="aspect-[1/1] object-cover"
      /><img
        src="https://res.cloudinary.com/dwfcofnrd/image/fetch/c_fill,ar_1:1,q_auto,f_auto/https://cdn11.bigcommerce.com/s-52xtt66di6/products/112/images/378/05-2__32005.1652970386.1280.1280.jpg?c=1"
        alt="face serum"
        class="aspect-[1/1] object-cover"
      />
    </div>
    <div class="flex flex-col md:flex-row mx-4 lg:mx-16 mb-12">
      <div class="bg-secondary p-8 md:-mt-12 flex-1 w-full md:w-2/4">
        <h1>
          <span class="block text-primary font-bold font-title text-6xl"
            >your</span
          ><span
            class="block text-dark font-bold font-title text-6xl ml-8 -mt-2"
            >face serum</span
          >
        </h1>
      </div>
      <div class="bg-tertiary p-8 md:-mt-12 w-full md:w-2/4">
        <p class="text-5xl font-bold font-title mb-4">€<!-- -->399</p>
        <a href="/api/addtocart?productId=112" class="cta">add to cart</a>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8 md:mx-16">
      <div class="pr-2">
        <h2 class="text-3xl font-bold font-title mb-4">product description</h2>
        <article>
          <p>
            Indicated for the treatment of wrinkles in the periocular area and
            blemish of the bags; based on snail slime, hyaluronic acid, pre and
            probiotics.
          </p>
          <p>
            Snail slime: Nourishing, regenerating and antioxidant properties. It
            also has film-forming properties such as: proteins,
            mucopolysaccharides, allantoin and glycolic acid; that make the skin
            soft, healthy, hydrated, smooth, smooth, silky; preventing the
            formation of skin spots and the accumulation of impurities.
          </p>
        </article>
      </div>
      <div class="pl-2">
        <h3 class="text-3xl font-bold font-title mb-4">ingredients</h3>
        <article>
          snail slime, benzyl salicylate, hydroxyethylpiperazine ethane sulfonic
          acid, triethanolamine, snail slime, benzyl salicylate,
          hydroxyethylpiperazine ethane sulfonic acid, triethanolamine.
        </article>
      </div>
    </div>
  </section>
</template>
