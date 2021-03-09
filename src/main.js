import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css?import';
import router from "./router"
import './index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
