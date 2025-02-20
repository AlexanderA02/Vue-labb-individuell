<script setup>
import { ref } from 'vue'
import DndClassList from '@/components/DndClassList.vue'
import Hero from '@/components/Hero.vue'
import FilterComp from '@/components/FilterComp.vue'

const difficultySelected = ref('all')
</script>

<template>
  <main class="min-h-screen">
    <Hero></Hero>
    <FilterComp
      @difficulty-selected="(difficulty) => (difficultySelected = difficulty)"
    ></FilterComp>
    <DndClassList :difficulty="difficultySelected"></DndClassList>
  </main>
</template>

<style scoped></style>
