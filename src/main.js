
import './assets/base.css'
import './assets/bootstrap/bootstrap-grid.min.css'
import './assets/bootstrap/bootstrap-reboot.min.css'
import './assets/bootstrap/bootstrap.min.css'
import './assets/main.css'
import './assets/mbr-additional.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
