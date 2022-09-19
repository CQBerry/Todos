import { createPinia } from 'pinia'
import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import './style/main.scss'

export default ViteSSG(
    App,
    ({app}) => {
      const pinia = createPinia()
      app.use(pinia)
    },
)

console.log('😎 Todos! by CHINQ')