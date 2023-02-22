<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { usePlanetStore } from "./store/planet";
const store = usePlanetStore();

onMounted(async () => {
  await store.fetchPlanetData();
})

</script>

<template>
  <div class="flex flex-col bg-no-repeat bg-cover w-full font-bold stars bg-navy text-white text-base min-h-full">
    <NavBar class=""/>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.stars {
  background-image: url('@/assets/background-stars.svg');
}
</style>


