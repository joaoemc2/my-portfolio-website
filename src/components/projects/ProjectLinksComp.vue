<template>
  <div class="project-links mb-5">
    <div class="line"></div>
    <h2 class="title">Links</h2>
    <div v-if="links[2]" class="links-container">
      <a class="bi bi-browser-chrome" :href="links[2]" target="_blank"></a>
      <a class="link-external" :href="links[2]" target="_blank">Visitar Site</a>
    </div>
    <div class="links-container">
      <a class="bi bi-github" :href="links[0]" target="_blank"></a>
      <a class="link-external" :href="links[0]" target="_blank"
        >GitHub - Código fonte</a
      >
    </div>
    <div class="links-container">
      <a class="bi bi-behance" :href="links[1]" target="_blank"></a>
      <a class="link-external" :href="links[1]" target="_blank"
        >GitHub - Protótipo e Screenshots</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "projectsLinksComp",
  props: {
    links: Array,
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
.links-container {
  display: flex;
  align-items: center;
}
.bi {
  font-size: 24px;
  margin-right: 12px;
  color: #252044;
}
.link-external {
  text-decoration: none;
  color: #252044;
}
.bi:hover,
.link-external:hover {
  color: #00db9a;
}
</style>