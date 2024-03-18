<template>
  <div id="app">
    <nav-bar-comp />
    <router-view class="router" />
    <footer-comp :version="version" />
    <!-- G-10485728 -->
  </div>
</template>

<script>
import NavBarComp from "./components/NavBarComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: {
    NavBarComp,
    FooterComp,
  },
  data() {
    return {
      version: "1.3.2",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Serif:opsz,wght@8..144,300&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

* {
  font-family: "Montserrat", sans-serif;
}

@media (max-width: 991px) {
  h2 {
    font-size: 26px !important;
  }
}
</style>
