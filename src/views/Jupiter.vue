<script setup lang="ts">
import { ref, onMounted } from "vue";
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";

const store = usePlanetStore();
const overviewImage = "/src/assets/planet-jupiter.svg";
const structureImage = "/src/assets/planet-jupiter-internal.svg";
const surfaceImage = "/src/assets/planet-jupiter.svg";
const overview = ref("");
const structure = ref("");
const surface = ref("");
const rotationTime = ref("");
const revolutionTime = ref("");
const radius = ref("");
const averageTemp = ref("");


onMounted(async () => {
  overview.value = await store.fetchPlanetOverview("Jupiter");
  structure.value = await store.fetchPlanetStructure("Jupiter");
  surface.value = await store.fetchPlanetSurface("Jupiter");
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
    bg-color="bg-orange"
  ></Planet>
</template>

<style scoped></style>
