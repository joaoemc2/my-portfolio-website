<template>
  <div class="project-about">
    <div class="line"></div>
    <h2 class="title">Sobre</h2>
    <p class="about">{{ about }}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectAboutComp",
  props: {
    about: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
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
.about {
  text-align: start;
  color: #252044;
  font-size: 18px;
  margin-bottom: 30px;
}
</style>