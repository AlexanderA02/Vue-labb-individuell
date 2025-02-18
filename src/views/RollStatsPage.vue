<script setup>
import { useRoute } from 'vue-router'

// useRoute() returnerar ett Objekt som representerar url:en. Detta är användbart då jag behöver få tillgång till params:en i url:en för att veta vilken länk som användaren har klickat på.
const route = useRoute()
</script>

<template>
  <h1>Roll your stats here {{ route.params.dndClass }}.</h1>
</template>

<style></style>
