<template>
  <ul class="git-cards">
    <p>sadas</p>
    <li
      v-for="item in reposGit"
      :key="item.id"
      :class="{ 'remove-card': item.name == 'joaoemc2' }"
    >
      <div class="git-card">
        <h5 class="git-card-title">{{ item.name }}</h5>
        <p class="git-card-subtitle">{{ item.description }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { obterGithubRepositories } from "@/services/githubApiService";

export default {
  name: "RepositoriesComp",
  data() {
    return {
      reposGit: null,
    };
  },
  mounted() {
    this.loadReposGit();
    console.log("data", this.reposGit);
  },
  methods: {
    async loadReposGit() {
      this.reposGit = await obterGithubRepositories();
    },
  },
};
</script>

<style scoped>
.git-card {
  max-width: 456px;
  min-height: 184px;
  border-radius: 10px;
  background-color: #ecebf3;
}

li {
  list-style: none;
  padding: 0;
}
.remove-card {
  display: none;
}
@media (max-width: 991px) {
}
</style>
