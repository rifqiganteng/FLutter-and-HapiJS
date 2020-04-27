"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _genre = _interopRequireDefault(require("../../services/genre.service"));

var _fileSystem = _interopRequireDefault(require("file-system"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Joi = require('@hapi/joi');

var genreService = new _genre["default"]();
var genre = [{
  method: 'GET',
  path: '/genres',
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
              return genreService.findAllGenre();

            case 3:
              _context.t1 = _context.sent;
              _context.t2 = {
                statusCode: 201,
                message: 'sucesse',
                genre: _context.t1
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
  path: '/genre/{id}',
  handler: function () {
    var _handler2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(request, response) {
      var genre;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              genre = _objectSpread({}, request.params);
              _context2.next = 3;
              return genreService.findGenreById(genre.idGenre);

            case 3:
              genre = _context2.sent;
              _context2.next = 6;
              return response.response({
                message: 'sucesse',
                status: 400,
                genre: genre
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
  method: 'POST',
  path: '/genre',
  config: {
    handler: function () {
      var _handler3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(request, response) {
        var genre;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(_objectSpread({}, request.payload));
                genre = _objectSpread({}, request.payload);
                _context3.next = 4;
                return genreService.createGenre(genre);

              case 4:
                genre = _context3.sent;
                _context3.next = 7;
                return response.response({
                  status: 201,
                  message: 'sucesse',
                  genre: genre
                }).code(201);

              case 7:
                return _context3.abrupt("return", _context3.sent);

              case 8:
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
        genreName: Joi.string().max(100).required(),
        user: Joi.string().max(100)
      })
    }
  }
}, {
  method: 'POST',
  path: '/genreimage',
  handler: function () {
    var _handler4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(request, h) {
      var data, genre, dataGenre, name, path, file;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              data = request.payload;
              genre = JSON.parse(data.genre);
              _context4.next = 4;
              return genreService.createGenre(genre);

            case 4:
              dataGenre = _context4.sent;
              console.log(dataGenre);

              if (data.file) {
                name = dataGenre.idGenre;
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

              return _context4.abrupt("return", dataGenre);

            case 8:
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
  path: '/genre',
  handler: function () {
    var _handler5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5(request, h) {
      var data, genre, dataGenre, name, path, file;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              data = request.payload;
              genre = JSON.parse(data.genre);
              _context5.next = 4;
              return genreService.updateGenre(genre);

            case 4:
              dataGenre = _context5.sent;
              console.log(dataGenre);

              if (data.file) {
                name = dataGenre.idGenre;
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

              return _context5.abrupt("return", dataGenre);

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
var _default = genre;
exports["default"] = _default;