<template>
  <div class="card-projects">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="image" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
              {{ text }}
            </p>
            <p class="card-text d-flex justify-content-between">
              <small class="text-muted">{{ update }}</small>
              <a class="btn btn-primary" href="">Saiba mais</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProjectSub",
  props: {
    image: String,
    title: String,
    text: String,
    update: String,
  },
};
</script>


<style scoped>
.card {
  max-width: 600px;
  border: none;
  background-color: #ecebf3;
  border-radius: 10px;
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
.btn-primary:hover{
  background-color: #00e6a1;
  border-color:  #00e6a1;
}
</style>