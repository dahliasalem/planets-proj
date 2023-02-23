<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useRoute } from "vue-router";

const route = useRoute();

function isCurrentRoute(r :string) {
    return r === route.name;
}
</script>

<template>
    <nav class="flex flex-row sm:max-lg:flex-col items-center justify-between border-b border-white border-opacity-20 uppercase">
        <div class="flex font-antonio text-3xl sm:text-4xl p-4">
            The Planets
        </div>
        
        <div class="hidden sm:flex flex-row text-gray text-sm pr-4">
            <router-link class="p-3 block lg:inline-block lg:mt-0  hover:text-white focus:text-white py-8 border-t-4 border-t-light-blue border-opacity-0 hover:border-opacity-100" :class="isCurrentRoute('mercury') ? 'border-opacity-100':''" to="/mercury">Mercury</router-link>
            <router-link class="p-3 block lg:inline-block lg:mt-0  hover:text-white focus:text-white py-8 border-t-4 border-t-yellow border-opacity-0 hover:border-opacity-100" :class="isCurrentRoute('venus') ? 'border-opacity-100':''" to="/venus">Venus</router-link>
            <router-link class="p-3 block lg:inline-block lg:mt-0  hover:text-white focus:text-white py-8 border-t-4 border-t-blue border-opacity-0 hover:border-opacity-100" :class="isCurrentRoute('earth') ? 'border-opacity-100':''" to="/earth">Earth</router-link>
            <router-link class="p-3 block lg:inline-block lg:mt-0  hover:text-white focus:text-white py-8 border-t-4 border-red border-opacity-0 hover:border-opacity-100" :class="isCurrentRoute('mars') ? 'border-opacity-100':''" to="/mars">Mars</router-link>
            <router-link class="p-3 block lg:inline-block lg:mt-0  hover:text-white focus:text-white py-8 border-t-4 border-t-orange border-opacity-0 hover:border-opacity-100" :class="isCurrentRoute('jupiter') ? 'border-opacity-100':''" to="/jupiter">Jupiter</router-link>
            <router-link class="p-3 block lg:inline-block lg:mt-0  hover:text-white focus:text-white py-8 border-t-4 border-t-yellow border-opacity-0 hover:border-opacity-100" :class="isCurrentRoute('saturn') ? 'border-opacity-100':''" to="/saturn">Saturn</router-link>
            <router-link class="p-3 block lg:inline-block lg:mt-0  hover:text-white focus:text-white py-8 border-t-4 border-t-mint border-opacity-0 hover:border-opacity-100" :class="isCurrentRoute('uranus') ? 'border-opacity-100':''" to="/uranus">Uranus</router-link>
            <router-link class="p-3 block lg:inline-block lg:mt-0  hover:text-white focus:text-white py-8 border-t-4 border-t-blue border-opacity-0 hover:border-opacity-100" :class="isCurrentRoute('neptune') ? 'border-opacity-100':''" to="/neptune">Neptune</router-link>
        </div>
        <img src="@/assets/icon-hamburger.svg" class="h-5 w-8 flex sm:hidden pr-4" alt="planet image" />
    </nav>
</template>

<style scoped>

</style>
