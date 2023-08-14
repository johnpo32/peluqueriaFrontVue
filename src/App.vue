<script setup>
</script>

<template>
  <div class="container-fluid cuerpo">
    <header>
      <!-- navbar de navegacion -->
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- rutas -->
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link">
                <RouterLink to="/">Reservas</RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <RouterLink to="/peinados">Peinados</RouterLink>
              </a>
            </li>
            <a class="navbar-brand ms-2" href="#">Uñas y estilos</a>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <RouterLink to="/extensiones">Extensiones</RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <RouterLink to="/estilistas">Estilistas</RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <RouterLink to="/about">Contacto</RouterLink>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Navega hacia la ruta seleccionada -->
    <RouterView />
  </div>
</template>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

a {
  color: black;
}

a:link,
a:visited,
a:active {
  text-decoration: none;
}

@media (min-width: 1024px) {
  header {
    display: block;
    place-items: center;
  }

}</style>
