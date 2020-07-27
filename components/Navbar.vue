<template>
  <div class="flex justify-between w-full px-2 py-1 text-white bg-blue-800 lg:py-0 lg:px-6">
    <div class="my-auto text-sm font-semibold lg:text-2xl lg:my-2">facebook</div>
    <div class="hidden w-full ml-6 md:block md:max-w-xs xl:max-w-sm">
      <form class="relative text-center" novalidate autocomplete="off">
        <div class="absolute top-0 py-5">
          <div class="mx-3">
            <SearchIcon class="w-4 h-4 text-gray-500" />
          </div>
        </div>
        <input
          aria-label="Search Box"
          type="search"
          placeholder="Search"
          class="w-full py-2 pl-10 my-2 bg-blue-900 rounded-full focus:outline-none"
          name="search"
        />
        <div class="absolute top-0 right-0 mx-3 my-5">
          <SlidersIcon class="w-4 h-4 text-gray-500" />
        </div>
      </form>
    </div>
    <div class="flex">
      <div class="justify-around hidden mx-5 my-auto font-light text-white lg:flex">
        <button class="px-4 text-gray-500 focus:outline-none">
          <BellIcon class />
        </button>
        <button class="px-4 text-gray-500 focus:outline-none">
          <SettingsIcon class />
        </button>
        <div class="px-4 text-gray-500 focus:outline-none">
          <CheckCircleIcon />
        </div>
      </div>
      <div class="flex">
        <div class="hidden my-auto text-sm font-normal lg:flex lg:text-base">Manish kumar</div>
        <img src="/img/d1.jpg" class="w-8 h-8 my-auto ml-2 rounded-full lg:h-10 lg:w-auto lg:ml-5" />
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import {
    BellIcon,
  SettingsIcon,
  CheckCircleIcon ,
  SlidersIcon ,
  SearchIcon
 }
from "vue-feather-icons";
export default {
  components: {
   BellIcon,
  SettingsIcon,
  CheckCircleIcon ,
  SlidersIcon,
SearchIcon
   },

};

</script>