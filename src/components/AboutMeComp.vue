<template>
  <div class="about-me">
    <img src="../assets/homeview/astronaut.png" alt="" class="img" />
    <div class="title-container">
      <div class="line"></div>
      <h1 class="title">Sobre Mim</h1>
      <p class="paragraph">
        Me chamo João Vitor Pereira Guimarães, tenho 23 anos, estou
        cursando o 8° período em Ciência da Computação e trabalho
        integralmente na
        <a
          class="text-link"
          href="https://ri.animaeducacao.com.br/#"
          target="_blank"
          >Ânima Educação</a
        >
        como Analista Júnior.
      </p>
      <p class="paragraph">
        Nas horas vagas gosto de praticar guitarra, jogar videogame e ler, porém
        passo a grande maioria das minhas horas livres vendo conteúdo sobre
        astrofísica/cosmologia. Ah, também adoro passar as manhãs de domingo
        vendo Formula 1.
      </p>
      <p class="paragraph">
        Como disse aqui em cima, adoro qualquer conteúdo sobre o nosso universo,
        minha série favorita? Com certeza é Cosmos! Tanto faz se é com o Neil
        deGrasse ou com o Carl Sagan, as duas versões são igualmente incríveis!
        Estou iniciando também um perfil no Instagram chamado
        <a
          class="text-link"
          href="https://www.instagram.com/astronomy.pic/"
          target="_blank"
          >@astronomy.pic</a
        >
        onde tento trazer algumas das incríveis imagens do nosso cosmos, além de
        explicar um pouco sobre elas, dá uma conferida lá 😁.
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
</template>

<script>
export default {
  Name: "AboutMeComp",
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
}

.img {
  position: relative;
  top: -260px;
  width: 400px;
  margin-left: 20px;
  transition: .3s;
}
.img:hover{
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
  text-decoration: none;
  color: #00ffb1;
  font-weight: 500;
  transition: 0.3s;
}
.text-link:hover {
  color: #02e09e;
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