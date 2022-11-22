<template>
  <div class="project-main">
    <project-header-comp :title="title" :subTitle="subTitle" />
    <project-carousel-comp :imges="carouselImages" />
    <project-about-comp :about="about" />
    <project-tools-comp :toolsImages="toolsImages" />
    <project-links-comp :links="links" />
  </div>
</template>

<script>
import ProjectCarouselComp from "@/components/projects/ProjectCarouselComp.vue";
import ProjectHeaderComp from "@/components/projects/ProjectHeaderComp.vue";
import ProjectAboutComp from "@/components/projects/ProjectAboutComp.vue";
import ProjectToolsComp from "@/components/projects/ProjectToolsComp.vue";
import ProjectLinksComp from "@/components/projects/ProjectLinksComp.vue";
export default {
  name: "ProjectSchwarzaView",
  components: {
    ProjectCarouselComp,
    ProjectHeaderComp,
    ProjectAboutComp,
    ProjectToolsComp,
    ProjectLinksComp,
  },
  data() {
    return {
      title: "Project Schwarza",
      subTitle: "Loren",
      carouselImages: [
        require("@/assets/projectschwarza/index.png"),
        require("@/assets/projectschwarza/mobile.png"),
        require("@/assets/projectschwarza/home.png"),
        require("@/assets/projectschwarza/equacao.png"),
      ],
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egetante massa. Maecenas ut lorem iaculis, accumsan purus nec, cursus ex. Invitae laoreet mauris, non aliquam quam. Phasellus iaculis neque in miinterdum, at tristique erat aliquet. Donec cursus massa ut sem molestieconsectetur. Fusce mollis pretium magna, vitae dignissim dui aliquet et.",
      toolsImages: [
        require("@/assets/homeview/vueicon.png"),
        require("@/assets/homeview/jsicon.png"),
        require("@/assets/homeview/xdicon.png"),
      ],
      links: ["https://github.com/joaoemc2", "https://www.behance.net/", ""],
    };
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

<style scoped>
.project-main {
  padding: 0 30px;
}
</style>