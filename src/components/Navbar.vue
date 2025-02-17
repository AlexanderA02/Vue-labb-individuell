<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section>
    <h1>D&D for beginners</h1>
    <nav>
      <RouterLink to="/roll-stats"> Roll stats </RouterLink>
    </nav>
  </section>
</template>

<!-- Byt ut mot Tailwind senare -->
<style scoped>
section {
  background-color: black;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 2em;
  padding-right: 2em;

  height: 10vh;
}
</style>
