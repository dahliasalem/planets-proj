<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Planet from "./components/Planet.vue";

</script>

<template>
  <div class="flex flex-col bg-no-repeat bg-cover w-full font-bold h-full stars bg-navy text-white text-base">
    <NavBar class="h-24"/>
    <Planet class=""/>
  </div>
</template>

<style scoped>
.stars {
  background-image: url('@/assets/background-stars.svg');
}
</style>


