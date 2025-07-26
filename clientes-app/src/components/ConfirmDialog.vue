<template>
    <v-dialog v-model="visible" persistent max-width="500">
      <v-card>
        <v-card-title class="headline">{{ titulo }}</v-card-title>
        <v-card-text>{{ mensaje }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="cancelar">Cancelar</v-btn>
          <v-btn color="primary" @click="confirmar">Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    // Props personalizables del componente
    props: {
      // Controla la visibilidad del diálogo
      value: Boolean,
      // Texto del título del diálogo
      titulo: {
        type: String,
        default: 'Confirmar'
      },
      // Mensaje que se mostrará en el cuerpo del diálogo
      mensaje: {
        type: String,
        default: '¿Está seguro?'
      }
    },
    computed: {
      // Enlace bidireccional con v-model
      visible: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('input', value)
        }
      }
    },
    methods: {
      // Confirma la acción y cierra el diálogo
      confirmar() {
        this.$emit('confirm')
        this.visible = false
      },
      // Cancela la acción y cierra el diálogo
      cancelar() {
        this.$emit('cancel')
        this.visible = false
      }
    }
  }
  </script>
  