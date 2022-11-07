<template>
  <div class="header">
    <div class="content">
      <div class="texts-icons">
        <p class="paragraph-caps">JOÃO VITOR GUIMARAES, DEV. FRONT-END</p>
        <h1 class="title">Olá, Obrigado por visitar meu site :)</h1>
        <p class="paragraph">
          Aqui você pode ver um pouco sobre mim, meus projetos e habilidades.
          Fique a vontade para explorar tudo!
        </p>
        <div class="icons">
          <a
            class="bi bi-linkedin"
            href="https://www.linkedin.com/in/joaoemc2/"
            target="_black"
          ></a>
          <a
            class="bi bi-github"
            href="https://github.com/joaoemc2"
            target="_black"
          ></a>
          <a
            class="bi bi-behance"
            href="https://www.behance.net/joaoemc2"
            target="_black"
          ></a>
          <a
            class="bi bi-instagram"
            href="https://www.instagram.com/joaoemc2/"
            target="_black"
          ></a>
          <a
            class="bi bi-telegram"
            href="https://t.me/joaoemc2"
            target="_black"
          ></a>
          <a
            class="bi bi-whatsapp"
            href="https://api.whatsapp.com/send?phone=5531971602258"
            target="_black"
          ></a>
        </div>
      </div>
      <img class="img" src="../assets/homeview/eu.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "headerComp",
};
</script>

<style scoped>
.header {
  background-color: #252044;
  padding-top: 90px;
  padding-bottom: 260px;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.paragraph-caps {
  color: #ffffff;
  opacity: 0.7;
  margin-bottom: 18px;
}
.title {
  color: #00ffb1;
  max-width: 400px;
  margin-bottom: 28px;
}
.paragraph {
  color: #ffffff;
  max-width: 500px;
  opacity: 0.9;
  font-size: 14px;
}
.icons {
  margin-bottom: 16px;
}
.bi {
  color: #fff;
  margin-right: 24px;
  font-size: 20px;
}
.bi:hover {
  color: #00ffb1;
}
.img {
  width: 300px;
  margin-left: 50px;
}
@media (max-width: 991px) {
  .header {
    padding-top: 40px;
    padding-bottom: 170px;
  }
  .content {
    flex-direction: column;
  }
  .paragraph-caps,
  .title,
  .paragraph {
    text-align: center;
    margin-right: 0 !important;
    max-width: none;
  }
  .img {
    margin: 0;
    margin-top: 30px;
    width: 250px;
  }
  .texts-icons {
    padding: 0 30px;
    max-width: 600px;
  }
  .icons {
    display: flex;
    justify-content: center;
  }
  .bi {
    margin: 0px 12px;
  }
}
</style>
