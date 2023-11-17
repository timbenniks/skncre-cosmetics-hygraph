<script setup lang="ts">
const page = await usePage({ slug: "home" });
useSeoMeta({
  title: `SCNCRE ${page?.title}`,
  ogTitle: page?.title,
  description: page?.description,
  ogDescription: page?.description,
  ogImage: page?.image.secure_url.replace(
    `v${page?.image.version}`,
    "q_auto,f_auto,w_1280"
  ),
  ogSiteName: "SCNCRE - Hygraph cosmetics demo",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: page?.description,
});
</script>

<template>
  <main class="max-w-screen-2xl mx-auto">
    <GlobalHeader />
    <ComponentList slug="home" type="page" />
    <globalFooter />
  </main>
</template>
