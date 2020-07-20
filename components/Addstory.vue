<template>
  <div class="flex px-6 ml-5 bg-white border rounded-lg shadow-2xl lg:px-5 lg:py- lg:ml-10">
    <img
      src="/img/d1.jpg"
      class="absolute w-8 h-8 my-1 -ml-10 rounded-full lg:h-10 lg:w-10 lg:my-3"
    />

    <div class="flex justify-between">
      <div class="py-2">
        <form class="w-full max-w-sm">
          <div class="flex items-center justify-between border-b border-gray-500 lg:py-2">
            <div>
              <input
                class="w-64 py-1 pl-2 text-xs leading-tight text-gray-700 bg-transparent border-none appearance-none lg:pl-5 lg:mr-64 focus:outline-none"
                type="text"
                placeholder="What's in your mind, Manish? "
                aria-label="Full name"
              />
            </div>
            <div class="hidden lg:flex">
              <button
                class="flex-shrink-0 px-1 py-1 mx-1 text-sm text-white bg-gray-100 border rounded-full focus:outline-none hover:bg-gray-200 hover:border-gray-200"
              >
                <ImageIcon class="w-6 h-6 font-thin text-blue-600" />
              </button>
              <button
                class="flex-shrink-0 px-1 py-1 mx-1 text-sm text-white bg-gray-100 border rounded-full focus:outline-none hover:bg-gray-200 hover:border-gray-200"
              >
                <TagIcon class="w-6 h-6 font-thin text-blue-600" />
              </button>
              <button
                class="flex-shrink-0 px-1 py-1 mx-1 text-sm text-white bg-gray-100 border rounded-full focus:outline-none hover:bg-gray-200 hover:border-gray-200"
              >
                <MapPinIcon class="w-6 h-6 font-thin text-blue-600" />
              </button>
              <button
                class="flex-shrink-0 px-1 py-1 mx-1 text-sm text-white bg-gray-100 border rounded-full focus:outline-none hover:bg-gray-200 hover:border-gray-200"
              >
                <MoreHorizontalIcon class="w-6 h-6 font-thin text-blue-600" />
              </button>
            </div>
          </div>
        </form>
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