### vite + vue3
```
模仿别人的ui组件库，自己写的个人ui组件库

npm run build

npm login //登录到npm

npm init -y //进入到打包文件初始化包名 name不能重名，不然会报错

npm punlish //上传到npm
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

app.provide('$utils',XUI.EUtils) //引入方法
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

//全局使用方法
let utils = inject("$utils");
let {handleFirstUpperCase}=utils
```
