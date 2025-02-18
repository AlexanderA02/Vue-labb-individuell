<script setup>
import { ref } from 'vue'
import DndClassList from '@/components/DndClassList.vue'
import Hero from '@/components/Hero.vue'

// Data/variables
// ref() ska enbart skrivas på variabler som ska autouppdateras i html:n.
const difficulty = ref('all')
</script>

<template>
  <main>
    <h1>Landing page</h1>
    <Hero></Hero>

    <select v-model="difficulty" name="difficulty" id="difficulty">
      <option selected value="all">All difficulties</option>
      <option value="hard">Hard</option>
      <option value="medium">Medium</option>
      <option value="easy">Easy</option>
    </select>
    <p>Difficulty:{{ difficulty }}</p>

    <DndClassList :difficulty="difficulty"></DndClassList>
  </main>
</template>

<style scoped></style>
