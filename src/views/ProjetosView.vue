<template>
  <div class="projetos">
    <projects-comp />
  </div>
</template>
  
  <script>
import ProjectsComp from "@/components/ProjectsComp.vue";
export default {
  name: "ProjetosView",
  components: { ProjectsComp },
  data() {
    return {};
  },
};
</script>
  <style scoped>
  .projetos{
    min-height: 90vh;
  }
</style>
  