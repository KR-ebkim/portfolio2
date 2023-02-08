import App from './App.vue'
import { createApp } from 'vue'
import router from "./router";
import { createPinia } from "pinia";
import VuePdf from 'vue3-pdfjs'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app
.use(createPinia())
.use(router)
.use(VuePdf)
.mount('#app')
