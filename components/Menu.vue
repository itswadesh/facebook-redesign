<template>
  <div class="w-full mt-5 text-xs border menu">
    <div class="px-8 py-3 mx-2 bg-white rounded-lg">
      <h1 class="my-6 font-bold">Menu</h1>
      <button
        class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
      >
        <div class="flex">
          <div class="p-1 my-auto mr-2 bg-blue-100 border rounded-full shadow-2xl">
            <BookOpenIcon class="w-4 h-4" />
          </div>
          <div class="my-auto mr-8">Photo Gallery</div>
        </div>
      </button>
      <button
        class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
      >
        <div class="flex">
          <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
            <MessageSquareIcon class="w-4 h-4" />
          </div>
          <div class="my-auto mr-3">Downloads</div>
        </div>
        <div class="font-semibold text-white rounded-full"></div>
      </button>
      <button
        class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
      >
        <div class="flex">
          <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
            <MonitorIcon class="w-4 h-4" />
          </div>
          <div class="my-auto mr-3">HR Circulars</div>
        </div>
        <div class="my-auto font-semibold text-white rounded-full"></div>
      </button>
      <button
        class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
      >
        <div class="flex">
          <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
            <UsersIcon class="w-4 h-4" />
          </div>
          <div class="my-auto mr-3">Registration</div>
        </div>
        <div class="my-auto font-semibold text-white rounded-full"></div>
      </button>
      <button
        class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
      >
        <div class="flex">
          <div class="p-1 my-auto mr-2 rotate-45 bg-blue-100 rounded-full shadow-2xl">
            <ShoppingBagIcon class="w-4 h-4" />
          </div>
          <div class="my-auto mr-3">Punch Line</div>
        </div>
        <div class="my-auto font-semibold text-white rounded-full"></div>
      </button>
    </div>
    <!-- <button
      class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
          <BookIcon class="w-4 h-4" />
        </div>
        <div class="my-auto mr-3">Pages</div>
      </div>
      <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full"></div>
    </button>-->
    <!-- <button
      class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
          <SmartphoneIcon class="w-4 h-4" />
        </div>
        <div class="my-auto mr-3">Manage apps</div>
      </div>
      <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full"></div>
    </button>-->
    <!-- <button
      class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
          <DownloadIcon class="w-4 h-4" />
        </div>
        <div class="my-auto mr-3">Saved</div>
      </div>
      <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full"></div>
    </button>-->
    <!-- <button
      class="flex justify-between w-full py-1 pl-1 pr-2 my-8 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
    >
      <div class="flex">
        <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
          <ChevronDownIcon class="w-4 h-4 font-bold text-blue-500" />
        </div>
        <div class="my-auto mr-3 font-semibold text-blue-500">See more...</div>
      </div>
      <div class="px-1 my-auto font-bold text-white bg-red-500 rounded-full"></div>
    </button>-->

    <!-- <button class="absolute bottom-0 flex justify-center mx-4 mb-24 rounded-lg focus:outline-none">
      <div class="flex px-3 py-2 text-white bg-blue-800 rounded-lg">
        <div class="mx-2">Logout</div>
        <div class="mx-2 my-auto">
          <PowerIcon class="w-4 h-4" />
        </div>
      </div>
    </button>-->
    <div class="px-2 py-2 mx-3 my-4 bg-gray-100 rounded-lg shadow-2xl lg:my-8">
      <div>
        <h1 class="text-xl font-semibold">Our Vision:</h1>
        <div class="text-xs">
          "To become a Significant Global Player in Aerospace Industry."
          Our Mission:
          "To achieve Self Reliance in Design, Development, Manufacture, Upgrade and Maintenance of Aerospace equipment
          Diversifying into related areas and managing the business in a climate of growing professional competence to
          achieve World Class Performance Standards for global competitiveness and growth in exports."
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style>
</style>
<script>
import Logo from '~/components/Logo.vue'
import {
  BookOpenIcon,
  MessageSquareIcon,
  MonitorIcon,
  UsersIcon,
  ShoppingBagIcon,
  BookIcon,
  SmartphoneIcon,
  DownloadIcon,
  ChevronDownIcon,
  PowerIcon,
  MoreHorizontalIcon,
} from 'vue-feather-icons'
export default {
  components: {
    BookOpenIcon,
    MessageSquareIcon,
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
}
</script>