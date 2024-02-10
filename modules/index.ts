import { buttonRoutes } from '~/router'

interface TModule {
  routes: any[]
  store?: any
}

export const modules: TModule[] = [
  {
    routes: buttonRoutes
  }
]
