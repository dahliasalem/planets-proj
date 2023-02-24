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
  ></Planet>
</template>

<style scoped></style>
