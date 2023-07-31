"use strict";

require("regenerator-runtime");
var _server = _interopRequireDefault(require("./server.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = process.env.PORT || 4000;
var handleListening = function handleListening() {
  return console.log("\u2705 Server listening on http://localhost:".concat(PORT));
};
_server["default"].listen(PORT, handleListening);