<script setup lang="ts">
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { storeToRefs } from "pinia";

const { mercury } = storeToRefs(usePlanetStore());
</script>

<template>
  <Planet
    :planet="mercury"
    bg-color="bg-light-blue"
    wiki-link="https://en.wikipedia.org/wiki/Mercury_(planet)"
    overview-img="planet-mercury"
    internal-img="planet-mercury-internal"
    rotation-days="58.6"
    rev-time="87.97"
    radius="2,439"
    avg-temp="430"
  ></Planet>
</template>

<style scoped></style>
