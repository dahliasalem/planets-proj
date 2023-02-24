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
  ></Planet>
</template>

<style scoped></style>
