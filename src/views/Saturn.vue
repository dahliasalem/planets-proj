<script setup lang="ts">
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { storeToRefs } from "pinia";

const { saturn } = storeToRefs(usePlanetStore());
</script>

<template>
  <Planet
    :planet="saturn"
    bg-color="bg-yellow"
    wiki-link="https://en.wikipedia.org/wiki/Saturn"
    overview-img="planet-saturn"
    internal-img="planet-saturn-internal"
    rotation-days="10.8"
    rev-time="29.46"
    radius="58,232"
    avg-temp="-138"
  ></Planet>
</template>

<style scoped></style>
