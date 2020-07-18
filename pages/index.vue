<template>
  <div>
    <div>
      <div class="flex justify-between w-full px-2 py-1 text-white bg-blue-800 lg:py-0 lg:px-6">
        <div class="my-1 text-sm font-semibold lg:text-2xl lg:my-2">facebook</div>

        <textarea
          class="h-6 my-1 text-xs bg-blue-900 border border-gray-700 rounded-full lg:flex lg:text-xl lg:my-auto lg:w-1/3"
        ></textarea>

        <div class="justify-around hidden my-auto font-light text-white lg:flex">
          <div class="px-4">
            <BellIcon class />
          </div>
          <div class="px-4">
            <SettingsIcon class />
          </div>
          <div class="px-4">
            <CheckCircleIcon />
          </div>
        </div>
        <div class="flex">
          <div class="hidden my-auto text-sm font-semibold lg:flex lg:text-xl">Manish kumar</div>
          <img
            src="/img/d1.jpg"
            class="w-8 h-8 my-auto ml-2 rounded-full lg:h-10 lg:w-auto lg:ml-5"
          />
        </div>
      </div>
      <div class="lg:flex">
        <div class="relative hidden w-1/4 text-gray-700 bg-gray-300 lg:flex">
          <div class="w-full pl-10 mt-5 text-xs bg-white border menu">
            <h1 class="my-6 font-bold">Menu</h1>
            <div></div>
            <div class="flex justify-between py-1 pl-1 pr-3 my-2 mr-6 bg-gray-300 rounded-lg">
              <div class="flex">
                <div class="p-1 my-auto mr-2 bg-blue-100 border rounded-full shadow-2xl">
                  <BookOpenIcon class="w-4 h-4" />
                </div>
                <div class="my-auto font-bold">News</div>
              </div>
              <div class="my-auto text-gray-500">
                <MoreHorizontalIcon />
              </div>
            </div>
            <div class="flex justify-between py-1 pl-1 pr-3 my-2 mr-6">
              <div class="flex">
                <div class="p-1 my-auto mr-2 bg-blue-100 rounded-full shadow-2xl">
                  <MessageSquareIcon class="w-4 h-4" />
                </div>
                <div class="my-auto">Messages</div>
              </div>
              <div class="px-1 my-auto font-semibold text-white bg-red-500 rounded-full">7</div>
            </div>
            <div class="flex pl-1 my-2">
              <div class="w-6 h-6 p-1 my-auto mr-2 bg-blue-100 border rounded-full shadow-2xl">
                <MonitorIcon class="w-4 h-4" />
              </div>

              <div class="my-auto">Watch</div>
            </div>
            <div class="flex pl-1 my-2">
              <div class="w-6 h-6 p-1 my-auto mr-2 bg-blue-100 border rounded-full shadow-2xl">
                <UsersIcon class="w-4 h-4" />
              </div>
              <div class="my-auto">group</div>
            </div>
            <div class="flex pl-1 my-2">
              <div class="w-6 h-6 p-1 my-auto mr-2 bg-blue-100 border rounded-full shadow-2xl">
                <ShoppingBagIcon class="w-4 h-4" />
              </div>
              <div class="my-auto">Marketplace</div>
            </div>
            <div class="flex pl-1 my-2">
              <div class="w-6 h-6 p-1 my-auto mr-2 bg-blue-100 border rounded-full shadow-2xl">
                <BookIcon class="w-4 h-4" />
              </div>

              <div class="my-auto">Pages</div>
            </div>
            <div class="flex pl-1 my-2">
              <div class="w-6 h-6 p-1 my-auto mr-2 bg-blue-100 border rounded-full shadow-2xl">
                <SmartphoneIcon class="w-4 h-4" />
              </div>

              <div class="my-auto">Manageapps</div>
            </div>
            <div class="flex pl-1 my-2">
              <div class="w-6 h-6 p-1 my-auto mr-2 bg-blue-100 border rounded-full shadow-2xl">
                <DownloadIcon class="w-4 h-4" />
              </div>

              <div class="my-auto">Saves</div>
            </div>
            <div class="flex pl-1 my-2">
              <div class="w-6 h-6 p-1 my-auto mr-2 bg-blue-100 border rounded-full shadow-2xl">
                <ChevronDownIcon class="w-4 h-4 text-blue-500" />
              </div>

              <div class="my-auto font-semibold text-blue-500">See more...</div>
            </div>
            <button class="absolute bottom-0 flex justify-center mx-4 mb-24">
              <div class="flex px-3 py-2 text-white bg-blue-800 rounded-lg">
                <div class="mx-2">Logout</div>
                <div class="mx-2 my-auto">
                  <PowerIcon class="w-4 h-4" />
                </div>
              </div>
            </button>
          </div>
        </div>

        <div class="bg-gray-300 lg:w-full justify-left">
          <div class="px-2 py-2 lg:px-4 lg:my-3">
            <div
              class="relative flex px-6 ml-5 bg-white border rounded-lg shadow-2xl lg:px-5 lg:py- lg:ml-10"
            >
              <img
                src="/img/d1.jpg"
                class="absolute w-8 h-8 -ml-10 rounded-full lg:h-10 lg:w-10 lg:my-1"
              />

              <div class="flex justify-between">
                <div class="py-1 lg:py-3">
                  <textarea class="my-1 ml-10 text-xs text-gray-600 bg-white border-b">
