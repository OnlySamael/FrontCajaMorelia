<template>
    <v-container>
      <v-row justify="center" v-if="cliente">
        <v-col cols="12" md="8" lg="6">
          <v-card>
            <v-card-title class="primary white--text">Editar Cliente</v-card-title>
            <v-card-text>
              <ClienteForm 
                ref="clienteForm"
                :cliente="cliente" 
                @submit="actualizarCliente"
                @cancel="cancelar"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else justify="center">
        <v-col cols="12" class="text-center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import ClienteForm from '@/components/ClienteForm.vue'
  import { mapGetters } from 'vuex'
  
  export default {
    components: {
      ClienteForm // Se registra el componente hijo
    },
    props: {
      id: {
        type: [String, Number], // La ruta le pasa el ID del cliente a editar
        required: true
      }
    },
    data() {
      return {
        cliente: null // Se almacena aquí el cliente que se va a editar
      }
    },
    computed: {
      ...mapGetters('clientes', ['clientePorId'])
        // Mapea el getter clientePorId del módulo 'clientes'
        // Este getter permite obtener un cliente por su ID
    },
    created() {
      this.cargarCliente() // Al crearse el componente, se intenta cargar el cliente
    },
    methods: {
      cargarCliente() {
        const cliente = this.clientePorId(parseInt(this.id)) // Busca el cliente en el store usando el ID que viene como prop
        if (cliente) {
          this.cliente = { ...cliente } // Copia el cliente al estado local
        } else {
          this.$router.push('/') // Si no lo encuentra, redirige al inicio
        }
      },
      actualizarCliente(cliente) { // Envía el cliente actualizado al store
        this.$store.dispatch('clientes/actualizarCliente', cliente)
          .then(() => {
            this.$router.push('/') // Redirige al inicio
            this.$notify({
              type: 'success',
              title: 'Éxito',
              text: 'Cliente actualizado correctamente'
            }) // Muestra una notificación (requiere plugin de notificación)
          })
      },
      cancelar() {
        this.$router.push('/') // Cancela y vuelve al inicio
      }
    }
  }
  </script>