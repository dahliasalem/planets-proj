<script setup lang="ts">
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { storeToRefs } from "pinia";

const { venus } = storeToRefs(usePlanetStore());
</script>

<template>
  <Planet :planet="venus" bg-color="bg-yellow"></Planet>
</template>

<style scoped></style>
