<script setup lang="ts">
import axios from "axios";
import { ref, onMounted, defineProps, reactive, computed, watch} from "vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
import * as cheerio from 'cheerio';
import { usePlanetStore } from "../store/planet";


const summary = ref("");
const route = useRoute();
const store = usePlanetStore();
const props = withDefaults(
  defineProps<{
    wikiId: string;
  }>(),
  {}
);

watch(route, async (c, o) => {
  console.log("i have changed");
  await searchWiki();
});


const image = computed(() => {
  return `/src/assets/planet-${route.name?.toString()}.svg`;
});

// const text = computed(async() => {
//   if(route.hash == "#structure"){
//     return await store.fetchPlanetStructure(props.wikiId);
//   }
//   if(route.hash == "#surface"){
//     return await store.fetchPlanetSurface(props.wikiId);
//   }
//   return await store.fetchPlanetOverview(props.wikiId);
// });

onMounted(() => {
  searchWiki();
});

async function getStructure() {
  let planetName = encodeURIComponent(props.wikiId);
  let endpoint =
    `https://en.wikipedia.org/api/rest_v1/page/mobile-sections/` + planetName;
  const res = await axios.get(endpoint);
  if (res.status != 200) {
    throw Error(res.statusText);
  }
  let sections = res.data.remaining.sections;
  for (const section of sections) {
    if(section.anchor == "Internal_structure") {
        const $ = cheerio.load(section.text);
        const $p = $('p:first');
        console.log("printing first p");
        console.log($p.text());
        summary.value = $p.text();
    }
  }
}

async function getSurface() {
  let planetName = encodeURIComponent(props.wikiId);
  let endpoint =
    `https://en.wikipedia.org/api/rest_v1/page/mobile-sections/` + planetName;
  const res = await axios.get(endpoint);
  if (res.status != 200) {
    throw Error(res.statusText);
  }
  let sections = res.data.remaining.sections;
  for (const section of sections) {
    if(section.anchor == "Surface_geology") {
        const $ = cheerio.load(section.text);
        const $p = $('p:first');
        console.log("printing first p");
        console.log($p.text());
        summary.value = $p.text();
    }
  }
}


async function searchWiki() {
  console.log("search wiki calledr")
  let planetName = encodeURIComponent(props.wikiId);
  let endpoint =
    `https://en.wikipedia.org/api/rest_v1/page/summary/` + planetName;
  const res = await axios.get(endpoint);
  if (res.status != 200) {
    throw Error(res.statusText);
  }
  let first3Sentences = res.data.extract
    .split(".")
    .slice(0, 4)
    .join(". ")
    .concat(".");
  summary.value = first3Sentences;
}
</script>

<template>
  <div class="flex grow flex-col">
    <div class="images-and-text flex flex-col lg:grow lg:flex-row">
      <nav
        class="flex flex-row items-center justify-around border-b border-white border-opacity-20 py-3 px-4 uppercase sm:hidden"
      >
        <a class="hover:text-white lg:mt-0 lg:inline-block"> Overview </a>
        <a class="hover:text-white lg:mt-0 lg:inline-block"> Structure </a>
        <a class="hover:text-white lg:mt-0 lg:inline-block"> Surface </a>
      </nav>

      <div
        class="planet-space my-auto flex items-center justify-center self-center sm:h-2/3 lg:w-4/6"
      >
        <div class="mx-auto w-full grow p-24 sm:p-10">
          <img :src="image" class="mx-auto sm:max-w-md lg:max-w-xl" alt="planet image" />
        </div>
      </div>
      <div
        class="text-space mx-10 lg:my-16 flex flex-col justify-center sm:mx-0 lg:w-2/6"
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
            <span class="mb-7 text-base">
              {{ summary }}
            </span>
            <div class="mb-6 flex flex-row items-center">
              <span class="cursor-pointer pr-3 text-base">Source: Wiki</span>
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
              class="bg-black mb-3 border border-white border-opacity-20 py-3 text-sm hover:bg-dark-gray focus:bg-light-blue active:bg-light-blue visited:bg-light-blue"
            >
              <span class="px-3"> 01 </span>
              <span> Overview </span>
            </a>
            <a
              class="bg-black mb-3 border border-white border-opacity-20 py-3 text-sm hover:bg-dark-gray"
              @click="getStructure"
            >
              <span class="px-3"> 02 </span>
              <span> Internal Structure </span>
            </a>
            <a
              class="bg-black mb-3 border border-white border-opacity-20 py-3 text-sm hover:bg-dark-gray"
              @click="getSurface"
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
        class="mr-2 mb-3 flex flex-row items-center justify-between border border-white border-opacity-20 px-4 py-2 sm:flex-col md:py-4 lg:pr-20"
      >
        <span class="self-center text-sm uppercase text-gray sm:self-start">
          Rotation Time</span
        >
        <span class="font-antonio text-2xl uppercase lg:text-4xl">
          538.46 Days
        </span>
      </div>
      <div
        class="mr-2 mb-3 flex flex-row items-center justify-between border border-white border-opacity-20 px-4 py-2 sm:flex-col md:py-4 lg:pr-20"
      >
        <span class="self-center text-sm uppercase text-gray sm:self-start">
          Revolution Time</span
        >
        <span class="font-antonio text-2xl uppercase lg:text-4xl">
          538.46 Days
        </span>
      </div>
      <div
        class="mr-2 mb-3 flex flex-row justify-between border border-white border-opacity-20 px-4 py-2 sm:flex-col md:py-4 lg:pr-20"
      >
        <span class="self-center text-sm uppercase text-gray sm:self-start"
          >Radius</span
        >
        <span class="font-antonio text-2xl uppercase lg:text-4xl">
          538.46 Days
        </span>
      </div>
      <div
        class="mr-2 mb-3 flex flex-row items-center justify-between border border-white border-opacity-20 px-4 py-2 sm:flex-col md:py-4 lg:pr-20"
      >
        <span class="self-center text-sm uppercase text-gray sm:self-start">
          Average Temp</span
        >
        <span class="font-antonio text-2xl uppercase lg:text-4xl">
          538.46 Days
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
