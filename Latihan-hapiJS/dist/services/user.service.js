"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var _user = _interopRequireDefault(require("../model/user.model"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var UserService =
/*#__PURE__*/
function () {
  function UserService() {
    (0, _classCallCheck2["default"])(this, UserService);
  }

  (0, _createClass2["default"])(UserService, [{
    key: "encriptPassword",
    value: function encriptPassword(password) {
      var salt = _bcrypt["default"].genSaltSync();

      return _bcrypt["default"].hashSync(password, salt);
    }
  }, {
    key: "userRepository",
    value: function userRepository() {
      return (0, _typeorm.getRepository)(_user["default"]);
    }
  }, {
    key: "getAllUser",
    value: function () {
      var _getAllUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.userRepository().find();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAllUser() {
        return _getAllUser.apply(this, arguments);
      }

      return getAllUser;
    }()
  }, {
    key: "getUserById",
    value: function () {
      var _getUserById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.userRepository().findOne(id);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUserById(_x) {
        return _getUserById.apply(this, arguments);
      }

      return getUserById;
    }()
  }, {
    key: "getByUsername",
    value: function () {
      var _getByUsername = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(username) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.userRepository().findAllSinger(username);

              case 2:
                return _context3.abrupt("return", username = _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getByUsername(_x2) {
        return _getByUsername.apply(this, arguments);
      }

      return getByUsername;
    }()
  }, {
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(users) {
        var _users, password;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _users = users, password = _users.password;
                _context4.next = 3;
                return this.encriptPassword(password);

              case 3:
                users.password = _context4.sent;
                console.log("USER", users);
                _context4.next = 7;
                return this.userRepository().save(users);

              case 7:
                users = _context4.sent;

                if (users) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt("return", _boom["default"].forbidden("failed create user "));

              case 10:
                return _context4.abrupt("return", users);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function createUser(_x3) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(usersUpdate) {
        var userId;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getUserById(usersUpdate.idUser);

              case 2:
                userId = _context5.sent;
                this.userRepository().merge(userId, usersUpdate);
                _context5.next = 6;
                return this.userRepository().save(userId);

              case 6:
                return _context5.abrupt("return", _context5.sent);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateUser(_x4) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }()
  }]);
  return UserService;
}();

var _default = UserService;
exports["default"] = _default;