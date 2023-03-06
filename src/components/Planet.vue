<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import type { Planet } from "../model/planet";


const route = useRoute();
const router = useRouter();
const props = withDefaults(
  defineProps<{
    planet: Planet;
    bgColor: string;
    wikiLink: string;
    overviewImg: string;
    internalImg: string;
    rotationDays: string;
    revTime: string;
    radius: string;
    avgTemp: string;
  }>(),
  {}
);

const image = computed(() => {
  let image = props.overviewImg;
  if (route.hash == "#structure") {
    image = props.internalImg;
  }
  const imgUrl = new URL(`/src/assets/${image}.svg`, import.meta.url).href;
  return imgUrl;
})

const displayText = computed(() => {
  if (route.hash == "#structure") {
    return props.planet.info.structure;
  }
  if (route.hash == "#surface") {
    return props.planet.info.surface;
  }
  return props.planet.info.overview;
})

function routeOverview() {
  router.push({ hash: "" });
}

function routeStructure() {
  router.push({ hash: "#structure" });
}

function routeSurface() {
  router.push({ hash: "#surface" });
}

function isSelected(hash: string) {
  if (route.hash == hash) {
    return props.bgColor;
  }
  return "";
}
</script>

<template>
  <div class="flex grow flex-col fade-in">
    <div class="images-and-text flex flex-col lg:grow lg:flex-row">
      <nav
        class="flex flex-row items-center justify-around border-b border-white border-opacity-20 py-3 px-4 uppercase sm:hidden"
      >
        <a
          class="hover:text-white lg:mt-0 lg:inline-block"
          @click="routeOverview()"
        >
          Overview
        </a>
        <a
          class="hover:text-white lg:mt-0 lg:inline-block"
          @click="routeStructure()"
        >
          Structure
        </a>
        <a
          class="hover:text-white lg:mt-0 lg:inline-block"
          @click="routeSurface()"
        >
          Surface
        </a>
      </nav>

      <div
        class="planet-space sm:my-16 flex items-center justify-center self-center sm:h-2/3 lg:w-4/6"
      >
        <div class="mx-auto w-full grow p-24 sm:p-10">
          <img
            :src="image"
            class="z-0 mx-auto sm:max-w-md lg:max-w-xl"
            alt="planet image"
          />
        </div>
      </div>
      <div
        class="text-space mx-10 flex flex-col justify-center sm:mx-0 lg:my-16 lg:w-2/6"
      >
        <div
          class="text-and-buttons flex flex-col sm:flex-row lg:w-3/4 lg:flex-col"
        >
          <div
            class="just-text flex flex-col sm:max-lg:w-1/2 sm:max-lg:pr-8 sm:max-lg:pl-12"
          >
            <span class="mb-4 font-antonio text-4xl uppercase lg:text-8xl">
              {{ route.name }}
            </span>
            <span class="mb-7 text-base fade-in">
              {{ displayText }}
            </span>
            <div class="mb-6 flex flex-row items-center">
              <a
                class="cursor-pointer pr-3 text-base"
                :href="$props.wikiLink"
                target="_blank"
                >Source: Wiki</a
              >
              <img
                src="@/assets/icon-source.svg"
                class="h-3 w-3"
                alt="source icon"
              />
            </div>
          </div>
          <div
            class="buttons-area hidden flex-col justify-center uppercase sm:flex sm:max-lg:w-1/2 sm:max-lg:px-12"
          >
            <a
              class="bg-black mb-3 border border-white border-opacity-20 py-3 text-sm hover:bg-dark-gray"
              @click="routeOverview()"
              :class="isSelected('')"
            >
              <span class="px-3"> 01 </span>
              <span> Overview </span>
            </a>
            <a
              class="bg-black mb-3 border border-white border-opacity-20 py-3 text-sm hover:bg-dark-gray"
              @click="routeStructure()"
              :class="isSelected('#structure')"
            >
              <span class="px-3"> 02 </span>
              <span> Internal Structure </span>
            </a>
            <a
              class="bg-black mb-3 border border-white border-opacity-20 py-3 text-sm"
              @click="routeSurface()"
              :class="isSelected('#surface')"
            >
              <span class="px-3"> 03 </span>
              <span> Surface Geology </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="info-section my-10 mx-5 flex max-w-full flex-col justify-around sm:flex-row sm:items-center"
    >
      <div
        class="mr-2 mb-3 flex flex-row items-center justify-between border border-white border-opacity-20 px-4 py-2 sm:flex-col md:py-4 lg:pr-16"
      >
        <span class="self-center text-sm uppercase text-gray sm:self-start">
          Rotation Time</span
        >
        <span class="font-antonio text-2xl uppercase lg:text-4xl">
          {{ props.rotationDays }} Days
        </span>
      </div>
      <div
        class="mr-2 mb-3 flex flex-row items-center justify-between border border-white border-opacity-20 px-4 py-2 sm:flex-col md:py-4 lg:pr-16"
      >
        <span class="self-center text-sm uppercase text-gray sm:self-start">
          Revolution Time</span
        >
        <span class="font-antonio text-2xl uppercase lg:text-4xl">
          {{ props.revTime }} Days
        </span>
      </div>
      <div
        class="mr-2 mb-3 flex flex-row justify-between border border-white border-opacity-20 px-4 py-2 sm:flex-col md:py-4 lg:pr-16"
      >
        <span class="self-center text-sm uppercase text-gray sm:self-start"
          >Radius</span
        >
        <span class="font-antonio text-2xl uppercase lg:text-4xl">
          {{ props.radius }} KM
        </span>
      </div>
      <div
        class="mr-2 mb-3 flex flex-row items-center justify-between border border-white border-opacity-20 px-4 py-2 sm:flex-col md:py-4 lg:pr-16"
      >
        <span class="self-center text-sm uppercase text-gray sm:self-start">
          Average Temp</span
        >
        <span class="font-antonio text-2xl uppercase lg:text-4xl">
          {{ props.avgTemp }}° C
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
