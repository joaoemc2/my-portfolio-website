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
  name: "MedSimView",
  components: {
    ProjectCarouselComp,
    ProjectHeaderComp,
    ProjectAboutComp,
    ProjectToolsComp,
    ProjectLinksComp,
  },
  data() {
    return {
      title: "MedSim",
      subTitle: "Simulador de casos clínicos",
      carouselImages: [
        require("@/assets/medsim/medsim_banner_1.png"),
        require("@/assets/medsim/medsim_banner_2.png"),
        require("@/assets/medsim/medsim_banner_3.png"),
      ],
      about: [
        "O MedSim é um simulador de casos clínicos em desenvolvimento pelo Squad 3 do projeto Heath Lab no UniBH.",
        "É um simulador criado para auxiliar alunos de Medicina e cursos relacionados a testarem e melhorarem suas habilidades através de um paciente virtual.",
        "",
      ],
      toolsImages: [
        require("@/assets/homeview/icon_0010_react.png"),
        require("@/assets/homeview/icon_0011_ts.png"),
        require("@/assets/homeview/icon_0008_figma.png"),
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
          name: "Protótipo",
          active: true,
          link: "https://www.figma.com/file/tiRN0rzYTdXNG760Mevjok/MedSim?type=design&node-id=148%3A630&t=Un3iKQoC6jDgeTME-1",
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