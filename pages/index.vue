<script setup lang="ts">
const page = await usePage({ slug: "home" });
useOgtags(page);
</script>

<template>
  <RenderPage slug="home" type="page" />
</template>
