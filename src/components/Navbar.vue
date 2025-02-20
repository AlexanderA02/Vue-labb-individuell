<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex h-20 items-center justify-between bg-red-950 p-3.5 text-3xl text-white">
    <h1>D&D for beginners</h1>
    <nav class="text-2xl">
      <RouterLink to="/roll-stats"> Roll stats </RouterLink>
    </nav>
  </header>
</template>

<!-- Byt ut mot Tailwind senare -->
<style scoped>
/* header {
  background-color: black;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 2em;
  padding-right: 2em;

  height: 10vh;
} */
</style>
