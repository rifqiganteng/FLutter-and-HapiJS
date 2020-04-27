"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var SingerModel = function SingerModel(idSinger, artistName, birthPlace, birthDate, profile) {
  (0, _classCallCheck2["default"])(this, SingerModel);
  this.idSinger = idSinger;
  this.artistName = artistName;
  this.birthPlace = birthPlace;
  this.birthDate = birthDate;
  this.profile = profile;
};

var _default = SingerModel;
exports["default"] = _default;