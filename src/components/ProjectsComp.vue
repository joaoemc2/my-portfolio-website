<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="projects">
      <div class="title-container">
        <div class="line"></div>
        <h2 class="title">Projetos</h2>
      </div>
      <p class="paragraph">
        Aqui estão os meus últimos projetos, fique a vontade para explorá-los!
      </p>
      <div class="card-container row d-flex justify-content-center align-items-center">
          <card-project-sub 
            class="my-card col-12 col-md-6 col-lg-4"
            :title="cards[0].title"
            :text="cards[0].text"
            :image="cards[0].image"
            :update="cards[0].update"
            :link="cards[0].link"
          />
          <card-project-sub
            class="my-card col-12 col-md-6 col-lg-4"
            :title="cards[1].title"
            :text="cards[1].text"
            :image="cards[1].image"
            :update="cards[1].update"
            :link="cards[1].link"
          />
          <card-project-sub
            class="my-card col-12 col-md-6 col-lg-4"
            :title="cards[2].title"
            :text="cards[2].text"
            :image="cards[2].image"
            :update="cards[2].update"
            :link="cards[2].link"
          />
      </div>
    </div>
  </div>
</template>

<script>
import CardProjectSub from "./CardSubComp.vue";
export default {
  components: {
    CardProjectSub,
  },

  name: "ProjectsComp",
  data() {
    return {
      cards: [
        {
          title: "Project Schwarza",
          text: "Aplicação web para executar cálculos das mais diversas equações da física de maneira fácil e rápida.",
          image: require("@/assets/homeview/cover-test.png"),
          update: "[em andamento]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 2",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/undefinedimg.jpeg"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 3",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/undefinedimg.jpeg"),
          update: "[finalizado]",
          link: "/projectschwarza",
        }
      ],
    };
  },
};
</script>

<style scoped>
.projects {
  padding: 70px 30px 30px 30px;
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