import { createApp } from 'vue'
import App from './components/App/App.vue'
import uiComponents from './ui-components'
import assert from "./index.css"
const app = createApp(App)

uiComponents.map(e => {
    app.component(e.name, e)
})

app.mount('#app')
