import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import setAuthHeaders from './utils/SetAuthHeaders'

const app = createApp(App)

if(localStorage.token) {
    setAuthHeaders(localStorage.token);
} else {
    setAuthHeaders(false);
}

app.use(router)
app.mount('#app')
