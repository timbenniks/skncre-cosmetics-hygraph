<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;
const page = await usePage({ slug: slug as string });
useOgtags(page);
</script>

<template>
  <RenderPage :data="page" />
</template>
