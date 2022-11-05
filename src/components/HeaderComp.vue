<template>
  <div class="header">
    <div class="content">
      <div class="texts-icons">
        <p class="paragraph-caps">JOÃO VITOR GUIMARAES, DESENVOLVEDOR WEB</p>
        <h1 class="title">Olá, Obrigado por visitar meu site :)</h1>
        <p class="paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
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
.img {
  width: 300px;
  margin-left: 50px;
}
@media(max-width: 991px){
  .header{
    padding-top: 40px;
    padding-bottom: 170px;
  }
  .content{
    flex-direction: column;
  }
  .paragraph-caps, .title, .paragraph{
    text-align: center;
    margin-right: 0 !important;
    max-width: none;
  }
  .img{
    margin: 0;
    margin-top: 30px;
    width: 250px;
  }
  .texts-icons{
    padding: 0 30px;
    max-width: 600px;
  }
}
</style>
