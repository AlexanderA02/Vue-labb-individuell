<script setup>
import { ref, watch } from 'vue'

// Data/variables
// ref() ska enbart skrivas på variabler som ska autouppdateras i html:n.
const difficulty = ref('all')
const emit = defineEmits(['difficulty-selected'])

watch(difficulty, (difficulty) => {
  emit('difficulty-selected', difficulty)
})
</script>

<template>
  <section class="bg-black text-white h-40 flex items-center flex-col p-3">
    <h2 class="text-2xl font-bold m-2">Filter classes based on difficulty</h2>

    <select
      v-model="difficulty"
      name="difficulty"
      id="difficulty"
      class="bg-red-950 h-50 w-50 m-2 rounded-sm"
    >
      <option selected value="all">All difficulties</option>
      <option value="hard">Hard</option>
      <option value="medium">Medium</option>
      <option value="easy">Easy</option>
    </select>

    <p class="m-2">Difficulty: {{ difficulty }}</p>
  </section>
</template>

<style scoped></style>
