<template>
  <section
    class="main-container d-flex justify-content-center align-items-center"
  >
    <div class="about-me">
      <img
        src="../assets/homeview/astronaut.png"
        alt="cartoon astronauta"
        class="img"
        title="the cake is a lie"
      />
      <div class="title-container">
        <div class="line"></div>
        <h2 class="title">Sobre Mim</h2>
        <p class="paragraph">
          Olá, me chamo João Vitor Pereira Guimarães, tenho {{ idade() }} anos,
          estou cursando o 8° período em Ciência da Computação e trabalho na
          <a
            class="text-link"
            href="https://ri.animaeducacao.com.br/#"
            target="_blank"
            aria-label="site ânima educação"
            >Ânima Educação</a
          >
          como Desenvolvedor de Sistemas Júnior.
        </p>
        <p class="paragraph">
          Nas horas vagas costumo de praticar guitarra, jogar videogame e ler. Gosto de passar a grande maioria das minhas horas livres vendo conteúdo
          sobre astrofísica/cosmologia. Ah, também adoro passar as manhãs de
          domingo vendo Formula 1.
        </p>
        <p class="paragraph">
          Como disse aqui em cima, adoro qualquer conteúdo sobre o nosso
          universo, minha série favorita? Com certeza é Cosmos! Tanto faz se é
          com o Neil deGrasse ou com o Carl Sagan, as duas versões são
          igualmente incríveis!
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
