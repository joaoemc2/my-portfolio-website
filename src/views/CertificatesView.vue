<template>
  <div
    class="certificados-main d-flex justify-content-center align-items-center"
  >
    <div class="certificados">
      <div class="title-container">
        <div class="line"></div>
        <h1 class="title">Certificados</h1>
      </div>
      <p class="paragraph">Certificados, participações e cursos de extenção.</p>
      <div
        class="card-container row d-flex justify-content-center align-items-center"
      >
        <card-sub-comp
          v-for="card in cards"
          :key="card.id"
          class="col-12 col-md-6 col-lg-4"
          :title="card.title"
          :text="card.text"
          :image="card.image"
          :update="card.update"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardSubComp from "@/components/CardSubComp.vue";
export default {
  components: {
    CardSubComp,
  },

  name: "CertificatesView",
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Marketing Digital - Google",
          text: "Certificação de principios básicos de marketing digital feito pela Google como duração de 40 horas.",
          image: require("@/assets/certificados/certificado_google_garage.png"),
          update: "08-12-2022",
        },
        {
          id: 2,
          title: "Healt Lab 4.0 - UniBH",
          text: "Certificado de participação no Programa institucional de Inicialização Científica e Tecnológica - UniBH.",
          image: require("@/assets/certificados/certificado_healt_lab.png"),
          update: "08-12-2022",
        },
        {
          id: 3,
          title: "TDC Connections - Belo Horizonte",
          text: "Participação na Trilha UX Design do TDC 2023 CONNECTIONS, realizado em 23 de Março de 2023, no UniBH - Campus Buritis em Belo Horizonte.",
          image: require("@/assets/certificados/certificado_tdc_connections.png"),
          update: "23-03-2023",
        },
        {
          id: 15,
          title: "Figma - Udemy",
          text: "Curso de prototipação com Figma realizado a Udemy.",
          image: require("@/assets/certificados/certificado_figma.png"),
          update: "04-05-2023",
        },
        {
          id: 4,
          title: "cPanel - HostGator",
          text: "Curso feito na HostGator Academy com o objetivo de ter uma primeira visão de como ultilizar o cPanel.",
          image: require("@/assets/certificados/certificado_cpanel.png"),
          update: "10-02-2022",
        },
        {
          id: 5,
          title: "Databricks - Udemy",
          text: "Curso de unificação e análise de dados com Databricks realizado a Udemy.",
          image: require("@/assets/certificados/certificado_databricks_udemy.png"),
          update: "19-09-2022",
        },
        {
          id: 6,
          title: "Finalista Hackahub 2022 - UniBH",
          text: "Certificado de finalista do Hackahub edição 2022/2 na area de TI & Computação.",
          image: require("@/assets/certificados/certificado_de_finalista_hackahub_2022.png"),
          update: "2022/02",
        },
        {
          id: 7,
          title: "Git e GitHub - Udemy",
          text: "Mini curso de Git e GitHub feito na Udemy com duração de 1 hora.",
          image: require("@/assets/certificados/certificado_git_e_github.png"),
          update: "26-10-2022",
        },
        {
          id: 8,
          title: "HTML & CSS - Udemy",
          text: "Curso realizado na Udemy contendo os principios de HTML e CSS com duração de 7 horas.",
          image: require("@/assets/certificados/certificado_html_e_css.png"),
          update: "09-02-2022",
        },
        {
          id: 9,
          title: "Python - Kaggle",
          text: "Curso com os principios basicos da Linguagem Python.",
          image: require("@/assets/certificados/certificado_python.png"),
          update: "11-09-2022",
        },
        {
          id: 10,
          title: "Pandas - Kaggle",
          text: "Curso com os principios basicos da biblioteca para Python: Pandas.",
          image: require("@/assets/certificados/certificado_pandas.png"),
          update: "17-09-2021",
        },
        {
          id: 11,
          title: "Ilustração Digital - UniBH",
          text: "Curso de extenção de Ilustração Digital para jogos com carga horaria de 16 horas.",
          image: require("@/assets/certificados/curso_de_extensao_ilustração_digital.png"),
          update: "04-12-2020",
        },
        {
          id: 12,
          title: "Inteligência Artificial - UniBH",
          text: "Curso de extenção de Inteligência Artificial com Java Script.",
          image: require("@/assets/certificados/curso_de_extensao_inteligencia_artificial.png"),
          update: "25-11-2020",
        },
        {
          id: 13,
          title: "Participação Hackahub 2022 - UniBH",
          text: "Certificado de participação da primeira etapa do Hackahub - UniBH no segundo semestre de 2022.",
          image: require("@/assets/certificados/participacao_hackahub_2022.png"),
          update: "2022/02",
        },
        {
          id: 14,
          title: "Tech Week II - São Judas",
          text: "Participação no projeto de extenção da Teck Week II - São Judas.",
          image: require("@/assets/certificados/projeto_de_extensao_tech_week_ii.png"),
          update: "17-08-2021",
        },
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted: function () {
    this.scrollToTop();
  },
};
</script>

<style scoped>
.certificados-main {
  background-color: #f8f8f8;
}

.certificados {
  padding: 50px 30px 30px 30px;
  width: 100%;
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
