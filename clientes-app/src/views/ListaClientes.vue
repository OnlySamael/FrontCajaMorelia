<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Listado de Clientes
            <v-spacer></v-spacer>
            <v-btn color="primary" to="/crear">Nuevo Cliente</v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="clientes"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon
                  small
                  class="mr-2"
                  @click="editarCliente(item.id)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  small
                  @click="confirmarEliminar(item)"
                >
                  mdi-delete
                </v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <ConfirmDialog
      v-model="dialogVisible"
      :titulo="'Eliminar Cliente'"
      :mensaje="`¿Está seguro de eliminar a ${clienteSeleccionado ? clienteSeleccionado.nombre : ''}?`"
      @confirm="eliminarCliente"
    />
  </v-container>
</template>

<script>
// Importamos helpers de Vuex para acceder a getters y acciones
import { mapGetters, mapActions } from 'vuex'

// Componente de diálogo personalizado para confirmar eliminación
import ConfirmDialog from '@/components/ConfirmDialog.vue'

// Importación explícita (opcional si Vuetify ya lo registra automáticamente)
import { VDataTable } from 'vuetify/components'

export default {
  components: {
    VDataTable,
    ConfirmDialog
  },

  data() {
    return {
      // Columnas para la tabla de datos
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Correo Electrónico', value: 'correo' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'Acciones', value: 'actions', sortable: false }
      ],

      dialogVisible: false,         // Controla si se muestra el diálogo de confirmación
      clienteSeleccionado: null     // Cliente actualmente seleccionado para eliminar
    }
  },

  computed: {
    // Usamos un getter del módulo 'clientes' para obtener la lista completa
    ...mapGetters('clientes', ['todosLosClientes']),

    // Alias para acceder fácilmente en el template
    clientes() {
      return this.todosLosClientes
    }
  },

  methods: {
    // Mapeamos la acción que elimina un cliente
    ...mapActions('clientes', ['eliminarCliente']),

    /**
     * Redirige a la vista de edición del cliente
     * @param {number|string} id - ID del cliente a editar
     */
    editarCliente(id) {
      this.$router.push({ name: 'EditarCliente', params: { id } })
    },

    /**
     * Abre el diálogo de confirmación y guarda el cliente seleccionado
     * @param {Object} cliente - Cliente a eliminar
     */
    confirmarEliminar(cliente) {
      this.clienteSeleccionado = cliente
      this.dialogVisible = true
    },

    /**
     * Ejecuta la eliminación del cliente confirmado
     */
    eliminarCliente() {
      if (this.clienteSeleccionado) {
        // Disparamos la acción Vuex para eliminar por ID
        this.$store.dispatch('clientes/eliminarCliente', this.clienteSeleccionado.id)

        // Cerramos el diálogo y limpiamos la selección
        this.dialogVisible = false
        this.clienteSeleccionado = null
      }
    }
  }
}
</script>