<script setup lang="ts">
// defineProps<{
//     msg: string;
// }>();
</script>

<template>
    <nav class="flex flex-row sm:max-lg:flex-col items-center justify-between  p-5 border-b border-white border-opacity-20 uppercase">
        <div class="flex font-antonio text-3xl sm:text-4xl">
            The Planets
        </div>
        
        <div class="hidden sm:flex flex-row text-gray text-sm">
            <a href="#responsive-header" class="p-3 block lg:inline-block lg:mt-0  hover:text-white">
                Mercury
            </a>
            <a href="#responsive-header" class="p-3 block lg:inline-block lg:mt-0  hover:text-white">
                Venus
            </a>
            <a href="#responsive-header" class="p-3 block lg:inline-block lg:mt-0  hover:text-white">
                Earth
            </a>
            <a href="#responsive-header" class="p-3 block lg:inline-block lg:mt-0  hover:text-white">
                Mars
            </a>
            <a href="#responsive-header" class="p-3 block lg:inline-block lg:mt-0  hover:text-white">
                Jupiter
            </a>
            <a href="#responsive-header" class="p-3 block lg:inline-block lg:mt-0  hover:text-white">
                Saturn
            </a>
            <a href="#responsive-header" class="p-3 block lg:inline-block lg:mt-0  hover:text-white">
                Uranus
            </a>
            <a href="#responsive-header" class="p-3 block lg:inline-block lg:mt-0  hover:text-white">
                Neptune
            </a>
        </div>
        <img src="@/assets/icon-hamburger.svg" class="h-5 w-8 flex sm:hidden" alt="planet image" />
    </nav>
</template>

<style scoped>

</style>
