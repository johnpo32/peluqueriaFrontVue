<template>
    <div class="container mt-5">
        <h1 class="text-center">Listado de Reservas</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Servicio</th>
                    <th>Estilista</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in reservas" :key="item.id">
                    <td>{{ index }}</td>
                    <td>{{ item.cliente }}</td>
                    <td>{{ item.fecha }}</td>
                    <td>{{ item.hora }}</td>
                    <td>{{ item.servicio }}</td>
                    <td>{{ item.estilista }}</td>
                    <td>{{ item.estado }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data: () => ({
        reservas: []
    }),
    mounted() {
        this.getReservas()
    },
    methods: {
        getReservas() {
            this.axios.get('https://test-479f4-default-rtdb.firebaseio.com/reservas.json').then((response) => {
                for (const el in response.data) {
                    this.reservas.push({
                        cliente:response.data[el].cliente,
                        email:response.data[el].email,
                        phone:response.data[el].phone,
                        fecha:response.data[el].fecha,
                        hora:response.data[el].hora,
                        servicio:response.data[el].servicio,
                        estilista:response.data[el].estilista
                    })
                }
            })
        }
    }
}
</script>