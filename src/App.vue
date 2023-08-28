<script setup>
import NavComponent from './components/NavComponent.vue'
</script>

<template>
  <div class="container-fluid cuerpo">
    <NavComponent />
      <!-- transicion de pagina -->
    <transition name="fade">
      <!-- Navega hacia la ruta seleccionada -->
      <RouterView />
    </transition>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: block;
    place-items: center;
  }

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
