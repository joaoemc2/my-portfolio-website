<template>
  <div class="carousel-comp">
    <div class="line"></div>
    <h2 class="title">Screenshots</h2>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="imges[0]" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img :src="imges[1]" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img :src="imges[2]" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselComp",
  props: {
    imges: Array,
  },
};
</script>

<style scoped>
.carousel-comp{
  margin-bottom: 30px;
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
  margin-bottom: 30px;
}
</style>