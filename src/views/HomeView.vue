<script setup>
</script>

<template>
    <main>
        <!-- formulario de reserva -->
        <form id="contenido-reserva">
            <!-- creo fila -->
            <div class="row">
                <!-- columna relleno -->
                <div class="col-md-4"></div>
                <!-- columna principañ -->
                <div class="col-md-4">
                    <!-- titulo -->
                    <h1>Reservas</h1>
                    <!-- formulario -->
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" required>
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" required>
                    <label for="phone">Teléfono:</label>
                    <input type="tel" id="phone" required>
                    <label for="estilista">Estilista:</label>
                    <select id="estilista" required>
                        <option value="maira">Maira</option>
                        <option value="lilian">Lilian</option>
                    </select>
                    <label for="date">Fecha:</label>
                    <input type="date" id="date" required>
                    <label for="time">Hora:</label>
                    <input type="time" id="time" required>
                    <label for="service">Servicio:</label>
                    <select id="service" required>
                        <option value="corte">Corte de pelo</option>
                        <option value="tinte">Tinte</option>
                        <option value="peinado">Peinado</option>
                    </select>
                    <!-- boton submit -->
                    <button @click="checkForm" type="button" class="btn btn-warning">Reservar</button>
                </div>
                <!-- columna relleno -->
                <div class="col-md-4 historico">
                    <button type="button" class="btn btn-info">
                        <RouterLink to="/historico">Historico</RouterLink>
                    </button>
                </div>
            </div>
        </form>
    </main>
</template>
<script>
import { useAuthStore } from '../stores/token'
export default {
    mounted() {
        if (useAuthStore().token == '')
            this.$router.push({ path: '/login' })

    },
    methods: {
        async checkForm() {
            // Obtiene los valores ingresados por el usuario
            const cliente = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const fecha = document.getElementById('date').value;
            const hora = document.getElementById('time').value;
            const servicio = document.getElementById('service').value;
            const estilista = document.getElementById('estilista').value;

            if (cliente != '' && email != '' && phone != '' && fecha != '' && hora != ''
                && servicio != '' && estilista != '') {
                const datos = {
                    cliente,
                    email,
                    phone,
                    fecha,
                    hora,
                    servicio,
                    estilista
                }

                await this.axios.post('https://test-479f4-default-rtdb.firebaseio.com/reservas.json', datos, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(() => {
                    this.$router.push({ path: '/historico' })
                }).catch((error) => {
                    console.log(error)
                })
            }


        }
    }
}
</script>
<style>
.historico {
    text-align: end;
}
</style>