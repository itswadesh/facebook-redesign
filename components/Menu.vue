<template>
  <div class="w-full pl-10 mt-5 text-xs bg-white border menu">
    <h1 class="my-6 font-bold">Menu</h1>
    <div></div>
    <button
      class="flex justify-between py-1 pl-1 pr-3 my-2 mr-6 bg-gray-300 rounded-lg hover:bg-gray-400 hover:border-gray-700 focus:outline-none"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 border rounded-full shadow-2xl">
          <BookOpenIcon class="w-4 h-4" />
        </div>
        <div class="my-auto mr-8 font-bold">News</div>
      </div>
      <div class="my-auto mr-3 text-gray-500">
        <MoreHorizontalIcon />
      </div>
    </button>
    <button
      class="flex justify-between flex-shrink-0 py-1 pl-1 pr-3 my-2 mr-6 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
          <MessageSquareIcon class="w-4 h-4" />
        </div>
        <div class="my-auto mr-3">Messages</div>
      </div>
      <div class="w-6 h-6 py-1 font-semibold text-center text-white bg-red-500 rounded-full">7</div>
    </button>
    <button
      class="flex justify-between py-1 pl-1 pr-3 my-2 mr-6 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
          <MonitorIcon class="w-4 h-4" />
        </div>
        <div class="my-auto mr-3">Watch</div>
      </div>
      <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full"></div>
    </button>
    <button
      class="flex justify-between py-1 pl-1 pr-3 my-2 mr-6 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
          <UsersIcon class="w-4 h-4" />
        </div>
        <div class="my-auto mr-3">Group</div>
      </div>
      <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full"></div>
    </button>
    <button
      class="flex justify-between py-1 pl-1 pr-3 my-2 mr-6 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
          <ShoppingBagIcon class="w-4 h-4" />
        </div>
        <div class="my-auto mr-3">Marketplace</div>
      </div>
      <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full"></div>
    </button>
    <button
      class="flex justify-between py-1 pl-1 pr-3 my-2 mr-6 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
          <BookIcon class="w-4 h-4" />
        </div>
        <div class="my-auto mr-3">Pages</div>
      </div>
      <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full"></div>
    </button>
    <button
      class="flex justify-between py-1 pl-1 pr-3 my-2 mr-6 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
          <SmartphoneIcon class="w-4 h-4" />
        </div>
        <div class="my-auto mr-3">Manage apps</div>
      </div>
      <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full"></div>
    </button>
    <button
      class="flex justify-between py-1 pl-1 pr-3 my-2 mr-6 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
          <DownloadIcon class="w-4 h-4" />
        </div>
        <div class="my-auto mr-3">Saved</div>
      </div>
      <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full"></div>
    </button>
    <button
      class="flex justify-between py-1 pl-1 pr-3 my-8 mr-6 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
          <ChevronDownIcon class="w-4 h-4 font-bold text-blue-500" />
        </div>
        <div class="my-auto mr-3 font-semibold text-blue-500">See more...</div>
      </div>
      <div class="px-1 my-auto font-bold text-white bg-red-500 rounded-full"></div>
    </button>

    <button class="absolute bottom-0 flex justify-center mx-4 mb-24 rounded-lg focus:outline-none">
      <div class="flex px-3 py-2 text-white bg-blue-800 rounded-lg">
        <div class="mx-2">Logout</div>
        <div class="mx-2 my-auto">
          <PowerIcon class="w-4 h-4" />
        </div>
      </div>
    </button>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import {
   BookOpenIcon,
  MessageSquareIcon  ,
  MonitorIcon,
  UsersIcon,
  ShoppingBagIcon, 
  BookIcon,
  SmartphoneIcon,
  DownloadIcon,
  ChevronDownIcon,
  PowerIcon,
  MoreHorizontalIcon,
   }
from "vue-feather-icons";
export default {
  components: {
  BookOpenIcon,
  MessageSquareIcon  ,
  MonitorIcon,
  UsersIcon,
  ShoppingBagIcon, 
  BookIcon,
  SmartphoneIcon,
  DownloadIcon,
  ChevronDownIcon,
   PowerIcon,
  MoreHorizontalIcon,
   },

};

</script>