<template>
  <main class="project-main">
    <project-header-comp :title="title" :subTitle="subTitle" />
    <project-about-comp :about="about" />
    <project-carousel-comp :imges="carouselImages" />
    <project-tools-comp :toolsImages="toolsImages" />
    <project-links-comp :links="links" />
  </main>
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
      subTitle: "Resolva equações da Física com poucos cliques!",
      carouselImages: [
        require("@/assets/projectschwarza/index.png"),
        require("@/assets/projectschwarza/mobile.png"),
        require("@/assets/projectschwarza/home.png"),
        require("@/assets/projectschwarza/equacao.png"),
      ],
      about: [
        "O Project Schwarza tem como objetivo auxiliar pessoas a resolverem diversas equações da Física, da mais simples a mais complexa, trazendo uma experiência  rápida e simplificada.",
        "A ideia inicial é criar um website desktop mobile-first totalmente responsivo, e posteriormente utilizar app webview para disponibilizar nas lojas Android e Apple.",
        "",
      ],
      toolsImages: [
        require("@/assets/homeview/icon_0002_vueicon.png"),
        require("@/assets/homeview/icon_0004_jsicon.png"),
        require("@/assets/homeview/icon_0001_xdicon.png"),
      ],
      links: [
        {
          name: "site",
          active: true,
          link: "https://d1j2mmyqkimvg1.cloudfront.net",
        },
        {
          name: "git",
          active: true,
          link: "https://github.com/joaoemc2/project-schwarza",
        },
        {
          name: "behance",
          active: false,
          link: "",
        },
      ],
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
