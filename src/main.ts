import { createApp } from 'vue'
import Home_page from '@/pages/Home_page.vue'
import router from './router'

createApp(Home_page).use(router).mount('#app')
