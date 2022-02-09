// /app.js

//web 服务启动入口文件
//这是一个中间件，它用于处理web 请求，实现react ssr，将组件转换为 html字符串

const reactSsr = require('./dist/src/server/middlewares/react-ssr').default;
const Koa = require('koa2');
const koaStatic = require('koa-static');
const path = require('path');

const app = new Koa();

//设置可访问的静态资源，我们把 webpack 打包后的代码放到/dist/static目录下
app.use(koaStatic(path.join(__dirname, './dist/static')));

//react ssr 中间件
app.use(reactSsr);

//启动服务
app.listen(9001);

console.log('server is start .9001');
