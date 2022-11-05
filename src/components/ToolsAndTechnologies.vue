<template>
  <div class="main-container d-flex justify-content-center align-items-center">
    <div class="tools-and-technologies">
      <div class="title-container">
        <div class="line"></div>
        <h1 class="title">Ferramentas e Tecnologias</h1>
      </div>
      <p class="paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the
      </p>
      <div class="card-container">
        <div class="card-col">
          <card-technologies-sub
            class="my-card"
            :title="cardTitle"
            :text="cardText"
            :image="cardImage"
          />
          <card-technologies-sub
            class="my-card"
            :title="cardTitle"
            :text="cardText"
            :image="cardImage"
          />
        </div>
        <div class="card-col">
          <card-technologies-sub
            class="my-card"
            :title="cardTitle"
            :text="cardText"
            :image="cardImage"
          />
          <card-technologies-sub
            class="my-card"
            :title="cardTitle"
            :text="cardText"
            :image="cardImage"
          />
        </div>
        <div class="card-col">
          <card-technologies-sub
            class="my-card"
            :title="cardTitle"
            :text="cardText"
            :image="cardImage"
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
      cardTitle: "Vue.Js",
      cardText:
        "One disadia asdasd asd asds asd asdas d  sadasdasdsd asdas asdas",
      cardImage: require("../assets/homeview/vueicon.png"),
    };
  },
};
</script>

<style scoped>
.main-container {
  background-color: #ecebf3;
}
.tools-and-technologies {
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