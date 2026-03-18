import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Info from '@/views/Info.vue'
import Project01 from '@/views/Project01.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/info',
    name: 'Info',
    component: Info,
  },
  {
    path: '/project01',
    name: 'Project01',
    component: Project01,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
