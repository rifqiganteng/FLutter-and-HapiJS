"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _landing = _interopRequireDefault(require("./landing"));

var _singer = _interopRequireDefault(require("./landing/singer.landing"));

var _song = _interopRequireDefault(require("./landing/song.landing"));

var _user = _interopRequireDefault(require("./landing/user.landing"));

var _genreLanding = _interopRequireDefault(require("./landing/genre.landing.js"));

// const routes = [
//     singer
// ];
var _default = [].concat(_landing["default"], _singer["default"], _song["default"], _user["default"], _genreLanding["default"]);

exports["default"] = _default;