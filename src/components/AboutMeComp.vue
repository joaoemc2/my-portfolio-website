<template>
  <section
    class="main-container d-flex justify-content-center align-items-center"
  >
    <div class="about-me">
      <img
        src="../assets/homeview/astronaut.webp"
        alt="cartoon astronauta"
        class="img"
        title="the cake is a lie"
      />
      <div class="title-container">
        <div class="line"></div>
        <h2 class="title">Sobre Mim</h2>
        <p class="paragraph">
          Olá, meu nome é João Vitor tenho {{ idade() }} anos e sou formado em
          Ciência da Computação. Atualmente, trabalho como desenvolvedor na
          <a
            class="text-link"
            href="https://ri.animaeducacao.com.br/#"
            target="_blank"
            aria-label="site ânima educação"
            >Ânima Educação</a
          >, onde contribuo para projetos na área educacional.
        </p>
        <p class="paragraph">
          Além do meu trabalho, tenho alguns hobbies variados. Gosto de jogar
          videogame para relaxar e sempre tenho um livro por perto para
          aproveitar meu tempo livre. Também gosto bastante de estudar
          astronomia, ler sobre novas descobertas no espaço e tentar entender o
          funcionamento do nosso universo.
        </p>
        <p class="paragraph">
          Para aliviar a mente gosto de tocar guitarra, meu estilo musical
          favorito é o rock e heavy metal clássico. Pra mim, música alta é a
          melhor meditação! Também sou fã de Formula 1 e WEC.
        </p>
        <p class="paragraph">
          Em resumo, sou um entusiasta da tecnologia que busca equilibrar o
          universo da programação com uma variedade de interesses pessoais, que
          vão desde tecnologia até o entretenimento e hobbies diversos. Se
          quiser trocar ideias sobre qualquer um desses tópicos, estou à
          disposição!
        </p>
        <div class="d-flex justify-content-end">
          <p class="stephen">
            "O desejo profundo da humanidade pelo conhecimento é justificativa
            suficiente para nossa busca contínua."
          </p>
        </div>
        <div class="d-flex justify-content-end">
          <p class="stephen">Stephen Hawking</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  Name: "AboutMeComp",
  data() {
    return {};
  },
  methods: {
    idade() {
      let dataFinal = new Date();
      let dataInicial = new Date("1999-01-06");

      let diferencaEmAnos = dataFinal.getFullYear() - dataInicial.getFullYear();
      if (
        dataFinal.getMonth() < dataInicial.getMonth() ||
        (dataFinal.getMonth() === dataInicial.getMonth() &&
          dataFinal.getDate() < dataInicial.getDate())
      ) {
        diferencaEmAnos--;
      }
      return diferencaEmAnos;
    },
  },
};
</script>

<style scoped>
.about-me {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  height: -300px;

  width: 100%;
  max-width: 1200px;
}

.img {
  position: relative;
  top: -260px;
  width: 400px;
  margin-left: 20px;
  transition: 0.3s;
}

.img:hover {
  transform: scale(1.1);
}

.title-container {
  position: relative;
  top: -260px;
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
  width: 100%;
  max-width: 1920px;
  margin-top: 30px;
}

.stephen {
  background-color: #00ffb1;
  color: #252044;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  top: 90px;
  text-align: right;
}

.text-link {
  /* text-decoration: none; */
  /* color: #00ffb1; */
  font-weight: 600;
  transition: 0.3s;
  color: #252044;
}
.text-link:hover {
  color: #00ffb1;
}

@media (max-width: 991px) {
  .about-me {
    padding-left: 30px;
    padding-right: 30px;
  }
  .img {
    width: 280px;
    top: -180px;
  }
  .title-container {
    position: relative;
    top: -180px;
    align-self: start;
  }
}
</style>
