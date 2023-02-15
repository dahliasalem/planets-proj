<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';

const summary = ref('');

onMounted(() => {
    searchWiki();
})

async function searchWiki() {
    let planetName = encodeURIComponent('Mercury_(planet)');
    let endpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/` + planetName;
    const res = await axios.get(endpoint);
    if (res.status != 200) {
        throw Error(res.statusText);
    }
    let first3Sentences = res.data.extract.split(".").slice(0, 4).join(". ").concat(".");
    summary.value = first3Sentences;
}
// lg -> desktop
// md -> laptop, desktop
// sm -> tablets, laptop, desktop
</script>

<template>
    <div class="flex flex-col h-full">
        <div class="flex flex-col lg:flex-row images-and-text h-2/3 sm:h-5/6">
            <div class="planet-space flex lg:w-4/6 justify-center self-center h-1/2 sm:h-2/3 lg:h-fit items-center">
                <img src="@/assets/planet-mercury.svg" class="h-32 w-32" alt="planet image" />
            </div>
            <div class="text-space flex flex-col lg:w-2/6 justify-center mx-10 sm:mx-0">
                <div class="text-and-buttons flex flex-col sm:flex-row lg:flex-col lg:w-3/4">
                    <div class="just-text flex flex-col sm:max-lg:w-1/2 sm:max-lg:pr-8 sm:max-lg:pl-12">
                        <span class="text-4xl lg:text-8xl font-antonio mb-4"> MERCURY </span>
                        <span class="text-base mb-7">
                            {{ summary }}
                        </span>
                        <span class="text-base mb-6">Source: Wiki</span>
                    </div>
                    <div class="buttons-area flex-col uppercase hidden sm:flex sm:max-lg:w-1/2 sm:max-lg:px-12 justify-center">
                        <a class="bg-black text-sm border-white border-opacity-20 border py-3 mb-3">
                            <span class="px-3"> 01 </span>
                            <span> Overview </span>
                        </a>
                        <a class="bg-black text-sm border-white border-opacity-20 border py-3 mb-3">
                            <span class="px-3"> 02 </span>
                            <span> Internal Structure </span>
                        </a>
                        <a class="bg-black text-sm border-white border-opacity-20 border py-3 mb-3">
                            <span class="px-3"> 03 </span>
                            <span> Surface Geology </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="info-section flex flex-col sm:flex-row sm:h-1/6 sm:mx-5 max-w-full sm:items-center">
            <div class="flex flex-row md:flex-col border-white border-opacity-20 border sm:justify-center mx-10 sm:mx-0 items-center px-6 justify-between mb-3 sm:mr-3 md:py-4">
                <span class="uppercase text-sm text-gray"> Rotation Time</span>
                <span class="uppercase text-3xl lg:text-4xl py-2 font-antonio"> 58.6 Days </span>
            </div>
            <div class="flex flex-row md:flex-col border-white border-opacity-20 border sm:justify-center mx-10 sm:mx-0 items-center px-6 justify-between mb-3 sm:mr-3">
                <span class="uppercase text-sm text-gray"> Revolution Time</span>
                <span class="uppercase text-3xl lg:text-4xl py-2 font-antonio"> 58.6 Days </span>
            </div>
            <div class="flex flex-row md:flex-col border-white border-opacity-20 border sm:justify-center mx-10 sm:mx-0 items-center px-6 justify-between mb-3 sm:mr-3">
                <span class="uppercase text-sm text-gray"> Radius</span>
                <span class="uppercase text-3xl lg:text-4xl py-2 font-antonio"> 58.6 Days </span>
            </div>
            <div class="flex flex-row md:flex-col border-white border-opacity-20 border sm:justify-center mx-10 sm:mx-0 items-center px-6 justify-between mb-3 sm:mr-3">
                <span class="uppercase text-sm text-gray"> Average Temp</span>
                <span class="uppercase text-3xl lg:text-4xl py-2 font-antonio"> 58.6 Days </span>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
