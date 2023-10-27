# react-issue
记录一些关于react遇到和学习的知识点


## 脚手架create-react-app

### 创建方式1

1. 先全局安装脚手架工具包

```js
npm i -g create-react-app
```

2. 用脚手架工具来创建项目

```js
create-react-app + 项目名称
```

### 创建方式2

> 直接使用npx来创建项目

```js
npx create-react-app + 项目名称
```

> 解释：npx create-react-app 是固定命令，create-react-app 是 React 脚手架的名称

### npx:

1. npx 是 npm v5.2 版本新添加的命令，用来简化 npm 中工具包的使用
2. 没有npx之前：
    - 全局安装npm i -g create-react-app
    - 在通过脚手架的命令来创建 React 项目
3. 有了npx之后
    - npx 调用最新的 create-react-app 直接创建 React 项目


## React脚手架项目工作方式

```js
// 导入react和react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 创建元素
const title = React.createElement('h1', {id:'box'}, 'hello react')

// 渲染react元素(固定写法,将创建的元素渲染到项目中public文件夹下的index.html文件id为'root'的div中)
ReactDOM.render(title, document.getElementById('root'))
```



























