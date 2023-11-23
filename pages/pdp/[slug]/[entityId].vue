<script setup>
const route = useRoute();
const { slug } = route.params;
const { entityId } = route.params;

const product = await useProduct({ entityId });
</script>

<template>
  <template>
    <RenderPage :slug="slug" type="pdp">
      <ProductDetail :product="product" />
    </RenderPage>
  </template>
</template>
