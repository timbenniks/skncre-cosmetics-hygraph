<script setup lang="ts">
defineProps(["slug", "type"]);
</script>

<template>
  <main class="max-w-screen-2xl mx-auto">
    <GlobalHeader />
    <slot />
    <ComponentList :slug="slug" :type="type" />
    <globalFooter />
  </main>
</template>
