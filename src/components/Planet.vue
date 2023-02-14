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
    let first4Sentences = res.data.extract.split(".").slice(0, 5).join(". ");
    summary.value = first4Sentences;
}
</script>

<template>
    <div class="flex flex-col h-full">
        <div class="flex flex-row images-and-text h-3/4">
            <div class="flex w-7/12 justify-center self-center">
                <img src="@/assets/planet-mercury.svg" class="h-72 w-72" alt="planet image" />
            </div>
            <div class="flex flex-col w-5/12 p-4 justify-center">
                <span class="text-8xl font-antonio"> MERCURY </span>
                <span class="text-base">
                    {{ summary }}
                </span>
                <span class="text-base">Source: Wiki</span>
                <div class="flex flex-col">
                    <a class="bg-black text-sm border-white border-opacity-20 border uppercase">
                        <span> 01 </span>
                        <span> Overview </span>
                    </a>
                    <a class="bg-black text-sm">Internal Structure</a>
                    <a class="bg-black text-sm">Surface Geology</a>
                </div>
            </div>
        </div>
        <div
            class="info-section flex flex-col md:flex-row h-1/4 md:mx-5 lg:mx-20 max-w-full justify-between items-center">
            <div class="flex flex-row md:flex-col w-64 border-white border-opacity-20 border h-32 justify-center pl-6">
                <span class="uppercase text-sm mb-2 text-gray"> Rotation Time</span>
                <span class="uppercase text-4xl font-antonio"> 58.6 Days </span>
            </div>
            <div class="info-item w-64 border-white border-opacity-20 border h-32">Some some</div>
            <div class="info-item w-64 border-white border-opacity-20 border h-32">Some some</div>
            <div class="info-item w-64 border-white border-opacity-20 border h-32">Some some</div>
            <div class="info-item w-64 border-white border-opacity-20 border h-32">Some some</div>
        </div>
    </div>
</template>

<style scoped>

</style>