what's on your mind, Manish?

</textarea>
                </div>
                <div class="absolute right-0 hidden py-2 text-white justify-right lg:flex">
                  <div class="w-8 h-8 p-2 mx-2 text-black bg-blue-100 rounded-full shadow-xl">
                    <ImageIcon class="w-4 h-4 text-blue-700" />
                  </div>
                  <div class="w-8 h-8 p-2 mx-2 text-black bg-blue-100 rounded-full shadow-xl">
                    <TagIcon class="w-4 h-4 text-blue-700" />
                  </div>
                  <div class="w-8 h-8 p-2 mx-2 text-black bg-blue-100 rounded-full shadow-xl">
                    <MapPinIcon class="w-4 h-4 text-blue-700" />
                  </div>
                  <div class="w-8 h-8 p-2 mx-2 text-black bg-blue-100 rounded-full shadow-xl">
                    <MoreHorizontalIcon class="w-4 h-4 text-blue-700" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between pt-2 pb-4">
              <div class="font-bold">Stories</div>
              <div class="text-xs text-blue-500">See All</div>
            </div>
            <div>
              <div class="z-50 flex mb-2 lg:mb-6">
                <div class="relative flex justify-center mx-2 text-center rounded-lg">
                  <img
                    src="/img/d.jpg"
                    alt
                    class="object-cover w-32 h-32 rounded-tr-lg opacity-50 ip lg:h-48 lg:w-40"
                  />
                  <div
                    class="absolute bottom-0 mb-3 text-sm font-semibold text-white opacity-100 justify-left"
                  >Add your story</div>
                  <div
                    class="absolute w-8 h-8 -mt-4 text-white bg-blue-600 border-2 border-blue-700 rounded-full lg:h-10 lg:w-10"
                  >
                    <div class="text-2xl rounded-full">+</div>
                  </div>
                </div>
                <div class="relative flex justify-center mx-2 text-center rounded-lg">
                  <img
                    src="/img/d1.jpg"
                    alt
                    class="object-cover w-32 h-32 rounded-tr-lg opacity-50 ip lg:h-48 lg:w-40"
                  />
                  <div
                    class="absolute bottom-0 mb-3 text-sm font-semibold text-white opacity-100"
                  >Ashutosh panda</div>
                  <img
                    src="/img/p2.jpg"
                    class="absolute w-8 h-8 p-1 -mt-4 border-2 border-blue-700 rounded-full lg:h-10 lg:w-10"
                  />
                </div>
                <div class="relative flex justify-center mx-2 text-center rounded-lg">
                  <img
                    src="/img/d2.jpg"
                    alt
                    class="object-cover w-32 h-32 rounded-tr-lg opacity-50 ip lg:h-48 lg:w-40"
                  />
                  <div
                    class="absolute bottom-0 mb-3 text-sm font-semibold text-white opacity-100"
                  >Ashutosh panda</div>
                  <img
                    src="/img/p3.jpg"
                    class="absolute w-8 h-8 p-1 -mt-4 border-2 border-blue-700 rounded-full lg:h-10 lg:w-10"
                  />
                </div>
                <div class="relative flex justify-center mx-2 text-center rounded-lg">
                  <img
                    src="/img/d3.jpg"
                    alt
                    class="object-cover w-32 h-32 rounded-tr-lg opacity-50 ip lg:h-48 lg:w-40"
                  />
                  <div
                    class="absolute bottom-0 mb-3 text-sm font-semibold text-white opacity-100"
                  >Ashutosh panda</div>
                  <img
                    src="/img/p4.jpg"
                    class="absolute w-8 h-8 p-1 -mt-4 border-2 border-blue-700 rounded-full lg:h-10 lg:w-10"
                  />
                </div>
              </div>
            </div>
            <div class="p-2 bg-white rounded shadow-2xl lg:p-4">
              <div class="flex justify-between">
                <div class="flex">
                  <img
                    src="/img/p3.jpg"
                    alt
                    class="w-8 h-8 p-1 my-auto mr-2 border border-blue-500 rounded-full lg:h-10 lg:w-10"
                  />
                  <div>
                    <div class="font-semibold text-blue-500 sm:text-sm">Manish Kumar</div>
                    <div class="flex text-gray-600">
                      <div class="text-xs text-gray-400">7:10 PM, yesterday</div>
                      <GlobeIcon class="w-3 h-3 mx-2 mt-1" />
                    </div>
                  </div>
                </div>
                <button class="font-bold text-gray-600">
                  <MoreHorizontalIcon />
                </button>
              </div>

              <div class="mb-2 text-xs">
                A snippet #Nikon Experti Jaydin Johnes Photography's Caputring
                Beautiful Bokeh Photography shot on the Nikon Z 7.
              </div>
              <div>
                <div class="flex justify-center">
                  <img src="/img/fb1.jpg" class="object-cover h-32 rounded-lg lg:h-full lg:w-full" />
                </div>
                <div class="flex justify-between my-2 wrap">
                  <div class="mr-3">
                    <img src="/img/fb-2.jpg" class="object-cover w-full h-32 rounded-lg" />
                  </div>
                  <div class="mx-3">
                    <img src="/img/fb-3.jpg" class="object-cover w-full h-32 rounded-lg" />
                  </div>
                  <div class="relative flex items-center justify-center ml-3">
                    <img src="/img/fb-4.jpg" class="object-cover w-full h-32 rounded-lg opacity-50" />
                    <div class="absolute text-4xl font-bold text-white opacity-100">+2</div>
                  </div>
                </div>
              </div>
              <div class="flex justify-between my-2 text-xs">
                <div>You and 2.6k</div>
                <div>856 Comments</div>
              </div>
              <div class="flex justify-between px-1 py-1 text-gray-500 border rounded-lg lg:px-5">
                <div class="flex text-xs">
                  <button class="flex mx-2 my-auto hover:text-blue-500">
                    <div class="p-1 lg:mx-1">
                      <ThumbsUpIcon />
                    </div>
                    <div class="my-auto">like</div>
                  </button>
                  <button class="flex mx-2 my-auto hover:text-blue-500">
                    <div class="p-1 lg:mx-1">
                      <MessageCircleIcon />
                    </div>
                    <div class="my-auto">comment</div>
                  </button>
                  <button class="flex mx-2 my-auto hover:text-blue-500">
                    <div class="p-1 lg:mx-1">
                      <Share2Icon />
                    </div>
                    <div class="my-auto">share it</div>
                  </button>
                </div>
                <div>
                  <div class="w-6 h-6 my-1 hover:text-blue-500">
                    <StarIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-2 pt-2 bg-gray-200 lg:w-1/3 lg:px-10 lg:flex lg:flex-col">
          <div class="p-2 bg-white rounded-lg shadow-2xl lg:p-4 lg:mx-4 lg:my-3">
            <div class="flex justify-between">
              <div class="text-sm font-semibold">Upcoming events</div>
              <div class="text-xs font-semibold text-blue-500">See All</div>
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
              <button class="flex px-16 py-2 text-xs text-white bg-blue-800 rounded-lg">
                <StarIcon class="items-center w-4 h-4" />
                <div class="mx-2">is intrested</div>
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
              <div class="text-sm font-semibold text-blue-400">See All</div>
            </div>
            <div class="flex my-1">
              <img src="/img/p2.jpg" class="object-cover w-8 h-8 my-auto rounded-full" />
              <div class="ml-2">
                <div class="pr-40 mb-1 text-sm font-semibold">Aliah pitts</div>
                <div class="flex justify-between">
                  <button
                    class="w-full py-2 text-xs font-semibold text-white bg-blue-800 rounded-lg"
                  >Confirm</button>
                  <button
                    class="w-full py-2 ml-2 text-xs font-semibold bg-gray-400 rounded-lg"
                  >Remove</button>
                </div>
              </div>
            </div>
          </div>
          <div class="px-2 py-2 mt-4 bg-gray-100 rounded-lg shadow-2xl lg:px-3 lg:mx-5 lg:mt-8">
            <div class="flex justify-between">
              <div class="text-sm font-semibold text-gray-700">Instant Games</div>
              <div class="text-xs font-semibold text-blue-500">See All</div>
            </div>
            <div class="flex justify-between mt-2">
              <img src="/img/g4.jpg" class="object-cover w-8 h-8 rounded-full shadow-xl" />
              <img src="/img/g2.jpg" class="object-cover w-8 h-8 rounded-full shadow-xl" />
              <img src="/img/g3.jpg" class="object-cover w-8 h-8 rounded-full shadow-xl" />
              <img src="/img/g4.jpg" class="object-cover w-8 h-8 rounded-full shadow-xl" />
              <img src="/img/g5.jpg" class="object-cover w-8 h-8 rounded-full shadow-xl" />
              <div class="w-4 h-4 my-1 mr-3">
                <ChevronRightIcon />
              </div>
            </div>
            <div class="text-gray-300">__________________________________________</div>
            <div class="flex justify-between">
              <div class="text-base font-semibold">Contact</div>
              <div class="text-xs font-semibold text-blue-500">See All</div>
            </div>
            <div class="flex justify-between">
              <input class="w-full my-1 mr-3 bg-gray-300 rounded-full" />
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
          </div>
          <div class="flex justify-between px-1 py-1 mx-2 my-1 rounded-lg lg:mx-8">
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
          <div class="flex justify-between px-1 py-1 mx-2 my-1 rounded-lg lg:mx-8">
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
          <div class="flex justify-between px-1 py-1 mx-2 my-1 rounded-lg lg:mx-8">
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
      </div>
    </div>
  </div>
