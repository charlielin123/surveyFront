import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/survey/demo0001',
      name: 'survey',
      component: () => import('../views/Survey-com.vue')
    },
    {
      path: '/survey/bak',
      name: 'surveyB',
      component: () => import('../views/backView.vue')
    }
  ]
})


export default router
