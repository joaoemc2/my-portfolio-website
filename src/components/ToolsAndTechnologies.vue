<template>
  <div class="main-container d-flex justify-content-center align-items-center">
    <div class="tools-and-technologies">
      <div class="title-container">
        <div class="line"></div>
        <h2 class="title">Ferramentas, Linguagens e Tecnologias</h2>
      </div>
      <p class="paragraph">
        Algumas das ferramentas que mais utilizo no meu dia a dia, além das
        linguagens em que costumo programar.
      </p>
      <div class="card-container">
        <div class="card-col">
          <card-technologies-sub
            class="my-card"
            :title="cards[0].title"
            :text="cards[0].text"
            :image="cards[0].image"
          />
          <card-technologies-sub
            class="my-card"
            :title="cards[1].title"
            :text="cards[1].text"
            :image="cards[1].image"
          />
        </div>
        <div class="card-col">
          <card-technologies-sub
            class="my-card"
            :title="cards[2].title"
            :text="cards[2].text"
            :image="cards[2].image"
          />
          <card-technologies-sub
            class="my-card"
            :title="cards[3].title"
            :text="cards[3].text"
            :image="cards[3].image"
          />
        </div>
        <div class="card-col">
          <card-technologies-sub
            class="my-card"
            :title="cards[4].title"
            :text="cards[4].text"
            :image="cards[4].image"
          />
          <card-technologies-sub
            class="my-card"
            :title="cards[5].title"
            :text="cards[5].text"
            :image="cards[5].image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardTechnologiesSub from "./CardTechnologiesSub.vue";
export default {
  components: { CardTechnologiesSub },
  name: "ToolsAndTechnologies",
  data() {
    return {
      cards: [
        {
          title: "HTML & CSS",
          text: "Conceitos intemediarios de HTML 5, CSS 3 e SEO.",
          image: require("../assets/homeview/htmlcssicon.png"),
        },
        {
          title: "JavaScript",
          text: "Conhecimento em Javascript e programmação orientada a objetos.",
          image: require("../assets/homeview/jsicon.png"),
        },
        {
          title: "Vue.Js",
          text: "Experiencia pratica com Vue.Js e Vuetify Material Framework.",
          image: require("../assets/homeview/vueicon.png"),
        },
        {
          title: "Bootstrap",
          text: "Conhecimento pratico em Bootstrap, sendo meu framework favorito pela sua simplicidade e eficácia.",
          image: require("../assets/homeview/bootstrapicon.png"),
        },
        {
          title: "Node Js",
          text: "Conhecimento em API's REST/RESTful e Express framework.",
          image: require("../assets/homeview/nodeicon.png"),
        },
        {
          title: "Adobe Xd",
          text: "Conceitos de prototipação, UX/UI e Design System.",
          image: require("../assets/homeview/xdicon.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>

.main-container {
  background-color: #ecebf3;
}

.tools-and-technologies {
  width: 100%;
  max-width: 1920px;
  background-color: #ecebf3;
  padding: 70px 30px 30px 30px;
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
  margin-bottom: 80px;
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-col {
  display: flex;
}

.my-card {
  margin: 18px;
}

@media (max-width: 991px) {
  .card-col {
    flex-direction: column;
  }

  .my-card {
    margin: 0;
    margin-bottom: 18px;
  }
}
</style>