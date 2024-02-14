import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'

import 'bootstrap/dist/css/bootstrap.css'
import './styles/main.css'

// Create a global event bus using app.provide
const app = createApp(App)

// Provide the event bus on the app instance
const eventBus = mitt() // Use mitt library to create an event bus
app.config.globalProperties.eventBus = eventBus

app.use(router)
app.mount('#app')
