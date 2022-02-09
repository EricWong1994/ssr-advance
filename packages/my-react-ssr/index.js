// 两个命令应该分别为 `npm i react react-dom --save`和`npm i @babel/core @babel/cli @babel/preset-react -D`的吧？
const React = require('react');

const { renderToString } = require('react-dom/server');

const http = require('http');

//组件
class Index extends React.Component {
	constructor(props) {
		super(props);
	}

	handlerClick() {
		alert('一起来玩 react ssr 啊');
	}

	render() {
		return <h1 onClick={this.handlerClick}>click here!</h1>;
	}
}

//服务
http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/html',
	});

	const html = renderToString(<Index />);
	res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React SSR</title>
</head>
<body>
    <div id="root">
       ${html}
    </div>
</body>
</html>`);
}).listen(9001);

console.log('server start. 9001');
