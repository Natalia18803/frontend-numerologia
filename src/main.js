import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { router } from './router/routes.js'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const myApp = createApp(App)

const pinia = createPinia()

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

myApp.use(pinia)
myApp.use(router)

myApp.mount('#app')
