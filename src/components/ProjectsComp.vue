<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="projects">
      <div class="title-container">
        <div class="line"></div>
        <h1 class="title">Projetos</h1>
      </div>
      <p class="paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the
      </p>
      <div class="card-container">
        <div class="card-col">
          <card-project-sub
            class="my-card"
            :title="cards[0].title"
            :text="cards[0].text"
            :image="cards[0].image"
            :update="cards[0].update"
          />
          <card-project-sub
            class="my-card"
            :title="cards[0].title"
            :text="cards[0].text"
            :image="cards[0].image"
            :update="cards[0].update"
          />
        </div>
        <div class="card-col">
          <card-project-sub
            class="my-card"
            :title="cards[0].title"
            :text="cards[0].text"
            :image="cards[0].image"
            :update="cards[0].update"
          />
          <card-project-sub
            class="my-card"
            :title="cards[0].title"
            :text="cards[0].text"
            :image="cards[0].image"
            :update="cards[0].update"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProjectSub from "./CardProjectSub.vue";
export default {
  components: {
    CardProjectSub,
  },

  name: "ProjectsComp",
  data() {
    return {
      cards: [
        {
          title: "Projeto 1",
          text: "aklsjdaksjdk kjasdkajsdkj sakd kajsd jaksdjkasjkdjaks kasjdklasjdkjaskdj sakdjaksjdlaksjd j jskdkajsdlkasj kjad",
          image: require("@/assets/homeview/cover-test.png"),
          update: "12-09-2022",
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects {
  padding: 70px 30px 30px 30px;
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
  display: flex;
  justify-content: space-evenly;
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