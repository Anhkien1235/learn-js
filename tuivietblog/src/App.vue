<script setup lang="ts">
import HomePage from "./components/HomePage/HomePage.vue";
</script>

<template >

  <HomePage></HomePage>
</template>

<style>
html.dark{
  color-scheme: dark;
}
body{
  @apply bg-slate-50 text-slate-800 dark:bg-slate-600 dark:text-slate-50
}

</style>
