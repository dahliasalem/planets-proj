<script setup lang="ts">
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { storeToRefs } from "pinia";

const { earth } = storeToRefs(usePlanetStore());
</script>

<template>
  <Planet
    :planet="earth"
    bg-color="bg-blue"
    wiki-link="https://en.wikipedia.org/wiki/Earth"
    overview-img="planet-earth"
    internal-img="planet-earth-internal"
    rotation-days="0.99"
    rev-time="365.26"
    radius="6,371"
    avg-temp="16"
  ></Planet>
</template>

<style scoped></style>
