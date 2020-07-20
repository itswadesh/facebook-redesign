<template>
  <div class="flex px-6 ml-5 bg-white border rounded-lg shadow-2xl lg:px-5 lg:py- lg:ml-10">
    <img
      src="/img/d1.jpg"
      class="absolute w-8 h-8 my-1 -ml-10 rounded-full lg:h-10 lg:w-10 lg:my-2"
    />

    <div class="flex items-center justify-between w-full border-gray-300 lg:py-2">
      <div class="border-b lg:pb-3 lg:ml-5">
        <form class="w-full">
          <input
            class="py-3 pl-2 text-xs leading-tight text-gray-700 bg-transparent appearance-none lg:w-64 lg:py-1 lg:mr-48 focus:outline-none"
            type="text"
            placeholder="What's in your mind,Manish? "
          />
        </form>
      </div>
      <div class="hidden lg:flex">
        <button
          class="flex-shrink-0 px-2 py-2 mx-2 text-sm text-white bg-blue-100 rounded-full focus:outline-none hover:bg-gray-200 hover:border-gray-200"
        >
          <ImageIcon class="w-5 h-5 font-thin text-blue-700" />
        </button>
        <button
          class="flex-shrink-0 px-2 py-2 mx-2 text-sm text-white bg-blue-100 rounded-full focus:outline-none hover:bg-gray-200 hover:border-gray-200"
        >
          <TagIcon class="w-5 h-5 font-thin text-blue-700" />
        </button>
        <button
          class="flex-shrink-0 px-2 py-2 mx-2 text-sm text-white bg-blue-100 rounded-full focus:outline-none hover:bg-gray-200 hover:border-gray-200"
        >
          <MapPinIcon class="w-5 h-5 font-thin text-blue-700" />
        </button>
        <button
          class="flex-shrink-0 px-2 py-2 mx-2 text-sm text-white bg-blue-100 rounded-full focus:outline-none hover:bg-gray-200 hover:border-gray-200"
        >
          <MoreHorizontalIcon class="w-5 h-5 font-thin text-blue-700" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import {
   MoreHorizontalIcon,
  ImageIcon,
  TagIcon ,
  MapPinIcon,
  }
from "vue-feather-icons";
export default {
  components: {
   MoreHorizontalIcon,
  ImageIcon,
  TagIcon ,
  MapPinIcon,
  },

};

</script>