"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _singer = _interopRequireDefault(require("../routes/landing/singer.landing"));

var SongModel = function SongModel(idSong, title, release) {
  (0, _classCallCheck2["default"])(this, SongModel);
  this.idSong = idSong;
  this.title = title;
  this.release = release;
};

var _default = SongModel;
exports["default"] = _default;