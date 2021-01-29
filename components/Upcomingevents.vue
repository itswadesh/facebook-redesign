<template>
  <div class="p-2 bg-white rounded-lg shadow-2xl lg:p-4 lg:mx-4 lg:my-3">
    <div>
      <h1 class="text-center">Employ Self Portal</h1>
      <button
        class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
      >
        <div class="flex">
          <div class="p-1 my-auto mr-2 bg-blue-100 border rounded-full shadow-2xl">
            <img src="/img/fb-2.jpg" class="object-cover w-8 h-8 rounded-full" />
          </div>
          <div class="my-auto mr-8">HR</div>
        </div>
      </button>
      <button
        class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
      >
        <div class="flex">
          <div class="p-1 my-auto mr-2 bg-blue-100 border rounded-full shadow-2xl">
            <img src="/img/fb-2.jpg" class="object-cover w-8 h-8 rounded-full" />
          </div>
          <div class="my-auto mr-8">Benefits</div>
        </div>
      </button>
      <button
        class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
      >
        <div class="flex">
          <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
            <img src="/img/fb-2.jpg" class="object-cover w-8 h-8 rounded-full" />
          </div>
          <div class="my-auto mr-3">Applicant</div>
        </div>
        <div class="py-1 font-semibold text-white bg-red-500 rounded-full"></div>
      </button>
      <button
        class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
      >
        <div class="flex">
          <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
            <img src="/img/fb-2.jpg" class="object-cover w-8 h-8 rounded-full" />
          </div>
          <div class="my-auto mr-3">Payroll</div>
        </div>
        <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full"></div>
      </button>
      <button
        class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
      >
        <div class="flex">
          <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
            <img src="/img/fb-2.jpg" class="object-cover w-8 h-8 rounded-full" />
          </div>
          <div class="my-auto mr-3">Training</div>
        </div>
        <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full"></div>
      </button>
      <button
        class="flex justify-between w-full py-1 pl-1 pr-2 my-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:border-gray-700"
      >
        <div class="flex">
          <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
            <img src="/img/fb-2.jpg" class="object-cover w-8 h-8 rounded-full" />
          </div>
          <div class="my-auto mr-3">News</div>
        </div>
        <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full"></div>
      </button>
    </div>

    <!-- <div class="p-2 bg-white rounded-lg shadow-2xl lg:p-4 lg:mx-4 lg:my-3">
      <div class="flex justify-between">
        <div class="text-sm font-semibold">Upcoming events</div>
        <div class="text-xs font-semibold text-blue-500">
          <a herf="/">See All</a>
        </div>
      </div>
      <div class="relative">
        <img src="/img/fb-12.jpg" class="object-cover w-full h-32 mt-3 rounded-lg" />
        <div class="absolute top-0 mx-2 text-2xl font-medium text-white">Hollywood Nights</div>
      </div>
      <div class="flex my-4 text-xs leading-tight">
        <div class="p-1 text-center bg-blue-100 rounded-lg">
          <div class="font-semibold text-blue-700">April</div>
          <div class="font-semibold">25</div>
        </div>
        <div class="mx-3">
          <div class="text-xs font-semibold">Celebrity Waiter Event "Hollywood Nights"</div>
          <div class="text-xs text-gray-600">United States of America</div>
        </div>
      </div>
      <div class="flex justify-center px-16 pb-5 mt-5 border-b md:px-64 lg:px-12">
        <button
          class="flex justify-center w-full py-2 text-xs text-white bg-blue-800 rounded-lg focus:outline-none hover:bg-blue-700"
        >
          <StarIcon class="items-center w-4 h-4" />
          <div class="mx-2 py-auto">is intrested</div>
        </button>
      </div>

      <div class="flex justify-between my-2">
        <div class="flex">
          <img src="/img/p1.jpg" class="relative object-cover w-8 h-8 rounded-full" />
          <div class="mx-1 leading-tight lg:mx-3">
            <div class="text-xs">It.s Ava Wright's birthday today.</div>
            <div class="text-xs">Help him have a great day!</div>
          </div>
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
        <div class="w-full ml-2">
          <div class="mb-1 text-sm font-semibold">Aliah pitts</div>
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
    </div>-->
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import {
  StarIcon,
  CalendarIcon,
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
    StarIcon,
    CalendarIcon,
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