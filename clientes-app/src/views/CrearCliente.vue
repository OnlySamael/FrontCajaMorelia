<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card>
            <v-card-title class="primary white--text">Crear Nuevo Cliente</v-card-title>
            <v-card-text>
              <ClienteForm 
                ref="clienteForm"                
                :cliente="cliente"               
                @submit="crearCliente"           
                @cancel="cancelar"               
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  // Importamos el formulario de cliente reutilizable
  import ClienteForm from '@/components/ClienteForm.vue'
  
  export default {
    components: {
      ClienteForm
    },
  
    data() {
      return {
        // Estado local que representa al cliente en edición/creación
        cliente: {
          nombre: '',       // Campo para el nombre
          correo: '',       // Campo para el correo electrónico
          telefono: ''      // Campo para el teléfono
        }
      }
    },
  
    methods: {
      /**
       * Crea un nuevo cliente usando Vuex y redirige al inicio.
       * @param {Object} cliente - Datos del cliente enviados desde ClienteForm
       */
      crearCliente(cliente) {
        // Despacha la acción del módulo clientes para agregar
        this.$store.dispatch('clientes/agregarCliente', cliente)
          .then(() => {
            // Redirige al inicio después de crear
            this.$router.push('/')
            // Muestra notificación de éxito (requiere plugin de toast)
            this.$toast.success('Cliente creado correctamente', {
              timeout: 2000
            })
          })
      },
  
      /**
       * Cancela la creación y redirige al listado principal
       */
      cancelar() {
        this.$router.push('/')
      }
    }
  }
  </script>
  