<script setup lang="ts">
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { storeToRefs } from "pinia";

const { neptune } = storeToRefs(usePlanetStore());
</script>

<template>
  <Planet
    :planet="neptune"
    bg-color="bg-blue"
    wiki-link="https://en.wikipedia.org/wiki/Neptune"
    overview-img="planet-neptune"
    internal-img="planet-neptune-internal"
    rotation-days="16.08"
    rev-time="164.79"
    radius="24,622"
    avg-temp="-201"
  ></Planet>
</template>

<style scoped></style>
