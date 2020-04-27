"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configure;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = require("path");

function configure() {
  if (process.env.NODE_ENV === 'test') {
    _dotenv["default"].config({
      path: (0, _path.resolve)('test.env')
    });
  } else {
    _dotenv["default"].config();
  }

  if (!process.env.APP_NAME) {
    console.log("Environtment file (.env) cannot be found in te root foldr");
    process.exit(1);
  }

  process.env.BASE_PATH = (0, _path.dirname)((0, _path.resolve)('api.js'));
}