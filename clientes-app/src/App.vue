<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Gestión de Clientes</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Listado</v-btn>
      <v-btn to="/crear" text>Crear Cliente</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app color="primary" dark>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }} Gestión de Clientes</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
}
</style>
