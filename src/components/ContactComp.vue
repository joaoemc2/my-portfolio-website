<template>
  <div class="contact-comp">
    <div class="card-container">
      <h2 class="title">Entre em Contato!</h2>
      <p class="paragraph">Entre em contato!</p>
      <form class="row" action="https://api.staticforms.xyz/submit" method="post">
        <input type="hidden" name="accessKey" value="9406e597-b16b-417f-a109-0010313560f1" />
        <input type="hidden" name="redirectTo" value="http://www.joaoguimaraes.com.br/#/sucess" />
        <div class="mb-3 col-12 col-lg-6">
          <label for="name-form" class="form-label">Nome:</label>
          <input type="text" name="name" class="form-control" id="name-form" placeholder="Digite seu nome" required />
        </div>
        <div class="mb-3 col-12 col-lg-6">
          <label for="email-form" class="form-label">Email:</label>
          <input type="email" class="form-control" id="email-form" aria-describedby="emailHelp"
            placeholder="Digite seu email" name="email" required />
          <!-- <div id="emailHelp" class="form-text">Email Helper</div> -->
        </div>
        <div class="mb-3 col-12">
          <label for="exampleFormControlTextarea1" class="form-label">Mensagem:</label>
          <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="6"
            placeholder="Digite sua mensagem" required></textarea>
        </div>
        <button type="submit" value="Submit" class="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  Name: "ContactComp",
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
}

.paragraph {
  color: #252044;
  text-align: center;
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

@media(max-width: 991px) {
  .card-container {
    padding: 30px 8px;
    margin: 30px 16px;
    margin-bottom: 60px;
  }
}

@media(min-width: 992px) {
  /* form {
    width: 90vw;
  } */
}
</style>