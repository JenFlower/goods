import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const form = document.querySelector('.form')
window.addEventListener('scroll', () => {
    if(pageYOffset > 90) {
        form.style.top = '16px'
    }
    else {
        form.style.top = 'initial'
    }
    
})