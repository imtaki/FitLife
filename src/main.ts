import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
library.add(fas, fab)
app.mount('#app')
