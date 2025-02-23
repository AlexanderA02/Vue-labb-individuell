<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['diceRolled'])

let result = ref(null)
// Dnd stats skapas genom att rulla 3 d6:or, där totalsumman blir stat:en, med ett min värde på 3 och maxvärde på 18.
const rollDice = () => {
  result.value =
    Math.floor(Math.random() * 6) +
    1 +
    (Math.floor(Math.random() * 6) + 1) +
    (Math.floor(Math.random() * 6) + 1)
}

watch(result, (result) => {
  emit('diceRolled', result)
})
</script>

<template>
  <button
    @click="rollDice"
    class="h-16 w-16 rounded-md border-2 border-amber-400 bg-red-950 text-2xl font-semibold text-white"
  >
    {{ result }}
  </button>
</template>
