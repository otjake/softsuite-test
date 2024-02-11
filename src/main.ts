import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from "./route";

createApp(App)
    .use(router)
    .component('v-select', vSelect)
    .mount('#app')
