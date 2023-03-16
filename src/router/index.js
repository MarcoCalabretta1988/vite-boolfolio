import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue'
import ContactPage from '../pages/ContactPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'
const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contacts', name: 'contact', component: ContactPage },
        { path: '/projects/:id', name: 'project-detail', component: ProjectDetail },
        { path: '/:pathMatch(.*)*', component: NotFoundPage }
    ]
})

export { router };