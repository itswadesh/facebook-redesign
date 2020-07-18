<template>
  <div class="flex justify-between w-full px-2 py-1 text-white bg-blue-800 lg:py-0 lg:px-6">
    <div class="my-1 text-sm font-semibold lg:text-2xl lg:my-2">facebook</div>
    <input
      class="my-1 text-xs bg-blue-900 rounded-full focus:outline-none lg:flex lg:text-xl lg:my-auto lg:w-1/3"
    />
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
      <img src="/img/d1.jpg" class="w-8 h-8 my-auto ml-2 rounded-full lg:h-10 lg:w-auto lg:ml-5" />
    </div>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import {
  
  BellIcon,
  SettingsIcon,
  CheckCircleIcon 
  
}
from "vue-feather-icons";
export default {
  components: {
 
  BellIcon,
  SettingsIcon,
  CheckCircleIcon ,
   },

};

</script>