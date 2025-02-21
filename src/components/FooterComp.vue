<!-- Component named FooterComp as to not clash with the inbuilt footer tag. -->

<script setup></script>

<template>
  <footer
    class="flex min-h-45 flex-col items-center justify-around bg-red-950 text-white lg:flex-row"
  >
    <section class="m-5 max-w-100">
      <h1 class="text-2xl font-bold">Contact us</h1>
      <p>Telephone: 123 456 78 90</p>
      <p>Adress: coolstreet 42</p>
      <p>
        Any concerns or questions regarding code should be brought to lead software developer
        Alexander who is best reached through Teams, in-person at school or through IT-högskolans
        website.
      </p>
    </section>
    <section class="m-5 max-w-100">
      <h1 class="text-2xl font-bold">About us</h1>
      <p>
        This is a website about Dungeons and Dragons (D&D). Here you can read all about it's variios
        classes and even roll stats for them by clicking on their names, or just roll in general
        becasue it's fun. Any questions about the code may be directed to our lead software
        developer Alexander Ahlström.
      </p>
    </section>
  </footer>
</template>
