export default {
  namespaced: true, // Habilita el namespace para usar: 'clientes/agregarCliente', etc.

  state: {
    // Estado inicial con clientes de ejemplo (puede venir vacío)
    clientes: [
      {
        id: 1,
        nombre: 'Juan Pérez',
        correo: 'juan@example.com',
        telefono: '555-1234'
      },
      {
        id: 2,
        nombre: 'María García',
        correo: 'maria@example.com',
        telefono: '555-5678'
      }
    ]
  },

  mutations: {
    /**
     * Agrega un nuevo cliente al estado
     * @param {Object} state - El estado del módulo
     * @param {Object} cliente - Cliente a agregar
     */
    AGREGAR_CLIENTE(state, cliente) {
      state.clientes.push(cliente)
    },

    /**
     * Actualiza los datos de un cliente existente
     * @param {Object} state
     * @param {Object} clienteActualizado - Cliente con cambios
     */
    ACTUALIZAR_CLIENTE(state, clienteActualizado) {
      const index = state.clientes.findIndex(c => c.id === clienteActualizado.id)
      if (index !== -1) {
        // Reemplaza el cliente en la posición encontrada
        state.clientes.splice(index, 1, clienteActualizado)
      }
    },

    /**
     * Elimina un cliente del estado según su ID
     * @param {Object} state
     * @param {number} id - ID del cliente a eliminar
     */
    ELIMINAR_CLIENTE(state, id) {
      state.clientes = state.clientes.filter(cliente => cliente.id !== id)
    }
  },

  actions: {
    /**
     * Acción para agregar un cliente
     * Genera un ID único usando Date.now()
     */
    agregarCliente({ commit }, cliente) {
      commit('AGREGAR_CLIENTE', {
        id: Date.now(), // Generación simple de ID único (no para producción real)
        ...cliente
      })
    },

    /**
     * Acción para actualizar un cliente
     */
    actualizarCliente({ commit }, cliente) {
      commit('ACTUALIZAR_CLIENTE', cliente)
    },

    /**
     * Acción para eliminar un cliente
     */
    eliminarCliente({ commit }, id) {
      commit('ELIMINAR_CLIENTE', id)
    }
  },

  getters: {
    /**
     * Retorna la lista completa de clientes
     */
    todosLosClientes: state => state.clientes,

    /**
     * Retorna un cliente según su ID
     * @param {number} id
     * @returns {Object|null}
     */
    clientePorId: state => id => state.clientes.find(cliente => cliente.id === id)
  }
}
