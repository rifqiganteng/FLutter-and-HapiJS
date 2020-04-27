"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var UserModel = function UserModel(idUser, name, email, password, userName) {
  (0, _classCallCheck2["default"])(this, UserModel);
  this.idUser = idUser;
  this.name = name;
  this.email = email;
  this.password = password;
  this.userName = userName;
};

var _default = UserModel;
exports["default"] = _default;