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
  ></Planet>
</template>

<style scoped></style>
