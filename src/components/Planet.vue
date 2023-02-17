<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

const summary = ref("");

onMounted(() => {
  searchWiki();
});

async function searchWiki() {
  let planetName = encodeURIComponent("Mercury_(planet)");
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
        <!-- <div class="flex flex-row text-gray text-sm justify-between items-center space-x-4"> -->
        <a class="hover:text-white lg:mt-0 lg:inline-block"> Overview </a>
        <a class="hover:text-white lg:mt-0 lg:inline-block"> Structure </a>
        <a class="hover:text-white lg:mt-0 lg:inline-block"> Surface </a>
        <!-- </div> -->
      </nav>

      <div
        class="planet-space my-auto flex items-center justify-center self-center sm:h-2/3 lg:w-4/6"
      >
        <div class="w-full grow p-24 sm:p-10 mx-auto">
          <img
            src="@/assets/planet-jupiter.svg"
            class="mx-auto"
            alt="planet image"
          />
        </div>
      </div>
      <div
        class="text-space mx-10 my-16 flex flex-col justify-center sm:mx-0 lg:w-2/6"
      >
        <div
          class="text-and-buttons flex flex-col sm:flex-row lg:w-3/4 lg:flex-col"
        >
          <div
            class="just-text flex flex-col sm:max-lg:w-1/2 sm:max-lg:pr-8 sm:max-lg:pl-12"
          >
            <span class="mb-4 font-antonio text-4xl lg:text-8xl">
              MERCURY
            </span>
            <span class="mb-7 text-base">
              {{ summary }}
            </span>
            <div class="mb-6 flex flex-row items-center">
              <span class="pr-3 text-base">Source: Wiki</span>
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
              class="bg-black mb-3 border border-white border-opacity-20 py-3 text-sm"
            >
              <span class="px-3"> 01 </span>
              <span> Overview </span>
            </a>
            <a
              class="bg-black mb-3 border border-white border-opacity-20 py-3 text-sm"
            >
              <span class="px-3"> 02 </span>
              <span> Internal Structure </span>
            </a>
            <a
              class="bg-black mb-3 border border-white border-opacity-20 py-3 text-sm"
            >
              <span class="px-3"> 03 </span>
              <span> Surface Geology </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="info-section my-10 flex max-w-full flex-col justify-around mx-5 sm:flex-row sm:items-center"
    >
      <div
        class="mr-2  flex flex-row items-center justify-between border border-white border-opacity-20 px-4 sm:flex-col py-2 md:py-4 lg:pr-20 mb-3"
      >
        <span class="text-sm uppercase text-gray self-center sm:self-start"> Rotation Time</span>
        <span class="font-antonio text-2xl uppercase lg:text-4xl">
          538.46 Days
        </span>
      </div>
      <div
        class="mr-2  flex flex-row items-center justify-between border border-white border-opacity-20 px-4 sm:flex-col py-2 md:py-4 lg:pr-20 mb-3"
      >
        <span class="text-sm uppercase text-gray self-center sm:self-start"> Revolution Time</span>
        <span class="font-antonio text-2xl uppercase lg:text-4xl">
          538.46 Days
        </span>
      </div>
      <div
        class="mr-2  flex flex-row justify-between border border-white border-opacity-20 px-4 sm:flex-col py-2 md:py-4 lg:pr-20 mb-3"
      >
        <span class="text-sm uppercase text-gray self-center sm:self-start">Radius</span>
        <span class="font-antonio text-2xl uppercase lg:text-4xl">
          538.46 Days
        </span>
      </div>
      <div
        class="mr-2  flex flex-row items-center justify-between border border-white border-opacity-20 px-4 sm:flex-col py-2 md:py-4 lg:pr-20 mb-3"
      >
        <span class="text-sm uppercase text-gray self-center sm:self-start"> Average Temp</span>
        <span class="font-antonio text-2xl uppercase lg:text-4xl">
          538.46 Days
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