</template>

<script>
import {
  AirplayIcon,
  AtSignIcon,
  SearchIcon,
  BellIcon,
  SettingsIcon,
  CheckCircleIcon,
  BookOpenIcon,
  MessageSquareIcon,
  MonitorIcon,
  UsersIcon,
  ShoppingBagIcon,
  BookIcon,
  SmartphoneIcon,
  DownloadIcon,
  ChevronDownIcon,
  ThumbsUpIcon,
  MessageCircleIcon,
  Share2Icon,
  StarIcon,
  PowerIcon,
  MoreHorizontalIcon,
  ImageIcon,
  TagIcon,
  MapPinIcon,
  CalendarIcon,
  ChevronRightIcon,
  SlidersIcon,
  GlobeIcon,
} from 'vue-feather-icons'
export default {
  components: {
    AirplayIcon,
    AtSignIcon,
    SearchIcon,
    BellIcon,
    SettingsIcon,
    CheckCircleIcon,
    BookOpenIcon,
    MessageSquareIcon,
    MonitorIcon,
    UsersIcon,
    ShoppingBagIcon,
    BookIcon,
    SmartphoneIcon,
    DownloadIcon,
    ChevronDownIcon,
    ThumbsUpIcon,
    MessageCircleIcon,
    Share2Icon,
    StarIcon,
    PowerIcon,
    MoreHorizontalIcon,
    ImageIcon,
    TagIcon,
    MapPinIcon,
    CalendarIcon,
    ChevronRightIcon,
    SlidersIcon,
    GlobeIcon,
  },
}
</script>

