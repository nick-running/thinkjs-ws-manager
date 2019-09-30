const Base = require('./base.js');

module.exports = class extends Base {
  constructor(...arg) {
    super(...arg);
  }
  // this.websocket._ultron.id为Websocket通道id，可用于频道管理模式
  
  openAction() {
    console.log('ws open');
    return this.success();
  }
  messageAction() {
    console.log('ws message');
    console.log('this.wsData is: ', JSON.stringify(this.wsData))
    // console.log('message this.websocket is: ', this.websocket)
    console.log('this.websocket is: ', JSON.stringify(this.websocket._ultron.id))
    // console.log(this.wsData);
    return this.success();
  }
  pingAction() {
    console.log('ws pingAction');
    console.log('this.wsData is: ', JSON.stringify(this.wsData))
    // console.log('ping this.websocket is: ', this.websocket)
    this.emit('pong', 'pong pong');
    // console.log(this.wsData);
    return this.success();
  }
  closeAction() {
    console.log('ws close');
    return this.success();
  }
  addUserAction() {
    console.log('addUserAction ...');
    console.log(this.wsData); // this.req.websocketData, 'thinkjs'
    console.log(this.websocket); // this.req.websocket, websocket instance
    console.log(this.isWebsocket); // this.isMethod('WEBSOCKET'), true
    return this.success();
  }
};
