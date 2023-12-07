<script setup>
const route = useRoute();
const { slug } = route.params;
const product = await usePage({ slug, type: "pdp" });
</script>

<template>
  <template>
    <RenderPage :data="product">
      <ProductDetail :product="product.product" />
    </RenderPage>
  </template>
</template>
