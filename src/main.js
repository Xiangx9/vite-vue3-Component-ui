import { createApp } from 'vue'
import hljs from 'highlight.js';
import 'highlight.js/styles/color-brewer.css';

import App from './App.vue'



const app = createApp(App)

app.mount('#app')
app.directive('highlight',(el) =>{
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    });
})