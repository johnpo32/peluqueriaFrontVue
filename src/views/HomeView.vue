<script setup>
</script>

<template>
    <main>
        <!-- formulario de reserva -->
        <form id="contenido-reserva" @submit="checkForm">
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
                    <button @click="reservationForm" type="submit" class="btn btn-warning">Reservar</button>
                </div>
                <!-- columna relleno -->
                <div class="col-md-4"></div>
            </div>
        </form>
    </main>
</template>
<script>
export default {
    methods: {
        checkForm() {
            // Obtiene los valores ingresados por el usuario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const service = document.getElementById('service').value;

            // Mostrar un mensaje de éxito
            alert('Reserva exitosa! Gracias, ' + name + ', tu reserva para el servicio de ' + service + ' el día ' + date + ' a las ' + time + ' ha sido confirmada.');
        }
    }
}
</script>
