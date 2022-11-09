<template>
  <div class="main">
    <div class="img-container d-flex justify-content-center">
      <img class="img-title img-fluid mt-4" src="../assets/awards.png" alt="" />
    </div>
    <h1 class="title mt-4">Certificados: Cursos & Eventos</h1>
    <div class="row d-flex justify-content-center">
      <a
        v-for="image in images"
        :key="image.url"
        target="_blank"
        :href="image.url"
        class="card col-12 col-lg-6 col-xl-4 m-4"
      >
        <img :src="image.url" class="card-img-top mt-3" :alt="image.alt" />
        <div class="overlay"></div>
        <div class="card-body">
          <h5 class="card-title">{{ image.title }}</h5>
          <p class="card-text mt-3 mb-3">
            {{ image.description }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "CertificadosView",
  components: {},
  data() {
    return {
      images: [
        {
          url: "http://joaoguimaraes.com/img-bank/certificado_google_garage.png",
          alt: "Certificado Google Garage",
          title: "Marketing Digital - Google",
          description:
            "Certificação de principios básicos de marketing digital feito pela Google como duração de 40 horas.",
        },
        {
          url: "http://joaoguimaraes.com/img-bank/certificado_healt_lab.png",
          alt: "Certificado Healt Lab",
          title: "Healt Lab 4.0 - UniBH",
          description:
            "Certificado de participação de pesquisa e inicialização científica no Programa institucional de Inicialização Científica e Tecnológica - UniBH.",
        },
        {
          url: "http://joaoguimaraes.com/img-bank/certificado_adobe_xd.jpg",
          alt: "Certificado adobe Xd - Udemy",
          title: "Adobe Xd - Udemy",
          description:
            "Curso de Adobe Xd e praticas UX/UI feito na Udemy com duração de 8 horas.",
        },
        {
          url: "http://joaoguimaraes.com/img-bank/certificado_databricks_udemy.jpg",
          alt: "Certificado Databricks - Udemy",
          title: "Databricks - Udemy",
          description:
            "Curso de unificação e análise de dados com Databricks realizado a Udemy",
        },
        {
          url: "http://joaoguimaraes.com/img-bank/participação_hackahub_2022.png",
          alt: "Certificado de participação hackahub 2022",
          title: "Participação Hackahub 2022 - UniBH",
          description:
            "Certificado de participação da primeira etapa do Hackahub - UniBH no segundo semestre de 2022.",
        },
        {
          url: "http://joaoguimaraes.com/img-bank/certificado_de_finalista_hackahub_2022.png",
          alt: "Certificado de finalista do Hackahub 2022/2 - UniBH",
          title: "Finalista Hackahub 2022 - UniBH",
          description:
            "Certificado de finalista do Hackahub edição 2022/2 na area de TI & Computação.",
        },
        {
          url: "http://joaoguimaraes.com/img-bank/certificado_git_e_github.jpg",
          alt: "Certificado Git e GitHub",
          title: "Git e GitHub - Udemy",
          description:
            "Mini curso de Git e GitHub feito na Udemy com duração de 1 hora.",
        },

        {
          url: "http://joaoguimaraes.com/img-bank/certificado_html_e_css.jpg",
          alt: "Certificado HTML e CSS",
          title: "HTML & CSS - Udemy",
          description:
            "Curso realizado na Udemy contendo os principios de HTML e CSS com duração de 7 horas.",
        },
        {
          url: "http://joaoguimaraes.com/img-bank/certificado_pandas.png",
          alt: "Certificado Pandas",
          title: "Pandas - Kaggle",
          description:
            "Curso com os principios basicos da biblioteca para Python: Pandas.",
        },
        {
          url: "http://joaoguimaraes.com/img-bank/certificado_cpanel.png",
          alt: "Certificado cpanel - HostGator Academy",
          title: "cPanel - HostGator",
          description:
            "Curso feito na HostGator Academy com o objetivo de ter uma primeira visão de como ultilizar o cPanel.",
        },
        {
          url: "http://joaoguimaraes.com/img-bank/certificado_python.png",
          alt: "Certificado Python",
          title: "Python - Kaggle",
          description: "Curso com os principios basicos da Linguagem Python",
        },
        {
          url: "http://joaoguimaraes.com/img-bank/curso_de_extensão_ilustração_digital.png",
          alt: "Certificado de extenção ilustração digital",
          title: "Ilustração Digital - UniBH",
          description:
            "Curso de extenção de Ilustração Digital para jogos com carga horaria de 16 horas.",
        },
        {
          url: "http://joaoguimaraes.com/img-bank/curso_de_extensão_inteligência_artificial.png",
          alt: "Certificado de extenção inteligência artificial",
          title: "Inteligência Artificial - UniBH",
          description:
            "Curso de extenção de Inteligência Artificial com Java Script.",
        },
        {
          url: "http://joaoguimaraes.com/img-bank/projeto_de_extensão_tech_week_ii.png",
          alt: "Certificado tech Week II",
          title: "Tech Week II - São Judas",
          description:
            "Participação no projeto de extenção da Teck Week II - São Judas.",
        },
      ],
    };
  },
  methods: {},
};
</script>
  <style scoped>
.main {
  padding: 20px 40px;
  background-color: #252044;;
}
.title {
  font-size: 32px;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
}

.img-title {
  width: 100px;
}
.card {
  background-color: #252044;
  border: 1px solid rgba(0, 0, 0, 0.479);
}
.card-title {
  color: #00ffb1;
}
.card-text {
  color: #fff;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #252044;
}
.card:hover .overlay {
  opacity: 0.3;
}
a {
  text-decoration: none;
}
</style>