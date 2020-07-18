<template>
  <div>
    <Navbar />
    <div class="lg:flex">
      <div class="relative hidden w-1/4 text-gray-700 bg-gray-300 lg:flex">
        <Menu />
      </div>
      <div class="bg-gray-300 lg:w-full justify-left">
        <div class="px-2 py-2 lg:px-4 lg:my-3">
          <Addstory />
          <Story />
          <Feeds />
          <Review />
        </div>
      </div>
      <div class="px-2 pt-2 bg-gray-200 lg:w-1/3 lg:px-10 lg:flex lg:flex-col">
        <Upcomingevents />
        <Instantgames />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "~/components/Navbar";
import Menu from "~/components/Menu";
import Addstory from "~/components/Addstory";
import Story from "~/components/Story";
import Feeds from "~/components/Feeds";
import Review from "~/components/Review";
import Upcomingevents from "~/components/Upcomingevents";
import Instantgames from "~/components/Instantgames";
import Logo from "~/components/Logo.vue";
import {
  } from "vue-feather-icons";
export default {
  components: {
   Navbar,
   Menu,
   Addstory,
   Story,
   Feeds,
   Review,
   Upcomingevents,
   Instantgames,
   Logo,
   },
};
</script>
<style scoped>
.menu {
  border-top-right-radius: 60px;
}
.ip {
  border-top-left-radius: 100px;
}
</style>
