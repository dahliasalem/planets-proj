<script setup lang="ts">
import { ref, onMounted } from "vue";
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";

const store = usePlanetStore();
const overviewImage = "/src/assets/planet-venus.svg";
const structureImage = "/src/assets/planet-venus-internal.svg";
const surfaceImage = "/src/assets/planet-venus.svg";
const overview = ref("");
const structure = ref("");
const surface = ref("");
const rotationTime = ref("");
const revolutionTime = ref("");
const radius = ref("");
const averageTemp = ref("");


onMounted(async () => {
  overview.value = await store.fetchPlanetOverview("Venus");
  structure.value = await store.fetchPlanetStructure("Venus");
  surface.value = await store.fetchPlanetSurface("Venus");
});
</script>

<template>
  <Planet
    :overview="store.venus.overview"
    :structure="store.venus.structure"
    :surface="store.venus.surface"
    :overview-image="overviewImage"
    :structure-image="structureImage"
    :surface-image="surfaceImage"
    :rotation-time="rotationTime"
    :radius="radius"
    :revolution-time="revolutionTime"
    :average-temp="averageTemp"
    bg-color="bg-yellow"
  ></Planet>
</template>

<style scoped></style>
