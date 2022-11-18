<template>
  <div class="email-confirm">
    <h2 class="title">Mensagem enviada com sucesso!</h2>
    <img class="img" src="@/assets/emailconfirmview/check.png" alt="confirm_icon" />
    <h3 class="sub-title">
      Obrigado por entrar em contato, te responderei o mais rápido possível.
    </h3>
    <router-link class="btn btn-primary router" to="/">Voltar para o inicio</router-link>
  </div>
</template>

<script>
export default {
  name: "EmailConfirmView",
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
.email-confirm {
  width: 100%;
  height: 100vh;
  background-color: #252044;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.title {
  color: #00ffb1;
  font-size: 28px;
  margin-bottom: 26px;
  max-width: 300px;
  text-align: center;
}
.img {
  width: 200px;
  margin-bottom: 26px;
}
.sub-title {
  color: #00ffb1;
  font-size: 22px;
  margin-bottom: 26px;
  max-width: 600px;
  text-align: center;
}
.btn-primary {
  background: none;
  border: 1px solid #00ffb1;
  color: #00ffb1;
  transition: .3s;
}
.btn-primary:hover {
  background-color: #00ffb1;
  color: #252044;
}
.router{
  text-decoration: none;
  color: #00ffb1;
  transition: .3s;
}
.router:hover{
  color: #252044;
}
</style>



<!-- #00FFB1 -->