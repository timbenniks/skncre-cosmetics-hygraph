<script setup>
const route = useRoute();
const { slug } = route.params;
const product = await useProductPage({ slug });
</script>

<template>
  <template>
    <RenderPage :data="product">
      <ProductDetail :product="product.product" />
    </RenderPage>
  </template>
</template>
