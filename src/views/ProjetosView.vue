<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="projects">
      <div class="title-container">
        <div class="line"></div>
        <h1 class="title">Projetos</h1>
      </div>
      <p class="paragraph">
        Aqui estão os meus últimos projetos, fique a vontade para explorá-los!
      </p>
      <div class="card-container row d-flex justify-content-center align-items-center ">
        <card-sub-comp v-for="card in cards" :key="card.id" class="col-12 col-md-6 col-lg-4" :title="card.title"
          :text="card.text" :image="card.image" :link="card.link" :update="card.update" />
      </div>
    </div>
  </div>
</template>

<script>
import CardSubComp from "@/components/CardSubComp.vue";
export default {
  components: {
    CardSubComp,
  },

  name: "ProjectsView",
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Project Schwarza",
          text: "Aplicação web para executar cálculos das mais diversas equações da física de maneira fácil e rápida.",
          image: require("@/assets/homeview/cover-test.png"),
          update: "[em andamento]",
          link: "/projectschwarza",
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
.projects {
  padding: 50px 30px 30px 30px;
  width: 100%;
  max-width: 1920px;
}

.title-container {
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
}

.paragraph {
  max-width: 700px;
  margin-bottom: 50px;
}

</style>