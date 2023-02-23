<script setup lang="ts">
import Planet from "@/components/Planet.vue";
import { usePlanetStore } from "@/store/planet";
import { storeToRefs } from "pinia";

const { mercury } = storeToRefs(usePlanetStore());
</script>

<template>
  <Planet :planet="mercury" bg-color="bg-light-blue"></Planet>
</template>

<style scoped></style>
