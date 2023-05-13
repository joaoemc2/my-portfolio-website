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
          Olá, meu nome é João Vitor tenho {{ idade() }} anos e sou
          desenvolvedor de sistemas júnior na
          <a
            class="text-link"
            href="https://ri.animaeducacao.com.br/#"
            target="_blank"
            aria-label="site ânima educação"
            >Ânima Educação</a
          >. Além de minha carreira profissional, tenho uma série de hobbies
          que mantêm minha vida em equilíbrio. Gosto muito de tocar guitarra e,
          às vezes, passo horas tocando minhas músicas favoritas. No meu tempo
          livre, também gosto de estudar astronomia, ler sobre novas descobertas
          no espaço e tentar entender o funcionamento do universo.
        </p>
        <p class="paragraph">
          Atualmente, estou cursando o 8° período de Ciência da Computação no
          UniBH, onde tenho tido a oportunidade de aprender com excelentes
          professores e desenvolver minhas habilidades de programação. A minha
          paixão pela tecnologia me levou a seguir essa carreira, mas acredito
          que meus interesses pessoais também são importantes para minha
          formação como profissional.
        </p>
        <p class="paragraph">
          Além disso, sou um grande fã de Fórmula 1 e assisto a todas as
          corridas. Acho fascinante a complexidade da engenharia dos carros de
          corrida e a estratégia dos times para vencer. Acredito que meu amor
          pela Fórmula 1 também me ensina a importância da determinação, da
          disciplina e da capacidade de trabalhar em equipe - características
          essenciais para qualquer dev. de sucesso.
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
