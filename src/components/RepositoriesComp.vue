<template>
  <ul class="git-cards">
    <li
      v-for="(item, i) in reposGit"
      :key="item.id"
      :class="{ 'remove-card': item.name == 'joaoemc2' }"
    >
      <div class="git-card">
        <h5 class="git-card-title">{{ item.name }}</h5>
        <p class="git-card-subtitle" :title="item.description">
          {{ item.description }}
        </p>
        <div class="git-card-languages">
          <p
            v-for="(value, language) in reposLanguages[i]"
            :key="language"
            class="git-card-language"
          >
            <strong class="git-card-language-name">{{ language }}: </strong
            >{{ value }}
          </p>
        </div>
        <p>*linhas de codigo</p>
      </div>
    </li>
  </ul>
</template>

<script>
import {
  getGithubRepositories,
  getGithubRepositorieLanguages,
} from "@/services/githubApiService";

export default {
  name: "RepositoriesComp",
  data() {
    return {
      reposGit: null,
      reposLanguages: [],
    };
  },
  mounted() {
    this.loadReposGit();
  },
  methods: {
    async loadReposGit() {
      this.reposGit = await getGithubRepositories();

      for (const repo of this.reposGit) {
        await this.loadReposLanguages(repo.name);
      }
    },
    async loadReposLanguages(repo) {
      let languages = await getGithubRepositorieLanguages(repo);
      this.reposLanguages.push(languages);
    },
  },
};
</script>

<style scoped>
.git-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.git-card {
  max-width: 456px;
  min-height: 184px;
  border-radius: 10px;
  background-color: #ecebf3;
  cursor: pointer;
  padding: 20px 20px 0;
}
.git-card-title {
  color: #5a277b;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.git-card-subtitle {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.git-card-languages {
  display: flex;
  gap: 16px;
}
.git-card-language:nth-child(n + 4) {
  display: none;
}
li {
  list-style: none;
  padding: 0;
}
.remove-card {
  display: none;
}
@media (max-width: 480px) {
  .git-card {
    width: calc(100vw - 32px);
    margin: auto;
  }
}
</style>
