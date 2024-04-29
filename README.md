### vit + vue3
```
模仿别人的ui组件库，自己写的个人ui组件库
```

### 快速使用
```
npm install  xiangx--ui --save
```
### 引入
```
import { createApp } from 'vue'
import App from '@/App.vue'
import XUI from 'xiangx--ui'
import 'xiangx--ui/dist/style.css'

const app = createApp(App)
app.use(XUI)
app.mount('#app')
```
### 按需引用
```
import { xButton, xInput } from 'xinlun-ui'
```
### 快速开始

```
<x-button>默认按钮</x-button> 
<x-button type="primary">主要按钮</x-button>
```