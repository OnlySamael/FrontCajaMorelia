import { createRouter, createWebHistory } from 'vue-router'
import ListaClientes from './views/ListaClientes.vue'
import CrearCliente from './views/CrearCliente.vue'
import EditarCliente from './views/EditarCliente.vue'

const routes = [
  {
    path: '/',
    name: 'ListaClientes',
    component: ListaClientes
  },
  {
    path: '/crear',
    name: 'CrearCliente',
    component: CrearCliente
  },
  {
    path: '/editar/:id',
    name: 'EditarCliente',
    component: EditarCliente,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
