<script setup>
const route = useRoute();
const { slug } = route.params;
const { entityId } = route.params;
const product = await useProduct({ entityId });
</script>

<template>
  <main class="max-w-screen-2xl mx-auto">
    <GlobalHeader />

    <ProductDetail :product="product" />
    <ComponentList :slug="slug" type="pdp" />

    <!-- <Tutorial />
    <Routine />
    <ProductList />-->
    <globalFooter />
  </main>
</template>
