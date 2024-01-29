<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
let modeText = isDark.value ? "Light Mode" : "Dark Mode";

const toggleMode = () => {
  toggleDark();
  modeText = isDark.value ? "Light Mode" : "Dark Mode";
};
</script>

<template>
  <button class="btn btn-blue" @click="toggleMode">
    {{ isDark ? "Light Mode" : "Dark Mode" }}
  </button>
</template>

<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
  position: fixed;
  top: 10px;
  right: 20px;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
