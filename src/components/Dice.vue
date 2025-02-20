<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['diceRolled'])

let result = ref(null)
const rollDice = () => {
  result.value = Math.floor(Math.random() * 6) + 1
}

watch(result, (result) => {
  emit('diceRolled', result)
})
</script>

<template>
  <button @click="rollDice">Roll dice {{ result }}</button>
</template>

<style scoped></style>
