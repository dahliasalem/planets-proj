<script setup lang="ts">
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { storeToRefs } from "pinia";

const { uranus } = storeToRefs(usePlanetStore());
</script>

<template>
  <Planet
    :planet="uranus"
    bg-color="bg-mint"
    wiki-link="https://en.wikipedia.org/wiki/Uranus"
    overview-img="planet-uranus"
    internal-img="planet-uranus-internal"
    rotation-days="17.2"
    rev-time="84"
    radius="25,362"
    avg-temp="-195"
  ></Planet>
</template>

<style scoped></style>
