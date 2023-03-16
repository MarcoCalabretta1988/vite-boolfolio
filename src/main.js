import { createApp } from 'vue'
import { router } from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin, faGithub, faEye, faRotateLeft)
import App from './App.vue'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app')
