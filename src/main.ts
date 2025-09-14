import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import { createPinia } from 'pinia'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import '../styles/root.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).mount('#app')
