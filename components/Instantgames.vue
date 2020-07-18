<template>
  <div class="px-2 py-2 mt-4 bg-gray-100 rounded-lg shadow-2xl lg:px-3 lg:mx-5 lg:mt-8">
    <div class="flex justify-between">
      <div class="text-sm font-semibold text-gray-700">Instant Games</div>
      <div class="text-xs font-semibold text-blue-500">
        <a href>See All</a>
      </div>
    </div>
    <div class="flex justify-between pb-2 mt-2 mb-2 border-b">
      <img src="/img/g4.jpg" class="object-cover w-8 h-8 rounded-full shadow-xl" />
      <img src="/img/g2.jpg" class="object-cover w-8 h-8 rounded-full shadow-xl" />
      <img src="/img/g3.jpg" class="object-cover w-8 h-8 rounded-full shadow-xl" />
      <img src="/img/g4.jpg" class="object-cover w-8 h-8 rounded-full shadow-xl" />
      <img src="/img/g5.jpg" class="object-cover w-8 h-8 rounded-full shadow-xl" />
      <div class="w-4 h-4 my-1 mr-3">
        <ChevronRightIcon />
      </div>
    </div>

    <div class="flex justify-between">
      <div class="text-base font-semibold">Contact</div>
      <div class="text-xs font-semibold text-blue-500">
        <a herf>See All</a>
      </div>
    </div>
    <div class="flex justify-between">
      <input class="w-full my-1 mr-3 bg-gray-300 rounded-full focus:outline-none" />
      <div class="my-auto mr-2">
        <SlidersIcon class="w-4 h-4 text-gray-500" />
      </div>
    </div>
    <div class="flex justify-between px-1 py-2 my-1 bg-white rounded-lg">
      <div class="flex">
        <img src="/img/p5.jpg" class="object-cover w-6 h-6 rounded-full" />
        <div class="mx-5 leading-tight">
          <div class="text-xs font-semibold">Anita Cruz</div>
          <div class="text-xs font-semibold text-green-400">online</div>
        </div>
      </div>
      <div class="w-6 h-6 px-1 py-1 mx-1 bg-blue-100 rounded-full">
        <MessageSquareIcon class="w-4 h-4 text-blue-500" />
      </div>
    </div>

    <div class="flex justify-between px-1 py-1 my-1 rounded-lg">
      <div class="flex">
        <img src="/img/p6.jpg" class="object-cover w-6 h-6 rounded-full" />
        <div class="mx-5 leading-tight">
          <div class="text-xs font-semibold">Anita Cruz</div>
          <div class="text-xs font-semibold text-red-600">online</div>
        </div>
      </div>
      <div class="w-6 h-6 px-1 py-1 mx-1 bg-blue-100 rounded-full">
        <MessageSquareIcon class="w-4 h-4 text-blue-500" />
      </div>
    </div>
    <div class="flex justify-between px-1 py-1 my-1 rounded-lg">
      <div class="flex">
        <img src="/img/p7.jpg" class="object-cover w-6 h-6 rounded-full" />
        <div class="mx-5 leading-tight">
          <div class="text-xs font-semibold">Anita Cruz</div>
          <div class="text-xs font-semibold text-red-600">online</div>
        </div>
      </div>
      <div class="w-6 h-6 px-1 py-1 mx-1 bg-blue-100 rounded-full">
        <MessageSquareIcon class="w-4 h-4 text-blue-500" />
      </div>
    </div>
    <div class="flex justify-between px-1 py-1 my-1 rounded-lg">
      <div class="flex">
        <img src="/img/p3.jpg" class="object-cover w-6 h-6 rounded-full" />
        <div class="mx-5 leading-tight">
          <div class="text-xs font-semibold">Anita Cruz</div>
          <div class="text-xs font-semibold text-red-600">online</div>
        </div>
      </div>
      <div class="w-6 h-6 px-1 py-1 mx-1 bg-blue-100 rounded-full">
        <MessageSquareIcon class="w-4 h-4 text-blue-500" />
      </div>
    </div>
  </div>
</template><script>
import Logo from "~/components/Logo.vue";
import {
  
  MessageSquareIcon  ,
  CalendarIcon,
  ChevronRightIcon ,
  SlidersIcon,
 
}
from "vue-feather-icons";
export default {
  components: {
  
  MessageSquareIcon  ,
  CalendarIcon,
  ChevronRightIcon ,
  SlidersIcon,
  },

};

</script>