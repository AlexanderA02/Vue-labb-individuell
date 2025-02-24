<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import NavbarComp from './components/NavbarComp.vue'
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
  <NavbarComp></NavbarComp>
  <!-- RouterView representerar en av views(filen) komponenter. Byts ut när url:en ändras (se routs i index.js). -->
  <RouterView />
  <FooterComp></FooterComp>
</template>

<style scoped></style>
