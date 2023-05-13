<template>
  <section
    class="main-container d-flex justify-content-center align-items-center"
  >
    <div class="tools-and-technologies">
      <div class="title-container">
        <div class="line"></div>
        <h2 class="title">Ferramentas, Linguagens e Tecnologias</h2>
      </div>
      <p class="paragraph">
        Algumas das ferramentas que mais utilizo, linguagens de programação e
        areas de conhecimentos.
      </p>
      <div class="card-container">
        <CardTechnologiesSub
          v-for="item in cards"
          v-bind:key="item.id"
          class="my-card"
          :title="item.title"
          :text="item.text"
          :image="item.image"
          :alt="item.alt"
        />
      </div>
    </div>
  </section>
</template>

<script lang="js">
import CardTechnologiesSub from "./CardTechnologiesSub.vue";
export default {
   components: {
    CardTechnologiesSub,
  },
  name: "ToolsAndTechnologies",
  data() {
    return {
      title: "teste",
      cards: [
        {
          id: 0,
          title: "HTML & CSS",
          text: "Conhecimento da estrutura de uma página HTML e suas tags, semântica HTML, seletores CSS, regras de estilo e técnicas de layout responsivo.",

          image: require("../assets/homeview/icon_0005_htmlcssicon.png"),
          alt: "icone html e css"
        },
        {
          id: 1,
          title: "Acessibilidade Web",
          text: 'Implementação de alternativas de texto para conteúdo visual, formulários e controles interativos acessíveis, utilização de elementos semânticos e noção de esquema de cores acessível.',
          image: require("../assets/homeview/icon_0007_acessibilidade.png"),
          alt: "icone bootstrap"
        },
        {
          id: 2,
          title: "Vue.Js",
          text: "Experiencia com Vue.Js 2, VueX e Vuetify Material Framework. Estudando Vue.Js 3, Composition API e Pinia.",
          image: require("../assets/homeview/icon_0002_vueicon.png"),
          alt: "icone vue"
        },
        {
          id: 3,
          title: "JavaScript",
          text: "Programação assíncrona, callbacks, promises, async/await, APIs, AJAX e Node.js.",
          image: require("../assets/homeview/icon_0004_jsicon.png"),
          alt: "icone javascript"
        },
        {
          id: 4,
          title: "Fire Base",
          text: "Conhecimento sobre os principais recursos do Firebase, incluindo autenticação, banco de dados em tempo real, armazenamento em nuvem, hospedagem, mensagens na nuvem e funções em nuvem.",
          image: require("../assets/homeview/icon_0000_firebase.png"),
          alt: "icone node"
        },
        {
          id: 5,
          title: "Figma",
          text: "Estrutura de organização, estilos de camada/texto, organização de elementos e criação de protótipos de baixa ou alta fidelidade.",
          image: require("../assets/homeview/icon_0008_figma.png"),
          alt: "icon adobe xd"
        },
          {
          id: 6,
          title: "AWS",
          text: 'Armazenamento escalável com "Bucket S3", hospedagem de sites estáticos com "CloudFront" e configuração de domínio (DNS) com "Route 53".',
          image: require("../assets/homeview/icon_0009_aws.png"),
          alt: "icon adobe xd"
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
  max-width: 1200px;
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
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  align-items: center;
  column-gap: 32px;
  row-gap: 32px;
}

@media (max-width: 991px) {
  .card-container {
    display: grid;
    grid-template-columns: 100%;
  }
}
</style>
