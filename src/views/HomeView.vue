<template>
  <div class="home">
    <header-comp />
    <about-me-comp />
    <tools-and-technologies />
    <projects-comp />
    <contact-comp />
    <RepositoriesComp />
  </div>
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import AboutMeComp from "../components/AboutMeComp.vue";
import ToolsAndTechnologies from "../components/ToolsAndTechnologies.vue";
import ProjectsComp from "@/components/ProjectsComp.vue";
import RepositoriesComp from "@/components/RepositoriesComp.vue";
import ContactComp from "@/components/ContactComp.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComp,
    AboutMeComp,
    ToolsAndTechnologies,
    ProjectsComp,
    RepositoriesComp,
    ContactComp,
  },
  data() {
    return {};
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted: function () {
    this.scrollToTop();
  },
};
</script>
<style scoped></style>
