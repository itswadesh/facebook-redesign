<template>
  <div>
    <div class="flex justify-around py-4">
      <div class="flex">
        <img src="/img/fb.png" class="object-cover w-8 h-8 mx-2" />
        <a
          href="http://172.146.4.168/vigilance_portal/integrity_pledge.aspx"
          class="text-blue-700 underline"
        >Vigilance / सतर्कता SELF-DECLARATION ON TRAVEL HISTORY OUT OF KORAPUT DISTRICT</a>
      </div>
      <div class="flex">
        <div class>भाषा चयन / Language Selection:</div>
        <div class="flex px-2">
          <div class="flex px-1">
            <button
              class="w-3 h-3 mx-2 my-auto border border-gray-300 rounded-full hover:bg-blue-600 focus:outline-none"
            ></button>
            <div>हिंदी</div>
          </div>
          <div class="flex px-1">
            <button
              class="w-3 h-3 mx-2 my-auto border border-gray-300 rounded-full hover:bg-blue-600 focus:outline-none"
            ></button>
            <div>English</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import {
  BellIcon,
  SettingsIcon,
  CheckCircleIcon,
  SlidersIcon,
  SearchIcon,
} from 'vue-feather-icons'
export default {
  components: {
    BellIcon,
    SettingsIcon,
    CheckCircleIcon,
    SlidersIcon,
    SearchIcon,
  },
}
</script>