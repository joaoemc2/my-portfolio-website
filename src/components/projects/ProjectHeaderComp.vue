<template>
  <header class="header-comp">
    <h1 class="main-title">{{ title }}</h1>
    <p class="sub-title">{{ subTitle }}</p>
  </header>
</template>

<script>
export default {
  name: "ProjectHeaderComp",
  props: {
    title: String,
    subTitle: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.header-comp {
  margin-top: 70px;
  margin-bottom: 70px;
}
.main-title {
  text-align: center;
  color: #252044;
  font-size: 32px;
  margin: 50px 0 20px 0;
  font-weight: 500;
}
.sub-title {
  text-align: center;
  color: #252044;
  font-size: 18px;
  margin-bottom: 30px;
}
@media (max-width: 991px) {
  .main-title {
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .header-comp {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>