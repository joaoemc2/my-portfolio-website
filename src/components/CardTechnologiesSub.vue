<template>
  <div class="card-technologies">
    <div class="title-text">
      <h3 class="title">{{ title }}</h3>
      <p class="paragraph">{{ text }}</p>
    </div>
    <img :src="image" :alt="alt" class="image img-fluid" />
  </div>
</template>

<script>
export default {
  name: "CardTechnologiesSub",
  props: {
    title: String,
    text: String,
    image: String,
    alt: String
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.card-technologies {
  min-height: 200px;
  max-width: 500px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
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
  width: 64px;
  margin: 10px;
  transition: 0.3s;
  border-radius: 12px;
}
.image:hover {
  transform: scale(1.2);
}
@media screen and (min-width: 992px) {
  .card-technologies {
    min-width: 450px;
  }
}
</style>
