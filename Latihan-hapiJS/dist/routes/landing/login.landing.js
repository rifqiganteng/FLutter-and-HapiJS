"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _aouth = require("../../aout/aouth");

var verificationUser = (0, _aouth.VerificationUser)();
var LoginRoute = [{
  method: 'POST',
  path: '/login',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(request, response) {
      var _request$payload, username, password, account;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _request$payload = request.payload, username = _request$payload.username, password = _request$payload.password;
              _context.next = 3;
              return verificationUser.verifyAccount(username);

            case 3:
              account = _context.sent;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }

    return handler;
  }()
}];