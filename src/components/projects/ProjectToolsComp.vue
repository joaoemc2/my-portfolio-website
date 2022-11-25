<template>
  <div class="project-tools">
    <div class="line"></div>
    <h2 class="title">Ferramentas Utilizadas</h2>
    <div class="tool-icons">
      <img
        v-for="image in toolsImages"
        :key="image"
        :src="image"
        class="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectToolsComp",
  props: {
    toolsImages: Array,
  },
  Data() {
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
  margin-bottom: 16px;
}
.tool-icons {
  display: flex;
  justify-content: start;
  margin-bottom: 30px;
}
.image {
  width: 40px;
  margin-right: 22px;
}
</style>