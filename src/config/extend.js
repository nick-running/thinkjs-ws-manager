const view = require('think-view');
const model = require('think-model');
const cache = require('think-cache');
const session = require('think-session');
const websocket = require('think-websocket');

module.exports = [
  websocket(think.app),
  view, // make application support view
  model(think.app),
  cache,
  session
];
