<template>
  <!-- <div class="flex px-6 ml-5 bg-white border rounded-lg shadow-2xl lg:px-5 lg:py- lg:ml-10">
    <img src="/img/d1.jpg" class="w-8 h-8 my-1 -ml-10 rounded-full lg:h-10 lg:w-10 lg:my-3" />

    <div class="flex items-center justify-between border-gray-300 lg:w-full lg:py-2">
      <div class="flex-1 lg:border-b lg:ml-5">
        <form class>
          <input
            class="w-full py-3 pl-2 text-xs text-gray-700 lg:py-4 focus:outline-none"
            type="text"
            placeholder="What's in your mind,Manish? "
          />
        </form>
      </div>

      <div class="hidden lg:flex">
        <button
          class="px-2 py-2 mx-2 text-sm text-white bg-blue-100 rounded-full shadow-lg focus:outline-none hover:bg-gray-200 hover:border-gray-200"
        >
          <ImageIcon class="w-5 h-5 font-thin text-blue-700" />
        </button>
        <button
          class="px-2 py-2 mx-2 text-sm text-white bg-blue-100 rounded-full shadow-lg focus:outline-none hover:bg-gray-200 hover:border-gray-200"
        >
          <TagIcon class="w-5 h-5 font-thin text-blue-700" />
        </button>
        <button
          class="px-2 py-2 mx-2 text-sm text-white bg-blue-100 rounded-full shadow-lg focus:outline-none hover:bg-gray-200 hover:border-gray-200"
        >
          <MapPinIcon class="w-5 h-5 font-thin text-blue-700" />
        </button>
        <button
          class="px-2 py-2 mx-2 text-sm text-white bg-blue-100 rounded-full shadow-lg focus:outline-none hover:bg-gray-200 hover:border-gray-200"
        >
          <MoreHorizontalIcon class="w-5 h-5 font-thin text-blue-700" />
        </button>
      </div>
    </div>
  </div>-->
  <div
    class="mb-5 text-xl font-bold text-center"
  >The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi</div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import {
  MoreHorizontalIcon,
  ImageIcon,
  TagIcon,
  MapPinIcon,
} from 'vue-feather-icons'
export default {
  components: {
    MoreHorizontalIcon,
    ImageIcon,
    TagIcon,
    MapPinIcon,
  },
}
</script>