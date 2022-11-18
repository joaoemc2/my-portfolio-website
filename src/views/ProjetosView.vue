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
        <card-project-sub v-for="card in cards" :key="card.id" class="col-12 col-md-6 col-lg-4" :title="card.title"
          :text="card.text" :image="card.image" :link="card.link" :update="card.update" />
      </div>
    </div>
  </div>
</template>

<script>
import CardProjectSub from "@/components/CardSubComp.vue";
export default {
  components: {
    CardProjectSub,
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
        {
          id: 2,
          title: "Projeto 2",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/undefinedimg.jpeg"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          id: 3,
          title: "Projeto 3",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/undefinedimg.jpeg"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          id: 4,
          title: "Projeto 4",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/undefinedimg.jpeg"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          id: 5,
          title: "Projeto 5",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/undefinedimg.jpeg"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          id: 6,
          title: "Projeto 6",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/undefinedimg.jpeg"),
          update: "[finalizado]",
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


.card-col {
  width: 100%;
  display: flex;
  justify-content: center;
}

.my-card {
  margin: 18px;
}

@media (max-width: 1300px) {
  .card-col {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .my-card {
    margin: 0px;
  }
}
</style>