<script setup>
import { useRoute } from 'vue-router'
import { useDndClassesStore } from '@/pinia-store/store'

// useRoute() returnerar ett Objekt som representerar url:en. Detta är användbart då jag behöver få tillgång till params:en i url:en för att veta vilken länk som användaren har klickat på.
const route = useRoute()
const dndClassesStore = useDndClassesStore()
</script>

<template>
  <h1 v-if="route.params.dndClass">Roll your stats here {{ route.params.dndClass }}.</h1>
  <h1 v-else>Rolle your stats here champion!</h1>
  <ul v-for="dndClass in dndClassesStore.dndClasses">
    <li>{{ dndClass.name }}</li>
  </ul>
</template>

<style></style>
