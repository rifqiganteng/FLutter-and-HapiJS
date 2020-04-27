"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _song = _interopRequireDefault(require("../../services/song.servce"));

var _fileSystem = _interopRequireDefault(require("file-system"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Joi = require('@hapi/joi');

var songService = new _song["default"]();
var song = [{
  method: 'GET',
  path: '/songs',
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
              return songService.findAllSong();

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
  path: '/song/{id}',
  handler: function () {
    var _handler2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(request, response) {
      var song;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              song = _objectSpread({}, request.params);
              _context2.next = 3;
              return songService.findSongById(song.idSong);

            case 3:
              song = _context2.sent;
              _context2.next = 6;
              return response.response({
                message: 'sucesse',
                status: 201,
                song: song
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
  path: '/bysinger/{idSinger}',
  handler: function () {
    var _handler3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(request, response) {
      var song;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return songService.findSogBySinger(request.params.idSinger);

            case 2:
              song = _context3.sent;
              console.log(" yang ini manaaaaaa", song);
              _context3.next = 6;
              return response.response({
                message: 'sucesse',
                status: 201,
                song: song
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
  path: '/song',
  config: {
    handler: function () {
      var _handler4 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(request, response) {
        var song;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                song = _objectSpread({}, request.payload);
                _context4.next = 3;
                return songService.createSong(song);

              case 3:
                song = _context4.sent;
                _context4.next = 6;
                return response.response({
                  status: 201,
                  message: 'sucesse',
                  song: song
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
        idSong: Joi.string().max(100),
        title: Joi.string().max(100).required(),
        release: Joi.date().required(),
        singer: Joi.string().max(100)
      })
    }
  }
}, {
  method: 'POST',
  path: '/songimage',
  handler: function () {
    var _handler5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(request, h) {
      var data, song, dataSong, name, path, file;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              data = request.payload;
              song = JSON.parse(data.song);
              _context5.next = 4;
              return songService.createSong(song);

            case 4:
              dataSong = _context5.sent;
              console.log(dataSong);

              if (data.file) {
                name = dataSong.idSong;
                path = "/var/www/html/image/" + name;
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

              return _context5.abrupt("return", dataSong);

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
  path: '/song',
  handler: function () {
    var _handler6 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6(request, h) {
      var data, song, dataSong, name, path, file;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              data = request.payload;
              song = JSON.parse(data.song);
              _context6.next = 4;
              return songService.updateSong(song);

            case 4:
              dataSong = _context6.sent;
              console.log(dataSong);

              if (data.file) {
                name = dataSong.idSong;
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

              return _context6.abrupt("return", dataSong);

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
var _default = song;
exports["default"] = _default;