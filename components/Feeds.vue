<template>
  <div class="p-2 bg-white rounded-t shadow-2xl lg:p-4">
    <div class="flex items-center justify-between">
      <div class="flex mb-3">
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
      <button class="mb-2 font-bold text-gray-600 focus:outline-none">
        <MoreHorizontalIcon />
      </button>
    </div>

    <div class="mb-2 text-xs">
      A snippet #Nikon Experti Jaydin Johnes Photography's Caputring
      Beautiful Bokeh Photography shot on the Nikon Z 7.
    </div>
    <div>
      <div class="flex justify-center">
        <img src="/img/fb1.jpg" class="object-cover h-auto rounded-lg lg:h-full lg:w-full" />
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
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import {
  
  MoreHorizontalIcon,
  GlobeIcon 
}
from "vue-feather-icons";
export default {
  components: {
  
  MoreHorizontalIcon,
  GlobeIcon },

};

</script>