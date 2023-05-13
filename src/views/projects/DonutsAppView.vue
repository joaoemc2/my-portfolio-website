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
  name: "DonutsAppView",
  components: {
    ProjectCarouselComp,
    ProjectHeaderComp,
    ProjectAboutComp,
    ProjectToolsComp,
    ProjectLinksComp,
  },
  data() {
    return {
      title: "Donuts Moon App",
      subTitle:
        "Protótipo do app de delivery fictício Donuts Moon criado para praticar conceitos de UX/UI.",
      carouselImages: [
        require("@/assets/donutsapp/donuts_banner(1).png"),
        require("@/assets/donutsapp/donuts_banner(2).png"),
        require("@/assets/donutsapp/donuts_banner(3).png"),
        require("@/assets/donutsapp/donuts_banner(4).png"),
      ],
      about: [
        "Projeto criado como parte do curso de Adobe XD na plataforma UDEMY. Nesse projeto, foram aplicados conceitos de UX/UI para criar o aplicativo de delivery fictício Donuts Moon.",
        "",
      ],
      toolsImages: [
        require("@/assets/homeview/icon_0001_xdicon.png"),
        require("@/assets/homeview/icon_0003_psicon.png"),

      ],
      links: [
        {
          name: "site",
          active: false,
          link: "",
        },
        {
          name: "git",
          active: false,
          link: "",
        },
        {
          name: "behance",
          active: true,
          link: "https://www.behance.net/gallery/129276063/Prototipo-UXUI-Donuts-Moon-app",
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