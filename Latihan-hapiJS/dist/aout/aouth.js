"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCompare = getCompare;
exports.VerificationUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _user = _interopRequireDefault(require("../services/user.service"));

var userService = (0, _user["default"])();

var VerificationUser =
/*#__PURE__*/
function () {
  function VerificationUser() {
    (0, _classCallCheck2["default"])(this, VerificationUser);
  }

  (0, _createClass2["default"])(VerificationUser, [{
    key: "verifyAccount",
    value: function () {
      var _verifyAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(username) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return userService.getByUsername(username);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function verifyAccount(_x) {
        return _verifyAccount.apply(this, arguments);
      }

      return verifyAccount;
    }()
  }]);
  return VerificationUser;
}();

exports.VerificationUser = VerificationUser;

function getCompare() {
  return _getCompare.apply(this, arguments);
}

function _getCompare() {
  _getCompare = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getCompare.apply(this, arguments);
}