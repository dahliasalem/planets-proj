<script setup lang="ts">
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { storeToRefs } from "pinia";

const { jupiter } = storeToRefs(usePlanetStore());
</script>

<template>
  <Planet
    :planet="jupiter"
    bg-color="bg-yellow"
    wiki-link="https://en.wikipedia.org/wiki/Jupiter"
    overview-img="planet-jupiter"
    internal-img="planet-jupiter-internal"
    rotation-days="9.93"
    rev-time="11.86"
    radius="69,911"
    avg-temp="-108"
  ></Planet>
</template>

<style scoped></style>
