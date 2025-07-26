# CajaMorelia
#### ClientesApp - Gestión de Clientes con Vue 3, Vuex y Vuetify

## 📋 Descripción

**ClientesApp** es una aplicación sencilla desarrollada con Vue 3, que permite administrar una lista de clientes con las operaciones básicas CRUD (Crear, Leer, Actualizar, Eliminar). Utiliza:

- **Vue 3** con composición basada en opciones (`Options API`)
- **Vuex** para manejo del estado global con módulos y getters
- **Vuetify 3** para la interfaz visual y componentes UI modernos
- **ConfirmDialog** personalizado para confirmaciones de eliminación
- Formularios con validación y manejo de eventos personalizados

---

## 🗂 Estructura de la Aplicación

    src/
    ├── components/
    │ ├── ClienteForm.vue # Formulario reutilizable para crear/editar clientes
    │ ├── ConfirmDialog.vue # Componente de diálogo de confirmación
    │ └── ... # Otros componentes compartidos
    ├── modules/
    │ └── clientes.js # Módulo Vuex para gestión del estado de clientes
    ├── views/
    │ ├── CrearCliente.vue # Vista para crear un nuevo cliente
    │ ├── EditarCliente.vue # Vista para editar un cliente existente
    │ └── ListaClientes.vue # Vista que lista todos los clientes con acciones
    ├── store/
    │ └── index.js # Configuración principal de Vuex con módulos
    └── main.js # Archivo de arranque de la app Vue


## ⚙️ Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/OnlySamael/FrontCajaMorelia.git
   cd clientes-app

2. Instalar dependencias:
    ```bash
    npm install

3. Ejecutar la aplicación en modo desarrollo:
    ```bash
    npm run serve

## 📚 Funcionalidades
 - Lista de clientes con paginación (tabla Vuetify)
 - Crear nuevo cliente con validación en formulario
 - Editar cliente existente cargando datos previos
 - Eliminar cliente con confirmación en diálogo modal
 - Manejo del estado centralizado con Vuex: acciones, mutaciones, getters

## 📖 Descripción técnica de componentes

**ClienteForm.vue**
- Formulario reutilizable para crear o editar cliente.
- Campos con validación: nombre, correo (con formato), teléfono.
- Emite eventos submit y cancel para manejar desde componentes padres.


**ConfirmDialog.vue**
- Componente genérico de diálogo modal para confirmar acciones.
- Controla visibilidad con v-model.
- Emite eventos confirm y cancel.

**ListaClientes.vue**
- Muestra tabla de clientes con acciones para editar o eliminar.
- Usa componente ConfirmDialog para confirmar eliminación.
- Usa Vuex para obtener lista y eliminar clientes.

**CrearCliente.vue y EditarCliente.vue**
- Envoltorios que usan ClienteForm.vue.
- Se conectan con Vuex para agregar o actualizar clientes.
- Controlan navegación con Vue Router.

## 🔧 Configuración de Vuex (clientes.js)
**Estado**: arreglo de clientes con propiedades básicas.

**Mutations**: agregar, actualizar, eliminar cliente.

**Actions**: envían commits a mutations.

**Getters**: obtener todos los clientes o uno por ID.
