<!-- Component named FooterComp as to not clash with the inbuilt footer tag. -->

<script setup></script>

<template>
  <footer>
    <section>
      <h1>Contact us</h1>
    </section>
    <section>
      <h1>About us</h1>
    </section>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-around;

  background-color: darkred;
  color: white;

  height: 20vh;
}
</style>
