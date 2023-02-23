<script setup lang="ts">
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { storeToRefs } from "pinia";

const { uranus } = storeToRefs(usePlanetStore());
</script>

<template>
  <Planet :planet="uranus" bg-color="bg-mint"></Planet>
</template>

<style scoped></style>
