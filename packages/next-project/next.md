```
error - ./src/pages/index/index.scss
Global CSS cannot be imported from files other than your Custom <App>. Due to the Global nature of stylesheets, and to avoid conflicts, Please move all first-party global CSS imports to pages/_app.js. Or convert the import to Component-Level CSS (CSS Modules).
Read more: https://nextjs.org/docs/messages/css-global
```

[css-global | Next.js (nextjs.org)](https://nextjs.org/docs/messages/css-global)



[css - Next.js 全局 CSS 无法从自定义  以外的文件导入 - IT工具网 (coder.work)](https://www.coder.work/article/5920621)





```sh
➜  taro-practise git:(main) ✗ npm i
npm WARN old lockfile 
npm WARN old lockfile The package-lock.json file was created with an old version of npm,
npm WARN old lockfile so supplemental metadata must be fetched from the registry.
npm WARN old lockfile 
npm WARN old lockfile This is a one-time fix-up, please be patient...
npm WARN old lockfile 
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: taro-practice@1.0.0
npm ERR! Found: next@13.1.6
npm ERR! node_modules/next
npm ERR!   next@"^13.1.6" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer next@"^11.1.4" from tarojs-plugin-platform-nextjs@2.0.9
npm ERR! node_modules/tarojs-plugin-platform-nextjs
npm ERR!   tarojs-plugin-platform-nextjs@"^2.0.9" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
```



### 配置

在 Taro 项目的 `config/index.js` 中添加插件。

```
const config = {
    plugins: [
        'tarojs-plugin-platform-nextjs'
    ]
}
```

### 开发环境

```
npx taro build --type nextjs --watch
```

### 生产环境

项目必须先使用以下命令进行编译：

```
npx taro build --type nextjs
```

启动应用：

```
npx taro start -p 10086
```

产出目录下是一个**完整的 Next.js 应用**，你也可直接使用 next 命令启动它：

```
npx next start dist -p 10086
```



### output

```
 outputRoot: `dist/${process.env.TARO_ENV}`,
```



```markdown
dist
└── nextjs
    ├── babel.config.js
    ├── config
    ├── customRoutes.json
    ├── global.d.ts
    ├── next-env.d.ts
    ├── next.config.js
    ├── pages
    ├── postcss.config.js
    ├── src
    └── tsconfig.json
```

/Users/wangshihao/github/mine/taro-practise/dist/nextjs 目录下执行npx taro start -p 10086

error - Invalid project directory provided, no such directory: /Users/wangshihao/github/mine/taro-practise/dist/nextjs/dist/undefined



### 切换output直接输出到dist目录后，

进入dist，npx taro start -p 10086启动

或者直接在最外层执行

npx next start dist -p 10086

```sh
➜  taro-practise git:(main) ✗ npx next start dist -p 10086
ready - started server on 0.0.0.0:10086, url: http://localhost:10086
Error: Could not find a production build in the '/Users/wangshihao/github/mine/taro-practise/dist/.next' directory. Try building your app with 'next build' before starting the production server. https://nextjs.org/docs/messages/production-start-no-build-id
    at NextNodeServer.getBuildId (/Users/wangshihao/github/mine/taro-practise/node_modules/next/dist/server/next-server.js:172:23)
    at new Server (/Users/wangshihao/github/mine/taro-practise/node_modules/next/dist/server/base-server.js:58:29)
```



```
http://localhost:10086/
```

[404: This page could not be found](http://localhost:10086/)

[localhost:10086/pages/index/index](http://localhost:10086/pages/index/index)

显示成功





### 分目录打包后执行

方法一：npx next start dist/nextjs -p 10086



启动项目 进入dist/nextjs目录后执行

npx next start  -p 10086

也能行





下面忽略，指令不应该加 dist/nextjs

但如果进入dist/nextjs启动，则报错

```sh
  nextjs git:(main) ✗ npx next start dist/nextjs -p 10086
error - Invalid project directory provided, no such directory: /Users/wangshihao/github/mine/taro-practise/dist/nextjs/dist/nextjs
```

报错有可能的原因是删除目录后，地址不对，去回收站了，

## 项目

58房贷计算器

[SyMind/Taro-Mortgage-Calculator: 首个 Taro 3 多端统一实例 - 支持 React Native，Weapp，H5。 (github.com)](https://github.com/SyMind/Taro-Mortgage-Calculator)

