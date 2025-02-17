<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

// Data/variables
const dndClasses = ref(null)

// Methods/functions
const getClasses = () => {
  axios.get('dndClassesDB.json').then((response) => {
    dndClasses.value = response.data
  })
}

// onMounted gör att getClasses körs när componenten HomeView.vue monteras i html:n.
onMounted(getClasses)
</script>

<template>
  <h1>Landing page</h1>
  <ul>
    <li v-for="dndClass in dndClasses">
      {{ dndClass.name }}
    </li>
  </ul>
</template>

<style></style>
