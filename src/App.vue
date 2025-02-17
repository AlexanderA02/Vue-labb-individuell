<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar></Navbar>
  <!-- RouterView representerar en av views komponenter. Byts ut när url:en ändras (se routs i index.js). -->
  <RouterView />
</template>

<style scoped></style>
