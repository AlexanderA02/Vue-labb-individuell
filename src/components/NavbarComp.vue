<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header
    class="flex h-20 items-center justify-center bg-red-950 p-3.5 text-3xl text-white md:justify-between"
  >
    <h1 class="hidden md:inline">D&D for beginners</h1>
    <nav class="text-2xl">
      <RouterLink to="/roll-stats" class="mx-4 hover:underline">Roll stats</RouterLink>
      <RouterLink to="/" class="mx-4 hover:underline">Home</RouterLink>
    </nav>
  </header>
</template>
