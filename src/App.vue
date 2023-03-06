<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { usePlanetStore } from "./store/planet";
const store = usePlanetStore();

onMounted(async () => {
  await store.fetchPlanetData();
});
</script>

<template>
  <div
    class="stars flex min-h-full w-full flex-col bg-navy bg-cover bg-no-repeat text-base font-bold text-white fade-in"
  >
    <NavBar class="" />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.stars {
  background-image: url("@/assets/background-stars.svg");
}

</style>
