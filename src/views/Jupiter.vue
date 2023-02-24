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
  ></Planet>
</template>

<style scoped></style>
