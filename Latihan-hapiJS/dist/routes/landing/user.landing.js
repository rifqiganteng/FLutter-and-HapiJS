"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../../services/user.service"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Joi = require('@hapi/joi');

var fs = require('fs');

var userService = new _user["default"]();
var users = [{
  method: 'GET',
  path: '/users',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(request, response) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = response;
              _context.next = 3;
              return userService.getAllUser();

            case 3:
              _context.t1 = _context.sent;
              _context.t2 = {
                statusCode: 201,
                message: 'sucesse',
                users: _context.t1
              };
              _context.next = 7;
              return _context.t0.response.call(_context.t0, _context.t2);

            case 7:
              return _context.abrupt("return", _context.sent);

            case 8:
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
}, {
  method: 'GET',
  path: '/user/{id}',
  handler: function () {
    var _handler2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(request, response) {
      var users;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              users = _objectSpread({}, request.params);
              _context2.next = 3;
              return userService.getUserById(users.idUser);

            case 3:
              users = _context2.sent;
              _context2.next = 6;
              return response.response({
                message: 'sucesse',
                status: 201,
                users: users
              });

            case 6:
              return _context2.abrupt("return", _context2.sent);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function handler(_x3, _x4) {
      return _handler2.apply(this, arguments);
    }

    return handler;
  }()
}, // {
//     method: 'GET',
//     path: '/user/{username}',
//     handler: async (request, response) => {
//         let users = {...request.params}
//         users = await userService.getByUsername(users.userName)
//         return await response.response({
//             message: 'sucesse',
//             status: 201,
//             users
//         })
//     }
// },
{
  method: 'POST',
  path: '/user',
  config: {
    handler: function () {
      var _handler3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(request, response) {
        var users;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                users = request.payload;
                _context3.next = 3;
                return userService.createUser(users);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                return _context3.abrupt("return", _context3.sent);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function handler(_x5, _x6) {
        return _handler3.apply(this, arguments);
      }

      return handler;
    }(),
    validate: {
      payload: Joi.object({
        name: Joi.string().max(100).required(),
        email: Joi.string().email().max(100).required(),
        password: Joi.string().max(10).required(),
        userName: Joi.string().max(10).required()
      })
    }
  }
}, {
  method: 'POST',
  path: '/userimage',
  handler: function () {
    var _handler4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(request, h) {
      var data, user, dataUser, name, path, file;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              data = request.payload;
              console.log(data);
              user = JSON.parse(data.user);
              _context4.next = 5;
              return userService.createUser(user);

            case 5:
              dataUser = _context4.sent;
              console.log(dataUser);

              if (data.file) {
                name = dataUser.idUser;
                path = "/var/www/html/image/" + name;
                file = fs.createWriteStream(path);
                file.on('error', function (err) {
                  return console.error(err);
                });
                data.file.pipe(file);
                data.file.on('end', function (err) {
                  var ret = {
                    filename: data.file.hapi.filename,
                    headers: data.file.hapi.headers
                  };
                  return JSON.stringify(ret);
                });
              }

              return _context4.abrupt("return", dataUser);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function handler(_x7, _x8) {
      return _handler4.apply(this, arguments);
    }

    return handler;
  }(),
  options: {
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    }
  }
}, {
  method: 'PUT',
  path: '/user',
  handler: function () {
    var _handler5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(request, h) {
      var data, user, dataUser, name, path, file;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              data = request.payload;
              user = JSON.parse(data.user);
              _context5.next = 4;
              return userService.updateUser(user);

            case 4:
              dataUser = _context5.sent;
              console.log(dataUser);

              if (data.file) {
                name = dataUser.idUser;
                path = "/var/www/html/image/" + name;
                file = fs.createWriteStream(path);
                file.on('error', function (err) {
                  return console.error(err);
                });
                data.file.pipe(file);
                data.file.on('end', function (err) {
                  var ret = {
                    filename: data.file.hapi.filename,
                    headers: data.file.hapi.headers
                  };
                  return JSON.stringify(ret);
                });
              }

              return _context5.abrupt("return", dataUser);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function handler(_x9, _x10) {
      return _handler5.apply(this, arguments);
    }

    return handler;
  }(),
  options: {
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    }
  }
}];
var _default = users;
exports["default"] = _default;