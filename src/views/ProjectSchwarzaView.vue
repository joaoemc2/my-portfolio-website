<template>
  <div class="project-schwarza">
    <h1 class="main-title">Project Schwarza</h1>
    <p class="sub-title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div class="line"></div>
    <h2 class="title">Screenshots</h2>
    <carousel-comp class="carousel" :imges="images" />
    <div class="line"></div>
    <h2 class="title">Sobre</h2>
    <p class="about">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget
      ante massa. Maecenas ut lorem iaculis, accumsan purus nec, cursus ex. In
      vitae laoreet mauris, non aliquam quam. Phasellus iaculis neque in mi
      interdum, at tristique erat aliquet. Donec cursus massa ut sem molestie
      consectetur. Fusce mollis pretium magna, vitae dignissim dui aliquet et.
    </p>
    <div class="line"></div>
    <h2 class="title">Ferramentas Utilizadas</h2>
    <div class="tool-icons">
      <img
        src="@/assets/homeview/vueicon.png"
        alt="vue js icon"
        class="image"
      />
      <img src="@/assets/homeview/jsicon.png" alt="vue js icon" class="image" />
      <img src="@/assets/homeview/xdicon.png" alt="vue js icon" class="image" />
    </div>
    <div class="line"></div>
    <h2 class="title">Links</h2>
    <div class="links">
      <a class="bi bi-github" href=""></a>
      <a class="link-external" href="">GitHub - Código fonte</a>
    </div>
    <div class="links mb-5">
      <a class="bi bi-behance" href=""></a>
      <a class="link-external" href="">GitHub - Protótipo e Screenshots</a>
    </div>
  </div>
</template>

<script>
import CarouselComp from "@/components/projects/CarouselComp.vue";
export default {
  name: "ProjectSchwarzaView",
  components: {
    CarouselComp,
  },
  data() {
    return {
      images: [
        require("../assets/projectschwarza/index.png"),
        require("../assets/projectschwarza/mobile.png"),
        require("../assets/projectschwarza/home.png"),
        require("../assets/projectschwarza/equacao.png"),
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
.project-schwarza {
  padding: 0 30px;
}
.main-title {
  text-align: center;
  color: #252044;
  font-size: 32px;
  margin: 50px 0 30px 0;
}
.sub-title {
  text-align: center;
  color: #252044;
  font-size: 18px;
  margin-bottom: 30px;
}
.line {
  background-color: #00ffb1;
  height: 3px;
  width: 60px;
  margin-bottom: 4px;
}
.title {
  color: #252044;
  font-size: 32px;
  margin-bottom: 30px;
}
.carousel {
  margin-bottom: 30px;
}
.about {
  text-align: start;
  color: #252044;
  font-size: 18px;
  margin-bottom: 30px;
}
.tool-icons {
  display: flex;
  justify-content: start;
  margin-bottom: 30px;
}
.image {
  width: 60px;
  margin-right: 22px;
}
.links {
  display: flex;
  align-items: center;
}
.bi {
  font-size: 28px;
  margin-right: 12px;
  color: #252044;
}
.link-external {
  text-decoration: none;
  color: #252044;
}
</style>