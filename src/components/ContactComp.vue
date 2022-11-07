<template>
  <div class="contact-comp">
    <div class="card-container">
      <h2 class="title"></h2>
      <p class="paragraph"></p>
      <form action="https://api.staticforms.xyz/submit" method="post">
        <input type="hidden" name="accessKey" value="9406e597-b16b-417f-a109-0010313560f1">
        <input type="hidden" name="redirectTo" value="http://localhost:8080/#/sucess">
        <div class="mb-3">
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
        <div class="mb-3">
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
        <div class="mb-3">
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
        <button type="submit" value="Submit" class="btn btn-primary">Enviar</button>
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
</style>