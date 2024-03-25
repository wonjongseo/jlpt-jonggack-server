"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _jlpt_datas = require("./jlpt_datas");
var _kangi_datas = require("./kangi_datas");
var _grammar_datas = require("./grammar_datas");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.get("/", function (req, res, next) {
  var data = req.query.data;
  //   console.log(jsonN1Words);

  console.log("----Called----");
  console.log(data);
  var result;
  if (data === "N1-voca") {
    result = _jlpt_datas.jsonN1Words;
  } else if (data === "N2-voca") {
    result = _jlpt_datas.jsonN2Words;
  } else if (data === "N3-voca") {
    result = _jlpt_datas.jsonN3Words;
  } else if (data === "N4-voca") {
    result = _jlpt_datas.jsonN4Words;
  } else if (data === "N5-voca") {
    result = _jlpt_datas.jsonN5Words;
  }

  //
  else if (data === "N1-kangi") {
    result = _kangi_datas.jsonN1Kangis;
  } else if (data === "N2-kangi") {
    result = _kangi_datas.jsonN2Kangis;
  } else if (data === "N3-kangi") {
    result = _kangi_datas.jsonN3Kangis;
  } else if (data === "N4-kangi") {
    result = _kangi_datas.jsonN4Kangis;
  } else if (data === "N5-kangi") {
    result = _kangi_datas.jsonN5Kangis;
  } else if (data === "N6-kangi") {
    result = _kangi_datas.jsonN6Kangis;
  }

  //
  else if (data === "N1-grammar") {
    result = _grammar_datas.jsonN1Grammars;
  } else if (data === "N2-grammar") {
    result = _grammar_datas.jsonN2Grammars;
  } else if (data === "N3-grammar") {
    result = _grammar_datas.jsonN3Grammars;
  }
  return res.json({
    data: result
  });
});
var _default = app;
exports["default"] = _default;