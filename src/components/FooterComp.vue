<template>
  <footer class="footer-comp">
    <div class="footer-container">
      <div class="icons">
        <a
          class="bi bi-linkedin"
          href="https://www.linkedin.com/in/joaoemc2/"
          target="_black"
          aria-label="visitar linkedin"
        ></a>
        <a
          class="bi bi-github"
          href="https://github.com/joaoemc2"
          target="_black"
          aria-label="visitar github"
        ></a>
        <a
          class="bi bi-behance"
          href="https://www.behance.net/joaoemc2"
          target="_black"
          aria-label="visitar behance"
        ></a>
        <a
          class="bi bi-instagram"
          href="https://www.instagram.com/joao.emc2/"
          target="_black"
          aria-label="visitar instagram"
        ></a>
        <a
          class="bi bi-telegram"
          href="https://t.me/joaoemc2"
          target="_black"
          aria-label="contato no telegram"
        ></a>
        <a
          class="bi bi-whatsapp"
          href="https://api.whatsapp.com/send?phone=5531971602258"
          target="_black"
          aria-label="contato no whatsapp"
        ></a>
      </div>
      <div class="about">
        <div class="nav-link">
          <router-link aria-label="ir para inicio" class="router" to="/"
            >Inicio</router-link
          >
        </div>
        <!-- <div class="nav-link">
          <router-link
            aria-label="ir para projetos"
            class="router"
            to="/projetos"
            >Projetos</router-link
          >
        </div> -->
        <div class="nav-link">
          <router-link
            aria-label="ir para certificados"
            class="router"
            to="/certificados"
            >Certificados</router-link
          >
        </div>
      </div>
      <hr class="line" />
      <p class="copyright">João Vitor Pereira Guimarães - v {{ version }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp",
  props: {
    version: String,
  },
};
</script>

<style scoped>
.footer-comp {
  background-color: #252044;
  padding-top: 30px;
  padding-bottom: 18px;
}
.icons {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}
.bi {
  color: #fff;
  margin: 0 12px;
  font-size: 20px;
}
.bi:hover {
  color: #00ffb1;
}
.about {
  display: flex;
  justify-content: center;
}
.nav-link {
  width: 140px;
  display: flex;
  justify-content: center;
}
.router {
  color: #fff;
  text-decoration: none;
}
.router:hover {
  color: #06dd9d;
}
.line {
  color: #ffffff80;
}
.copyright {
  color: #fff;
  text-align: center;
  margin-bottom: 0;
}
</style>
