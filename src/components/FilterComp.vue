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
  <section class="flex h-42 flex-col items-center bg-black p-2 text-center text-white">
    <h2 class="m-2 text-2xl font-bold">Filter classes based on difficulty</h2>

    <select
      v-model="difficulty"
      name="difficulty"
      id="difficulty"
      class="m-2 h-50 w-50 rounded-sm border-1 border-amber-400 bg-red-950"
    >
      <option selected value="all">All difficulties</option>
      <option value="hard">Hard</option>
      <option value="medium">Medium</option>
      <option value="easy">Easy</option>
    </select>

    <p class="m-2">Difficulty: {{ difficulty }}</p>
  </section>
</template>
