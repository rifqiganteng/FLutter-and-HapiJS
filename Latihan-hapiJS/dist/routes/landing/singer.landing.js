"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _singer = _interopRequireDefault(require("../../services/singer.service"));

var _fileSystem = _interopRequireDefault(require("file-system"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Joi = require('@hapi/joi');

var singerService = new _singer["default"]();
var singer = [{
  method: 'GET',
  path: '/singers',
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
              return singerService.findAllSinger();

            case 3:
              _context.t1 = _context.sent;
              _context.t2 = {
                statusCode: 201,
                message: 'sucesse',
                singer: _context.t1
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
  path: '/singer/{id}',
  handler: function () {
    var _handler2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(request, response) {
      var singer;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              singer = _objectSpread({}, request.params);
              _context2.next = 3;
              return singerService.findSingerById(singer.idSinger);

            case 3:
              singer = _context2.sent;
              _context2.next = 6;
              return response.response({
                message: 'sucesse',
                status: 201,
                singer: singer
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
}, {
  method: 'GET',
  path: '/bygenre/{idGenre}',
  handler: function () {
    var _handler3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(request, response) {
      var singer;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return singerService.findSingerByIdGenre(request.params.idGenre);

            case 2:
              singer = _context3.sent;
              console.log(" yang ini manaaaaaa", singer);
              _context3.next = 6;
              return response.response({
                message: 'sucesse',
                status: 201,
                singer: singer
              });

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
  }()
}, {
  method: 'POST',
  path: '/singer',
  config: {
    handler: function () {
      var _handler4 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(request, response) {
        var singer;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                singer = _objectSpread({}, request.payload);
                _context4.next = 3;
                return singerService.createSinger(singer);

              case 3:
                singer = _context4.sent;
                _context4.next = 6;
                return response.response({
                  status: 201,
                  message: 'sucesse',
                  singer: singer
                }).code(201);

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 7:
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
    validate: {
      payload: Joi.object({
        artistName: Joi.string().max(100).required(),
        birthPlace: Joi.string().max(100).required(),
        birthDate: Joi.date(),
        profile: Joi.string().max(300),
        genre: Joi.string().max(100)
      })
    }
  }
}, {
  method: 'POST',
  path: '/singerimage',
  handler: function () {
    var _handler5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(request, h) {
      var data, singer, dataSinger, name, path, file;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              data = request.payload;
              singer = JSON.parse(data.singer);
              _context5.next = 4;
              return singerService.createSinger(singer);

            case 4:
              dataSinger = _context5.sent;
              console.log(dataSinger);

              if (data.file) {
                name = dataSinger.idSinger;
                path = "/var/www/html/image/" + name + ".jpg";
                file = _fileSystem["default"].createWriteStream(path);
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

              return _context5.abrupt("return", dataSinger);

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
}, {
  method: 'PUT',
  path: '/singer',
  handler: function () {
    var _handler6 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6(request, h) {
      var data, singer, dataSinger, name, path, file;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              data = request.payload;
              singer = JSON.parse(data.singer);
              _context6.next = 4;
              return singerService.updateSinger(singer);

            case 4:
              dataSinger = _context6.sent;
              console.log(dataSinger);

              if (data.file) {
                name = dataSinger.idSinger;
                path = "/var/www/html/image/" + name + ".jpg";
                file = _fileSystem["default"].createWriteStream(path);
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

              return _context6.abrupt("return", dataSinger);

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function handler(_x11, _x12) {
      return _handler6.apply(this, arguments);
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
var _default = singer;
exports["default"] = _default;