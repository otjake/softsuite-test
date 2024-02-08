import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import router from "./route";

createApp(App).use(router).mount('#app')
