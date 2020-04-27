"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var GenreModel = function GenreModel(idGenre, genreName, user) {
  (0, _classCallCheck2["default"])(this, GenreModel);
  this.idGenre = idGenre;
  this.genreName = genreName;
  this.user = user;
};

var _default = GenreModel;
exports["default"] = _default;