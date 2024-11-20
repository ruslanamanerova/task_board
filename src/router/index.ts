import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/Home_page.vue'
import TaskPage from '@/pages/Task_page.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/task',
    component: TaskPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router