<template>
  <div class="repositories-comp">
    <div class="title-container">
      <div class="line"></div>
      <h2 class="title">Repositórios</h2>
    </div>
    <p class="paragraph">Meus repositórios no GitHub.</p>
    <ul class="git-cards">
      <li
        v-for="(item, i) in reposGit"
        :key="item.id"
        :class="{ 'remove-card': item.name == 'joaoemc2' }"
      >
        <div
          class="git-card"
          @click="goToGithub(item.html_url)"
          :style="{ borderBottomColor: obterCorPorStatus(item.language) }"
        >
          <h5 class="git-card-title">{{ item.name }}</h5>
          <p class="git-card-subtitle" :title="item.description">
            {{ item.description }}
          </p>
          <ul class="git-card-languages">
            <li
              v-for="(value, language) in reposLanguages[i]"
              :key="language"
              class="git-card-language"
            >
              <div
                class="git-card-language-circle"
                :style="{ backgroundColor: obterCorPorStatus(language) }"
              ></div>
              <p class="git-card-language-name">
                <strong class="git-card-language-value">{{ language }}: </strong
                >{{ value }}
              </p>
            </li>
          </ul>
          <p class="git-card-languages-source">*linhas de código</p>
          <div class="git-card-footer">
            <p class="git-card-date">
              Última atualização: {{ converterData(item.pushed_at) }}
            </p>
            <i class="bi bi-github"></i>
          </div>
        </div>
      </li>
    </ul>
  </div>
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
    this.obterCorPorStatus();
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
    goToGithub(url) {
      window.open(url, "_blank");
    },
    converterData(dataString) {
      const data = new Date(dataString);

      const dia = String(data.getDate()).padStart(2, "0");
      const mes = String(data.getMonth() + 1).padStart(2, "0");
      const ano = data.getFullYear();

      const novaDataFormatada = `${dia}-${mes}-${ano}`;

      return novaDataFormatada;
    },
    obterCorPorStatus(status) {
      switch (status) {
        case "HTML":
          return "#E34C26";
        case "CSS":
          return "#563D7C";
        case "SCSS":
          return "#C6538C";
        case "JavaScript":
          return "#F1E05A";
        case "TypeScript":
          return "#3178C6";
        case "Vue":
          return "#41B883";
        default:
          return "#1C3A53";
      }
    },
  },
};
</script>

<style scoped>
.repositories-comp {
  padding: 70px 30px 30px 30px;
  width: 100%;
  max-width: 1200px;
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
  border-bottom: 14px solid;
  transition: 0.5s;
}
.git-card:hover {
  transform: scale(1.03);
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
  padding: 0;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.git-card-language {
  display: flex;
  justify-content: center;
  align-items: center;
}
.git-card-language:nth-child(n + 4) {
  display: none;
}
.git-card-language-circle {
  width: 10px;
  height: 10px;
  border-radius: 500px;
  margin-right: 7px;
}
.git-card-language-name {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
}
.git-card-languages-source {
  font-size: 11px;
  margin: 4px 0 0px;
}
.git-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.git-card-date {
  margin: 0 0 8px;
}
.bi-github {
  font-size: 32px;
  margin: 0;
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
