<script setup lang="ts">
import { useRoute, useRouter, RouterLink } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();

function isCurrentRoute(r: string) {
  return r === route.name;
}
function goToMobileMenu() {
  router.push({ name: "menu" });
}
function exit() {
  router.back();
}

const showHamburger = computed(() => {
  if (route.name == "menu") {
    return false;
  }
  return true;
});
</script>

<template>
  <nav
    class="flex flex-row items-center justify-between border-b border-white border-opacity-20 uppercase sm:max-lg:flex-col"
  >
    <div class="flex p-4 font-antonio text-3xl sm:text-4xl">The Planets</div>

    <div class="hidden flex-row pr-4 text-sm text-gray sm:flex">
      <router-link
        class="block border-t-4 border-t-light-blue border-opacity-0 p-3 py-8 hover:border-opacity-100 hover:text-white focus:text-white lg:mt-0 lg:inline-block"
        :class="isCurrentRoute('mercury') ? 'border-opacity-100' : ''"
        to="mercury"
        >Mercury</router-link
      >
      <router-link
        class="block border-t-4 border-t-yellow border-opacity-0 p-3 py-8 hover:border-opacity-100 hover:text-white focus:text-white lg:mt-0 lg:inline-block"
        :class="isCurrentRoute('venus') ? 'border-opacity-100' : ''"
        to="venus"
        >Venus</router-link
      >
      <router-link
        class="block border-t-4 border-t-blue border-opacity-0 p-3 py-8 hover:border-opacity-100 hover:text-white focus:text-white lg:mt-0 lg:inline-block"
        :class="isCurrentRoute('earth') ? 'border-opacity-100' : ''"
        to="earth"
        >Earth</router-link
      >
      <router-link
        class="block border-t-4 border-t-red border-opacity-0 p-3 py-8 hover:border-opacity-100 hover:text-white focus:text-white lg:mt-0 lg:inline-block"
        :class="isCurrentRoute('mars') ? 'border-opacity-100' : ''"
        to="mars"
        >Mars</router-link
      >
      <router-link
        class="block border-t-4 border-t-yellow border-opacity-0 p-3 py-8 hover:border-opacity-100 hover:text-white focus:text-white lg:mt-0 lg:inline-block"
        :class="isCurrentRoute('jupiter') ? 'border-opacity-100' : ''"
        to="jupiter"
        >Jupiter</router-link
      >
      <router-link
        class="block border-t-4 border-t-yellow border-opacity-0 p-3 py-8 hover:border-opacity-100 hover:text-white focus:text-white lg:mt-0 lg:inline-block"
        :class="isCurrentRoute('saturn') ? 'border-opacity-100' : ''"
        to="saturn"
        >Saturn</router-link
      >
      <router-link
        class="block border-t-4 border-t-mint border-opacity-0 p-3 py-8 hover:border-opacity-100 hover:text-white focus:text-white lg:mt-0 lg:inline-block"
        :class="isCurrentRoute('uranus') ? 'border-opacity-100' : ''"
        to="uranus"
        >Uranus</router-link
      >
      <router-link
        class="block border-t-4 border-t-blue border-opacity-0 p-3 py-8 hover:border-opacity-100 hover:text-white focus:text-white lg:mt-0 lg:inline-block"
        :class="isCurrentRoute('neptune') ? 'border-opacity-100' : ''"
        to="neptune"
        >Neptune</router-link
      >
    </div>
    <img
      src="@/assets/icon-hamburger.svg"
      class="flex h-5 w-8 pr-4 sm:hidden"
      :class="showHamburger ? '' : 'hidden'"
      alt="hamburger image"
      @click="goToMobileMenu()"
    />
    <img
      src="@/assets/icon-x.svg"
      class="flex h-5 w-8 pr-4 sm:hidden"
      alt="x image"
      :class="showHamburger ? 'hidden' : ''"
      @click="exit()"
    />
  </nav>
</template>

<style scoped></style>
