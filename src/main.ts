import { createMemoryHistory, createRouter } from 'vue-router'
import App from "./App.vue";
import {createApp} from "vue";
import "./style.css"
import Home from './pages/home.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/image', component: ()=>import('./pages/image.vue') },
]
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
