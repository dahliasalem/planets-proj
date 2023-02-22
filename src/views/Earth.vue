<script setup lang="ts">
import { ref, onMounted } from "vue";
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";

const store = usePlanetStore();
const overviewImage = "/src/assets/planet-earth.svg";
const structureImage = "/src/assets/planet-earth-internal.svg";
const surfaceImage = "/src/assets/planet-earth.svg";
const overview = ref("");
const structure = ref("");
const surface = ref("");
const rotationTime = ref("");
const revolutionTime = ref("");
const radius = ref("");
const averageTemp = ref("");
const ready = ref(false);

onMounted(async () => {
  overview.value = await store.fetchPlanetOverview("Earth");
  structure.value = await store.fetchPlanetStructure("Earth");
  surface.value = await store.fetchPlanetSurface("Earth");
  ready.value = true;
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
    bg-color="bg-blue"
  ></Planet>
</template>

<style scoped></style>
