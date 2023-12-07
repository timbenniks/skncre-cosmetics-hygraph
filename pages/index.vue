<script setup lang="ts">
const page = await usePage({ slug: "home" });
useOgtags(page);
// usePfBodySettings("home", "page", page.id);

// const oversiteHelpers = await usePfHelpers();
// await oversiteHelpers.init("home");
</script>

<template>
  <RenderPage :data="page" />
</template>
