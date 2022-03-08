import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Carousel from "v3-carousel";

createApp(App).use(Carousel).use(store).mount('#app')
