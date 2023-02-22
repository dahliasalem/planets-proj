<script setup lang="ts">
import { ref, onMounted } from "vue";
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";

const store = usePlanetStore();
const overviewImage = "/src/assets/planet-mercury.svg";
const structureImage = "/src/assets/planet-mercury-internal.svg";
const surfaceImage = "/src/assets/planet-mercury.svg";
const overview = ref("");
const structure = ref("");
const surface = ref("");
const rotationTime = ref("");
const revolutionTime = ref("");
const radius = ref("");
const averageTemp = ref("");
const ready = ref(false);
console.log("mercury creat");

onMounted(async() => {
  if(ready.value) return;
  overview.value = await store.fetchPlanetOverview("Mercury_(planet)");
  structure.value = await store.fetchPlanetStructure("Mercury_(planet)");
  surface.value = await store.fetchPlanetSurface("Mercury_(planet)");
  ready.value = true;
});
</script>

<template>
    <Planet
    :overview="overview"
    structure="efreg"
    surface="rgeg"
    overview-image="geg"
    structure-image="greeg"
    surface-image="gregr"
    rotation-time="ge"
    radius="radius"
    revolution-time="revolutionTime"
    average-temp="averageTemp"
    bg-color="bg-light-blue"
  ></Planet>
</template>

<style scoped></style>
