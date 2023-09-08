import { createRouter, createWebHistory } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const SourcePage = () => import('@/pages/SourcePage.vue')
const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        path: 'source',
        component: SourcePage,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/components/NotFound.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})
router.afterEach(() => {
  nprogress.done()
})
export default router
