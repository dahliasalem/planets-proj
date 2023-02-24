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
  ></Planet>
</template>

<style scoped></style>
