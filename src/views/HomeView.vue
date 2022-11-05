<template>
  <div class="home">
    <header-comp />
    <about-me-comp />
    <tools-and-technologies />
    <projects-comp/>
  </div>
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import AboutMeComp from "../components/AboutMeComp.vue";
import ToolsAndTechnologies from "../components/ToolsAndTechnologies.vue";
import ProjectsComp from '@/components/ProjectsComp.vue';

export default {
  name: "HomeView",
  components: {
    HeaderComp,
    AboutMeComp,
    ToolsAndTechnologies,
    ProjectsComp,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>
