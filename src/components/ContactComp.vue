<template>
  <section class="contact-comp">
    <div class="card-container">
      <p class="paragraph">Deseja entrar em contato?</p>
      <h2 class="title">Mande uma mensagem!</h2>
      <form
        class="row"
        action="https://api.staticforms.xyz/submit"
        method="post"
      >
        <input
          type="hidden"
          name="accessKey"
          value="6cb3c7aa-b41c-4b08-9c76-0aaf8cf45573"
        />
        <input type="hidden" name="redirectTo" :value="baseUrl + '/success'" />
        <div class="mb-3 col-12 col-lg-6">
          <label for="name-form" class="form-label">Nome:</label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="name-form"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div class="mb-3 col-12 col-lg-6">
          <label for="email-form" class="form-label">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email-form"
            aria-describedby="emailHelp"
            placeholder="Digite seu email"
            name="email"
            required
          />
          <!-- <div id="emailHelp" class="form-text">Email Helper</div> -->
        </div>
        <div class="mb-3 col-12">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Mensagem:</label
          >
          <textarea
            class="form-control"
            name="message"
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Digite sua mensagem"
            required
          ></textarea>
        </div>
        <button type="submit" value="Submit" class="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  Name: "ContactComp",
  methods: {
    // redirect() {
    //   setTimeout(() => {
    //     this.$router.push("/success");
    //   }, 2000);
    // },
  },
  data() {
    return {
      // baseUrl: "http://localhost:8080/#",
      baseUrl: "https://www.joaoguimaraes.com.br/#",
    };
  },
};
</script>

<style scoped>
.contact-comp {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-container {
  border: 1px solid #50505030;
  border-radius: 8px;
  padding: 30px;
  margin: 30px;
  margin-bottom: 60px;
  background-color: #fff;
  max-width: 1200px;
}

.title {
  font-size: 32px;
  color: #252044;
  text-align: center;
  margin-bottom: 32px;
}

.paragraph {
  color: #252044;
  text-align: center;
  margin-bottom: 8px;
}

.btn-primary {
  background-color: #00ffb1;
  border-color: #00ffb1;
  color: #252044;
  max-width: 120px;
  margin-left: 12px;
}

.btn-primary:hover {
  background-color: #01e7a2;
  border-color: #01e7a2;
}

@media (max-width: 991px) {
  .card-container {
    padding: 30px 8px;
    margin: 30px 16px;
    margin-bottom: 60px;
  }
}

@media (min-width: 992px) {
  /* form {
    width: 90vw;
  } */
}
</style>
