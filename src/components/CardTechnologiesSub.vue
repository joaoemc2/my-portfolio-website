<template>
  <div class="card-technologies">
    <div class="title-text">
      <h2 class="title">{{ title }}</h2>
      <p class="paragraph">{{ text }}</p>
    </div>
    <img :src="image" alt="" class="image img-fluid" />
  </div>
</template>

<script>
export default {
  name: "CardTechnologiesSub",
  props: {
    title: String,
    text: String,
    image: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.card-technologies {
  min-height: 160px;
  max-width: 500px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}
.title-text {
  max-width: 320px;
  margin-right: 10px;
}
.title {
  font-size: 20px;
}
.paragraph {
  font-size: 14px;
}
.image {
  width: 60px;
  height: 60px;
  margin: 10px;
  transition: 0.3s;
}
.image:hover{
  transform: scale(1.2);
}
@media (max-width: 991px) {
}
</style>