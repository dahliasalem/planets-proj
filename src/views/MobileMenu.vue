<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

function goTo(name :string){
    router.push({name: name});
}
</script>

<template>
  <div class="flex flex-col justify-center fade-in">
    <div class="flex flex-row items-center justify-between py-8 mx-6 border-b border-white border-opacity-20" @click="goTo(`mercury`)">
        <div class="flex flex-row items-center text-center">
            <span class="h-4 w-4 rounded-full bg-light-blue mr-4"></span>
            <p class="uppercase">Mercury</p>
        </div>
        <img src="@/assets/icon-chevron.svg" class="h-4 w-7 flex pr-4" alt="chevron icon"/>
    </div>
    <div class="flex flex-row items-center justify-between py-8 mx-6 border-b border-white border-opacity-20" @click="goTo(`venus`)">
        <div class="flex flex-row items-center text-center">
            <span class="h-4 w-4 rounded-full bg-orange mr-4"></span>
            <p class="uppercase">Venus</p>
        </div>
        <img src="@/assets/icon-chevron.svg" class="h-4 w-7 flex pr-4" alt="chevron icon"/>
    </div>
    <div class="flex flex-row items-center justify-between py-8 mx-6 border-b border-white border-opacity-20" @click="goTo(`earth`)">
        <div class="flex flex-row items-center text-center">
            <span class="h-4 w-4 rounded-full bg-blue mr-4"></span>
            <p class="uppercase">Earth</p>
        </div>
        <img src="@/assets/icon-chevron.svg" class="h-4 w-7 flex pr-4" alt="chevron icon"/>
    </div>
    <div class="flex flex-row items-center justify-between py-8 mx-6 border-b border-white border-opacity-20" @click="goTo(`mars`)">
        <div class="flex flex-row items-center text-center">
            <span class="h-4 w-4 rounded-full bg-red mr-4"></span>
            <p class="uppercase">Mars</p>
        </div>
        <img src="@/assets/icon-chevron.svg" class="h-4 w-7 flex pr-4" alt="chevron icon"/>
    </div>
    <div class="flex flex-row items-center justify-between py-8 mx-6 border-b border-white border-opacity-20" @click="goTo(`jupiter`)">
        <div class="flex flex-row items-center text-center">
            <span class="h-4 w-4 rounded-full bg-yellow mr-4"></span>
            <p class="uppercase">Jupiter</p>
        </div>
        <img src="@/assets/icon-chevron.svg" class="h-4 w-7 flex pr-4" alt="chevron icon"/>
    </div>
    <div class="flex flex-row items-center justify-between py-8 mx-6 border-b border-white border-opacity-20" @click="goTo(`saturn`)">
        <div class="flex flex-row items-center text-center">
            <span class="h-4 w-4 rounded-full bg-orange mr-4"></span>
            <p class="uppercase">Saturn</p>
        </div>
        <img src="@/assets/icon-chevron.svg" class="h-4 w-7 flex pr-4" alt="chevron icon"/>
    </div>
    <div class="flex flex-row items-center justify-between py-8 mx-6 border-b border-white border-opacity-20" @click="goTo(`uranus`)">
        <div class="flex flex-row items-center text-center">
            <span class="h-4 w-4 rounded-full bg-mint mr-4"></span>
            <p class="uppercase">Uranus</p>
        </div>
        <img src="@/assets/icon-chevron.svg" class="h-4 w-7 flex pr-4" alt="chevron icon"/>
    </div>
    <div class="flex flex-row items-center justify-between py-8 mx-6 border-b border-white border-opacity-20" @click="goTo(`neptune`)">
        <div class="flex flex-row items-center text-center">
            <span class="h-4 w-4 rounded-full bg-blue mr-4"></span>
            <p class="uppercase">Neputune</p>
        </div>
        <img src="@/assets/icon-chevron.svg" class="h-4 w-7 flex pr-4" alt="chevron icon"/>
    </div>
  </div>
</template>

<style scoped></style>
