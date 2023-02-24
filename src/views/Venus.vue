<script setup lang="ts">
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { storeToRefs } from "pinia";

const { venus } = storeToRefs(usePlanetStore());
</script>

<template>
  <Planet
    :planet="venus"
    bg-color="bg-yellow"
    wiki-link="https://en.wikipedia.org/wiki/Venus"
    overview-img="planet-venus"
    internal-img="planet-venus-internal"
    rotation-days="243"
    rev-time="224.7"
    radius="6,051"
    avg-temp="471"
  ></Planet>
</template>

<style scoped></style>
