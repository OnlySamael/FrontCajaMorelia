<template>
    <!-- Formulario de Vuetify con referencia para validación -->
    <v-form ref="form" @submit.prevent="submit">
      <!-- Campo para el nombre completo con validación -->
      <v-text-field
        v-model="cliente.nombre"                       
        label="Nombre Completo"                        
        :rules="[v => !!v || 'El nombre es requerido']"
        required
      ></v-text-field>
  
      <!-- Campo para correo electrónico con validaciones -->
      <v-text-field
        v-model="cliente.correo"
        label="Correo Electrónico"
        :rules="[
          v => !!v || 'El correo es requerido',          // Obligatorio
          v => /.+@.+\..+/.test(v) || 'El correo debe ser válido' // Formato válido
        ]"
        required
      ></v-text-field>
  
      <!-- Campo para el número de teléfono con validación -->
      <v-text-field
        v-model="cliente.telefono"
        label="Teléfono"
        :rules="[v => !!v || 'El teléfono es requerido']"
        required
      ></v-text-field>
  
      <!-- Botón de guardar -->
      <v-btn type="submit" color="primary" class="mr-4">
        Guardar
      </v-btn>
  
      <!-- Botón de cancelar -->
      <v-btn @click="cancelar" color="secondary">
        Cancelar
      </v-btn>
    </v-form>
  </template>
  
  <script>
  export default {
    // Propiedades que se reciben desde el componente padre
    props: {
      cliente: {
        type: Object,     // Se espera un objeto cliente
        required: true    // Es obligatorio
      }
    },
    methods: {
      // Método para manejar el envío del formulario
      submit() {
        // Validación del formulario usando la referencia
        if (this.$refs.form.validate()) {
          // Emite evento 'submit' al padre con los datos del cliente
          this.$emit('submit', this.cliente)
        }
      },
      // Método para cancelar y emitir evento al padre
      cancelar() {
        this.$emit('cancel')
      }
    }
  }
  </script>
  