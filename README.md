# Vue as React

## 为什么会有这个 Reop

2017 年底的时候，我接到了一个任务：给 [iView](https://www.iviewui.com) 补充 d.ts 文件，以更好地支持 TypeScript。
我思考了很久为什么 Vue 的组件库需要 d.ts，毕竟 Vue 不是基于 JSX 的，对于 template 来讲，d.ts 也没什么用。
于是，我开始尝试用 React 的风格写 Vue，即利用 Vue 的 `render` 撰写组件。

然而，半年以来，我成功实践了 Vue + JavaScript，Vue + TypeScript，Vue + TypeScript + Javascript JSX，就是没有获得过一次良好的 TypeScript JSX 的开发体验😣

**2018.8.10，我终于找到了开启 TSX 大门的钥匙！**

## 用 React 的风格写 Vue 体验如何

**真香！**
