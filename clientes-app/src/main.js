import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa desde la carpeta
import store from './store'
import vuetify from './plugins/vuetify'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '@mdi/font/css/materialdesignicons.css'


const app = createApp(App)

app.use(store)
app.use(router) // Usa el router importado
app.use(vuetify)
app.use(Toast, {
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
})

app.mount('#app')