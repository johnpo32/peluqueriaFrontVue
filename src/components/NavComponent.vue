<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <span v-if="isLogged">
          <a class="navbar-brand">
            <RouterLink to="/">{{ name }}</RouterLink>
          </a>
          <button @click="salir" type="button" class="btn btn-secondary">Salir</button>
        </span>
        <span v-else>
          <a class="navbar-brand">
            <RouterLink to="/login">Login</RouterLink>
          </a>
        </span>
      </b-navbar-nav>
      <b-navbar-nav class="m-auto">
        <!-- rutas -->
        <b-nav-item><RouterLink to="/">Reservas</RouterLink></b-nav-item>
        <b-nav-item><RouterLink to="/peinados">Peinados</RouterLink></b-nav-item>
        <b-navbar-brand href="#">Uñas y estilos</b-navbar-brand>
        <b-nav-item><RouterLink to="/extensiones">Extensiones</RouterLink></b-nav-item>
        <b-nav-item><RouterLink to="/estilistas">Estilistas</RouterLink></b-nav-item>
        <b-nav-item><RouterLink to="/about">Contacto</RouterLink></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { useAuthStore } from '../stores/token'

export default {
  data: () => ({
    usuario: '',
    name: ''
  }),
  computed: {
    isLogged() {
      this.usuario = useAuthStore()
      if (this.usuario.getUser) {
        this.name = this.usuario.getUser.displayName
        return true
      }
    }
  },
  mounted() {
    this.usuario = useAuthStore()
    if (this.usuario.getUser) {
      this.isLogged = true
      this.name = this.usuario.getUser.displayName
    }
  },
  methods: {
    salir() {
      this.usuario.$reset
      location.reload()
    }
  }

}
</script>

<style>
a {
  color: black;
}

a:link,
a:visited,
a:active {
  text-decoration: none;
}
</style>