<style scoped>
.menu {
  border-top-right-radius: 60px;
}
.badge {
  display: inline-block;
  position: absolute;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  z-index: 1;
  padding: 0 4px;
  line-height: 16px;
}
.badge:after {
  content: '';
  position: absolute;
  border-style: solid;
  border-width: 8px;
  left: 100%;
  width: 0;
  height: 0;
  top: 0;
}
.ip {
  border-top-left-radius: 100px;
}
.pink {
  top: 16px;
  left: 0;
  background: rgba(155, 63, 108, 0.8);
}
.pink:after {
  border-color: rgba(255, 63, 108, 0.5) transparent rgba(255, 63, 108, 0.5)
    rgba(255, 63, 108, 0.8);
}
.blue {
  background: rgba(26, 40, 230, 0.8);
  top: 100px;
  left: 0;
}
.blue:after {
  border-color: rgba(24, 36, 202, 0.5) transparent rgba(24, 36, 202, 0.5)
    rgba(24, 36, 202, 0.8);
}
.orange {
  background: rgba(255, 102, 0, 0.8);
  top: 150px;
  left: 0;
}
.orange:after {
  border-color: rgba(255, 102, 0, 0.5) transparent rgba(255, 102, 0, 0.5)
    rgba(255, 102, 0, 0.8);
}
.green {
  background: rgba(13, 207, 6, 0.8);
  top: 250px;
  left: 0;
}
.green:after {
  border-color: rgba(13, 207, 6, 0.5) transparent rgba(13, 207, 6, 0.5)
    rgba(13, 207, 6, 0.8);
}
.yellow {
  background: rgb(251, 188, 5, 0.8);
  top: 300px;
  left: 0;
}
.yellow:after {
  border-color: rgb(251, 188, 5, 0.5) transparent rgba(251, 188, 5, 0.5)
    rgba(251, 188, 5, 0.8);
}
</style>
