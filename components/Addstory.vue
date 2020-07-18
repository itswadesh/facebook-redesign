<template>
  <div
    class="relative flex px-6 ml-5 bg-white border rounded-lg shadow-2xl lg:px-5 lg:py- lg:ml-10"
  >
    <img src="/img/d1.jpg" class="absolute w-8 h-8 -ml-10 rounded-full lg:h-10 lg:w-10 lg:my-3" />

    <div class="flex justify-between">
      <div class="py-2">
        <form class="w-full max-w-sm">
          <div class="flex items-center py-2 border-b border-gray-500">
            <input
              class="w-full px-2 py-1 mr-3 text-xs leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
              type="text"
              placeholder="What's in your mind, Manish? "
              aria-label="Full name"
            />
            <button
              class="flex-shrink-0 px-1 py-1 mx-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded-full hover:bg-teal-700 hover:border-teal-700"
            >
              <ImageIcon class="w-4 h-4 text-blue-700" />
            </button>
            <button
              class="flex-shrink-0 px-1 py-1 mx-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded-full hover:bg-teal-700 hover:border-teal-700"
            >
              <TagIcon class="w-4 h-4 text-blue-700" />
            </button>
            <button
              class="flex-shrink-0 px-1 py-1 mx-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded-full hover:bg-teal-700 hover:border-teal-700"
            >
              <MapPinIcon class="w-4 h-4 text-blue-700" />
            </button>
            <button
              class="flex-shrink-0 px-1 py-1 mx-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded-full hover:bg-teal-700 hover:border-teal-700"
            >
              <MoreHorizontalIcon class="w-4 h-4 text-blue-700" />
            </button>
          </div>
        </form>
        <!-- <form class="w-64 max-w-lg ml-4">
          <div class="flex items-center py-2 border-b border-gray-500">
            <input
              class="w-full px-2 mr-3 text-xs leading-tight text-gray-700 bg-transparent border-none"
              type="text"
              placeholder="What's on your mind,Manish?"
              aria-label="Full name"
            />
          </div>
        </form>-->
      </div>
      <!-- <div class="absolute right-0 hidden py-2 text-white justify-right lg:flex"> -->
      <!-- <button class="w-8 h-8 p-2 mx-2 text-black bg-blue-100 rounded-full shadow-xl">
          <ImageIcon class="w-4 h-4 text-blue-700" />
        </button>
        <button class="w-8 h-8 p-2 mx-2 text-black bg-blue-100 rounded-full shadow-xl">
          <TagIcon class="w-4 h-4 text-blue-700" />
        </button>
        <button class="w-8 h-8 p-2 mx-2 text-black bg-blue-100 rounded-full shadow-xl">
          <MapPinIcon class="w-4 h-4 text-blue-700" />
        </button>
        <button class="w-8 h-8 p-2 mx-2 text-black bg-blue-100 rounded-full shadow-xl">
          <MoreHorizontalIcon class="w-4 h-4 text-blue-700" />
      </button>-->
      <!-- </div> -->
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