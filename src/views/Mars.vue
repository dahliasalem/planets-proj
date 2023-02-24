<script setup lang="ts">
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { storeToRefs } from "pinia";

const { mars } = storeToRefs(usePlanetStore());
</script>

<template>
  <Planet
    :planet="mars"
    bg-color="bg-red"
    wiki-link="https://en.wikipedia.org/wiki/Mars"
    overview-img="planet-mars"
    internal-img="planet-mars-internal"
    rotation-days="1.03"
    rev-time="1.88"
    radius="3,389.5"
    avg-temp="-28"
  ></Planet>
</template>

<style scoped></style>
