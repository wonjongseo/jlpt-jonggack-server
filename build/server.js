"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _datas = require("./datas");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.get("/", function (req, res, next) {
  var data = req.query.data;
  //   console.log(jsonN1Words);

  console.log("Called");
  var result;
  if (data === "N1-voca") {
    result = _datas.jsonN1Words;
  } else if (data === "N2-voca") {
    result = _datas.jsonN2Words;
  } else if (data === "N3-voca") {
    result = _datas.jsonN3Words;
  } else if (data === "N4-voca") {
    result = _datas.jsonN4Words;
  } else if (data === "N5-voca") {
    result = _datas.jsonN5Words;
  }
  return res.json({
    data: result
  });
});
var _default = app;
exports["default"] = _default;