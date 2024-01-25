<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="navbar-brand">
        <router-link aria-label="ir para inicio" class="router-title" to="/"
          >João V Guimarães</router-link
        >
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <div class="nav-link">
            <router-link aria-label="ir para inicio" class="router" to="/"
              >Inicio</router-link
            >
          </div>
          <div class="nav-link">
            <router-link
              aria-label="ir para projetos"
              class="router"
              to="/projetos"
              >Projetos</router-link
            >
          </div>
          <div class="nav-link">
            <router-link
              aria-label="ir para certificados"
              class="router"
              to="/certificados"
              >Certificados</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarComp",
  data() {
    return {};
  },
};
</script>

<style scoped>
.navbar {
  background-color: #252044;
}
.navbar-brand {
  color: #00ffb1;
}
.navbar-toggler {
  background-color: #00ffb1;
  opacity: 0.8;
}
.router-title {
  color: #00ffb1;
  text-decoration: none;
  transition: 0.3s;
}
.router {
  color: #e1e1e1;
  text-decoration: none;
  transition: 0.3s;
}
.router:hover,
.router-title:hover {
  color: #00ce90;
}
.disabled {
  opacity: 0.3;
}
@media (min-width: 992px) {
  .navbar-collapse {
    display: flex;
    justify-content: space-between;
  }
}
</style>
