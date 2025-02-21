<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterComp from './components/FooterComp.vue'
import { useDndClassesStore } from '@/pinia-store/store'

const dndClassesStore = useDndClassesStore()

// onMounted gör att getClasses körs när komponenten App.vue monteras i html:n. Detta innebär att dndClasses arrayen kommer hämtas så fort applikation startas.
onMounted(() => {
  dndClassesStore.getClasses()
})
</script>

<template>
  <!-- Header tag:en ligger i Navbar komponenten -->
  <Navbar></Navbar>
  <!-- RouterView representerar en av views(filen) komponenter. Byts ut när url:en ändras (se routs i index.js). -->
  <RouterView />
  <FooterComp></FooterComp>
</template>

<style scoped></style>
