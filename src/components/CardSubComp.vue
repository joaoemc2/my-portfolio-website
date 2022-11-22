<template>
  <div class="card my-3 mx-3">
    <img :src="image" class="image img-fluid rounded-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ text }}
      </p>
      <p class="card-text d-flex justify-content-between">
        <small class="text-muted">{{ update }}</small>
        <router-link class="router" :to="link">
          <a class="btn btn-primary">Ver mais</a>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSubComp",
  props: {
    image: String,
    title: String,
    text: String,
    update: String,
    link: String,
  }
};
</script>


<style scoped>
.card {
  width: 500px;
  border: none;
  background-color: #ecebf3;
  border-radius: 10px;
  min-height: 500px;
  padding: 0;
}

.card-title {
  margin-top: 10px;
  color: #252044;
}

.card-text {
  color: #252044;
}

.btn-primary {
  background-color: #00ffb1;
  border-color: #00ffb1;
  color: #252044;
  font-weight: 500;
}

.router {
  color: #252044;
}

.btn-primary:hover {
  background-color: #00e6a1;
  border-color: #00e6a1;
}

.card {
  transition: 0.3s;
}

@media (min-width: 992px) {
  .card:hover {
    transform: scale(1.05);
  }
}
</style>