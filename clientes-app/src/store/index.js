// Importamos la función principal para crear el store de Vuex
import { createStore } from 'vuex'

// Importamos el módulo de clientes
import clientes from './modules/clientes'

// Creamos y exportamos el store principal
export default createStore({
  // Registro de módulos
  modules: {
    // Namespace: 'clientes' → se accede como 'clientes/nombreAccion'
    clientes
  }
})
