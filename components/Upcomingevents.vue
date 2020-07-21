<template>
  <div class>
    <div class="p-2 bg-white rounded-lg shadow-2xl lg:p-4 lg:mx-4 lg:my-3">
      <div class="flex justify-between">
        <div class="text-sm font-semibold">Upcoming events</div>
        <div class="text-xs font-semibold text-blue-500">
          <a herf>See All</a>
        </div>
      </div>
      <div>
        <img src="/img/fb-12.jpg" class="object-cover w-full h-32 mt-3 border rounded-lg" />
      </div>
      <div class="flex my-4 text-xs leading-tight">
        <div class="p-1 text-center bg-blue-100 rounded-lg">
          <div class="font-semibold text-blue-700">April</div>
          <div class="font-semibold">25</div>
        </div>
        <div class="mx-3">
          <div class="text-xs font-bold">Celebrity Waiter Event "Hollywood Nights"</div>
          <div class="text-xs text-gray-600">United States of America</div>
        </div>
      </div>
      <div class="flex justify-center mt-5">
        <button
          class="flex px-16 py-2 text-xs text-white bg-blue-800 rounded-lg focus:outline-none hover:bg-blue-700"
        >
          <StarIcon class="items-center w-4 h-4" />
          <div class="mx-2 py-auto">is intrested</div>
        </button>
      </div>
      <div class="text-gray-300">__________________________________________</div>
      <div class="flex justify-around my-2">
        <div>
          <img src="/img/p1.jpg" class="object-cover w-8 h-8 rounded-full" />
        </div>
        <div class="mx-1 leading-tight">
          <div class="flex">
            <div class="text-xs">It.s Ava Wright's birthday today.</div>
            <div class="px-1 text-xs"></div>
            <div class="text-xs"></div>
          </div>
          <div class="text-xs">Help him have a great day!</div>
        </div>
        <div class="flex">
          <div class="w-6 h-6 px-1 py-1 bg-blue-100 rounded-full">
            <CalendarIcon class="w-4 h-4 text-blue-700" />
          </div>
          <div class="w-6 h-6 px-1 py-1 ml-1 bg-blue-100 rounded-full">
            <MessageSquareIcon class="w-4 h-4 text-blue-700" />
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="text-sm font-bold">Friend Requests</div>
        <div class="text-sm font-semibold text-blue-400">
          <a herf>See All</a>
        </div>
      </div>
      <div class="flex my-1">
        <img src="/img/p2.jpg" class="object-cover w-8 h-8 my-auto rounded-full" />
        <div class="ml-2">
          <div class="pr-40 mb-1 text-sm font-semibold">Aliah pitts</div>
          <div class="flex justify-between">
            <button
              class="w-full py-2 text-xs font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-700 focus:outline-none"
            >Confirm</button>
            <button
              class="w-full py-2 ml-2 text-xs font-semibold bg-gray-400 rounded-lg hover:bg-gray-200 focus:outline-none"
            >Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import {
  MessageSquareIcon  ,
  StarIcon,
  CalendarIcon,
  
}
from "vue-feather-icons";
export default {
  components: {
  
  MessageSquareIcon  ,
  StarIcon,
  CalendarIcon,
   },

};

</script>