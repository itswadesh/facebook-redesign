<template>
  <div class="container">
    <div class="pink badge">Trending</div>
    <div class="blue badge">New</div>
    <div class="orange badge">orage</div>
    <div class="red badge">red</div>
    <div class="green badge">green</div>
    <div class="yellow badge">yellow</div>
    <!-- <div class="navbar">facebook</div> -->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
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
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 8px;
  left: 100%;
  width: 0;
  height: 0;
  top: 0;
}
.pink {
  top: 16px;
  left: 0;
  background: rgba(255, 63, 108, 0.8);
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
.navbar {
  background-color: blue;
  font-size: 20px;
  color: aliceblue;
}
</style>
