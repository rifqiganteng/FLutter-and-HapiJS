"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _genre = _interopRequireDefault(require("./schema/genre.schema"));

var _singer = _interopRequireDefault(require("./schema/singer.schema"));

var _song = _interopRequireDefault(require("./schema/song.schema"));

var _user = _interopRequireDefault(require("./schema/user.schema"));

var _default = {
  GenreSchema: _genre["default"],
  SingerSchema: _singer["default"],
  SongSchema: _song["default"],
  UserSchema: _user["default"]
};
exports["default"] = _default;