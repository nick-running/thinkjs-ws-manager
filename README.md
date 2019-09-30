
Application created by [ThinkJS](http://www.thinkjs.org), [think-websocket-ws](https://github.com/thinkjs/think-websocket-ws)

## 安装依赖

```
npm install
```
## 项目 WebSocket基本配置
WebSocket 是以 extend 的形式集成到 ThinkJS 的，首先要配置 src/config/extend.js:
```
const websocket = require('think-websocket');

module.exports = [
  // ...
  websocket(think.app),
];
```
## WebSocket其它配置
参考[think-websocket-ws](https://github.com/thinkjs/think-websocket-ws)的配置