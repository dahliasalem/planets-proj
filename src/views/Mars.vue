<script setup lang="ts">
import { ref, onMounted } from "vue";
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";

const store = usePlanetStore();
const overviewImage = "/src/assets/planet-mars.svg";
const structureImage = "/src/assets/planet-mars-internal.svg";
const surfaceImage = "/src/assets/planet-mars.svg";
const overview = ref("");
const structure = ref("");
const surface = ref("");
const rotationTime = ref("");
const revolutionTime = ref("");
const radius = ref("");
const averageTemp = ref("");


onMounted(async () => {
  overview.value = await store.fetchPlanetOverview("Mars");
  structure.value = await store.fetchPlanetStructure("Mars");
  surface.value = await store.fetchPlanetSurface("Mars");
});
</script>

<template>
  <Planet
    :overview="overview"
    :structure="structure"
    :surface="surface"
    :overview-image="overviewImage"
    :structure-image="structureImage"
    :surface-image="surfaceImage"
    :rotation-time="rotationTime"
    :radius="radius"
    :revolution-time="revolutionTime"
    :average-temp="averageTemp"
    bg-color="bg-red"
  ></Planet>
</template>

<style scoped></style>
