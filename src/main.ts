import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PluginState from 'pinia-plugin-persistedstate'
import 'reset-css'
import '@/styles/index.css'
import App from './App.vue'
import router from '@/router'
const app = createApp(App)
const pinia = createPinia()
pinia.use(PluginState)
app.use(router)
app.use(pinia)
app.mount('#app')
