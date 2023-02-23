<script setup lang="ts">
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { storeToRefs } from "pinia";

const { neptune } = storeToRefs(usePlanetStore());
</script>

<template>
  <Planet :planet="neptune" bg-color="bg-blue"></Planet>
</template>

<style scoped></style>
