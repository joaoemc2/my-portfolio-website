<template>
  <div class="nav-bar">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand"
          ><router-link class="router-title" to="/"
            >João V Guimarães</router-link
          ></a
        >
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
            <a class="nav-link"
              ><router-link class="router" to="/">Inicio</router-link></a
            >
            <a class="nav-link"
              ><router-link class="router" to="/projetos">Projetos</router-link></a
            >
            <a class="nav-link"
              ><router-link class="router" to="/certificados">Certificados</router-link></a
            >
          </div>
          <!-- <button type="button" class="btn btn-primary btn-contato">
            Entre em contato!
          </button> -->
        </div>
      </div>
    </nav>
  </div>
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
.nav-bar {
  background-color: #252044;
}
.navbar-brand {
  color: #00ffb1;
}
.navbar-toggler {
  background-color: #00ffb110;
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
.router:hover ,.router-title:hover {
  color: #00ce90;
}
/* .btn-contato {
  background-color: #00ffb1;
  border-color: #00ffb1;
  color: #252044;
  font-weight: 500;
} */
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
