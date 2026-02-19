import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'

/*// Import icon librariesimport '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
*/

const myApp = createApp(App)

const pinia = createPinia()
myApp.use(pinia)
pinia.use(piniaPluginPersistedstate)
myApp.mount('#app')

/*

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

*/


