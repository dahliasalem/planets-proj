<script setup lang="ts">
import { ref, onMounted, computed} from "vue";
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { SourceNode } from "source-map";

const store = usePlanetStore();
const overview = ref(""); 
const overviewImage = "/src/assets/planet-mercury.svg";
const structureImage = "/src/assets/planet-mercury-internal.svg";
const surfaceImage = "/src/assets/planet-mercury.svg";
const rotationTime = ref("");
const revolutionTime = ref("");
const radius = ref("");
const averageTemp = ref("");
const ready = ref(false);
console.log("mercury creat");
const some = await store.fetchPlanetOverview("Mercury_(planet)");


// async function getOverview() {
//   overview.value = await store.fetchPlanetOverview("Mercury_(planet)");
// }
// getOverview();

// const over = computed(async () => {
//   overview.value = await store.fetchPlanetOverview("Mercury_(planet)");
// });

</script>

<template>
   <Planet
    overview="jkewf"
    :structure="store.mercury.structure"
    :surface="store.mercury.surface"
    overview-image="/src/assets/planet-mercury.svg"
    :structure-image="structureImage"
    :surface-image="surfaceImage"
    :rotation-time="rotationTime"
    :radius="radius"
    :revolution-time="revolutionTime"
    :average-temp="averageTemp"
    bg-color="bg-light-blue"
  ></Planet>
</template>

<style scoped></style>
