import { useToast } from 'vue-toastification'

const toast = useToast()

export default {
  success(message, title = 'Éxito') {
    toast.success(message, { title })
  },
  error(message, title = 'Error') {
    toast.error(message, { title })
  },
  info(message, title = 'Información') {
    toast.info(message, { title })
  },
  warning(message, title = 'Advertencia') {
    toast.warning(message, { title })
  }
}