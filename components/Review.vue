<template>
  <div class="px-2 pb-2 bg-white lg:px-4 lg:pb-4">
    <div class="flex justify-between py-2 text-xs">
      <div>You and 2.6k</div>
      <div>856 Comments</div>
    </div>
    <div class="flex justify-between px-1 py-1 text-gray-500 border rounded-lg lg:px-5">
      <div class="flex text-xs">
        <button class="flex mx-2 my-auto hover:text-blue-500 focus:outline-none">
          <div class="p-1 lg:mx-1">
            <ThumbsUpIcon />
          </div>
          <div class="my-auto">like</div>
        </button>
        <button class="flex mx-2 my-auto hover:text-blue-500 focus:outline-none">
          <div class="p-1 lg:mx-1">
            <MessageCircleIcon />
          </div>
          <div class="my-auto">comment</div>
        </button>
        <button class="flex mx-2 my-auto hover:text-blue-500 focus:outline-none">
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
</template>
<script>
import Logo from "~/components/Logo.vue";
import {
 
  ThumbsUpIcon,
  MessageCircleIcon ,
  Share2Icon,
  StarIcon,
  
}
from "vue-feather-icons";
export default {
  components: {
 
  
  ThumbsUpIcon,
  MessageCircleIcon ,
  Share2Icon,
  StarIcon,
  },

};

</script>