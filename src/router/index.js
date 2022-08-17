import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Experiences from '../components/Experiences.vue'
import Articles from '../components/Articles.vue'
import Contact from '../components/Contact.vue'
import Entreprise from '../components/Entreprise.vue'
import Bilan_stage from '../components/Articles/Bilan_stage.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/', 
            name: 'Home', 
            component: Home
        },
        {
            path: '/About', 
            name: 'About', 
            component: About
        },
        {
            path: '/Articles', 
            name: 'Articles', 
            component: Articles
        },
        {
            path: '/Articles/Bilan_stage', 
            name: 'Bilan_stage', 
            component: Bilan_stage
        },
        {
            path: '/Experiences', 
            name: 'Experiences', 
            component: Experiences
        },
        {
            path: '/Contact', 
            name: 'Contact', 
            component: Contact
        },
        {
            path: '/Entreprise', 
            name: 'Entreprise', 
            component: Entreprise
        }
    ]
})

export default router