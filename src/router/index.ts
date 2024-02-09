import {
  createRouter,
  createWebHistory,
  type Router,
  type RouteRecordRaw
} from 'vue-router'

import { modules } from '~/index.ts'

/** Router Rules */
const routes: RouteRecordRaw[] = [...modules.flatMap((module) => module.routes)]

/** Vue Router */
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
