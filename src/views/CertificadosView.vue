<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="projects">
      <div class="title-container">
        <div class="line"></div>
        <h1 class="title">Certificados</h1>
      </div>
      <p class="paragraph">Certificados, participações e cursos de extenção.</p>
      <div class="card-container">
        <div class="card-col">
          <card-project-sub
            class="my-card"
            :title="cards[0].title"
            :text="cards[0].text"
            :image="cards[0].image"
            :update="cards[0].update"
            :link="cards[0].link"
          />
          <card-project-sub
            class="my-card"
            :title="cards[1].title"
            :text="cards[1].text"
            :image="cards[1].image"
            :update="cards[1].update"
            :link="cards[1].link"
          />
          <card-project-sub
            class="my-card"
            :title="cards[2].title"
            :text="cards[2].text"
            :image="cards[2].image"
            :update="cards[2].update"
            :link="cards[2].link"
          />
        </div>
        <div class="card-col">
          <card-project-sub
            class="my-card"
            :title="cards[3].title"
            :text="cards[3].text"
            :image="cards[3].image"
            :update="cards[3].update"
            :link="cards[3].link"
          />
          <card-project-sub
            class="my-card"
            :title="cards[4].title"
            :text="cards[4].text"
            :image="cards[4].image"
            :update="cards[4].update"
            :link="cards[4].link"
          />
          <card-project-sub
            class="my-card"
            :title="cards[5].title"
            :text="cards[5].text"
            :image="cards[5].image"
            :update="cards[5].update"
            :link="cards[5].link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProjectSub from "@/components/CardProjectSub.vue";
export default {
  components: {
    CardProjectSub,
  },

  name: "CertificadosView",
  data() {
    return {
      cards: [
        {
          title: "Project Schwarza",
          text: "Aplicação web para executar cálculos das mais diversas equações da física de maneira fácil e rápida.",
          image: require("@/assets/certificados/certificado_google_garage.png"),
          update: "[em andamento]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 2",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/certificados/certificado_healt_lab.png"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 3",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/certificados/certificado_cpanel.png"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 4",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/certificados/certificado_databricks_udemy.jpg"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 5",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/certificados/certificado_de_finalista_hackahub_2022.png"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 6",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/certificados/certificado_git_e_github.jpg"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 6",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/certificados/certificado_html_e_css.jpg"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 6",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/certificados/certificado_pandas.png"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 6",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/certificados/certificado_python.png"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 6",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/certificados/curso_de_extensao_ilustração_digital.png"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 6",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/certificados/curso_de_extensao_inteligencia_artificial.png"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 6",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/certificados/participacao_hackahub_2022.png"),
          update: "[finalizado]",
          link: "/projectschwarza",
        },
        {
          title: "Projeto 6",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis vitae arcu vitae faucibus.",
          image: require("@/assets/certificados/projeto_de_extensao_tech_week_ii.png"),
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
.card-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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