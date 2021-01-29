<template>
  <div class="px-2 py-2 my-4 bg-gray-100 rounded-lg shadow-2xl lg:px-3 lg:mx-5 lg:my-8">
    <div>
      <div>
        <h1 class="text-xl font-semibold">COVID-19:</h1>
        <div class="text-xs">
          <div>1) Wear the Mask at all time while stepping out of the house.</div>
          <div>2) Regularly sanitize your Hands, Work place, Tools and Machines.</div>
          <div>3) Keep a distance of 1-2 mtr. while meeting any person.</div>
          <div>4) Avoid unnecessary movements within the Factory & Township.</div>
          <div>5) Avoid unnecessary Intrastate & Interstate visits.</div>
        </div>
      </div>
      <!-- <div>
        <h1 class="text-xl font-semibold">Our Vision:</h1>
        <div class="text-xs">
          "To become a Significant Global Player in Aerospace Industry."
          Our Mission:
          "To achieve Self Reliance in Design, Development, Manufacture, Upgrade and Maintenance of Aerospace equipment
          Diversifying into related areas and managing the business in a climate of growing professional competence to
          achieve World Class Performance Standards for global competitiveness and growth in exports."
        </div>
      </div>-->
      <div>
        <h1 class="text-xl font-semibold">Values:</h1>
        <div class="text-xs">
          <div>i)Customer Satisfaction</div>
          <div>ii)Commitment to Total Quality</div>
          <div>iii)Cost and Time Consciousness</div>
          <div>iv)Innovation and Creativity</div>
          <div>v)Trust and Team Spirit</div>
          <div>vi)Respect for the Indivisual</div>
          <div>vii)Integrity</div>
        </div>
      </div>
    </div>
    <!-- <div class="flex justify-between">
      <div class="text-sm font-semibold text-gray-700">Instant Games</div>
      <div class="text-xs font-semibold text-blue-500">
        <a href="/">See All</a>
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
      <form class="relative text-center" novalidate autocomplete="off">
        <div class="absolute top-0 mx-3">
          <SearchIcon class="w-4 h-4 mt-4 text-gray-500 py-" />
        </div>
        <input
          aria-label="Search Box"
          type="search"
          class="w-auto py-1 pl-8 my-2 text-sm bg-gray-300 rounded-full xl:w-full focus:outline-none"
          placeholder="Search "
          name="search"
        />
      </form>
      <div class="mx-2 my-auto">
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
    </div>-->
  </div>
</template><script>
import Logo from '~/components/Logo.vue'
import {
  MessageSquareIcon,
  CalendarIcon,
  ChevronRightIcon,
  SlidersIcon,
  SearchIcon,
} from 'vue-feather-icons'
export default {
  components: {
    MessageSquareIcon,
    CalendarIcon,
    ChevronRightIcon,
    SlidersIcon,
    SearchIcon,
  },
}
</script>