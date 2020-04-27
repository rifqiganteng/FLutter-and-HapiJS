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

var _singer = _interopRequireDefault(require("../model/singer.model"));

var SingerService =
/*#__PURE__*/
function () {
  function SingerService() {
    (0, _classCallCheck2["default"])(this, SingerService);
  }

  (0, _createClass2["default"])(SingerService, [{
    key: "singerRepository",
    value: function singerRepository() {
      return (0, _typeorm.getRepository)(_singer["default"]);
    }
  }, {
    key: "findAllSinger",
    value: function () {
      var _findAllSinger = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.singerRepository().find();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findAllSinger() {
        return _findAllSinger.apply(this, arguments);
      }

      return findAllSinger;
    }()
  }, {
    key: "findSingerById",
    value: function () {
      var _findSingerById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        var singer;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.singerRepository().findOne(id);

              case 2:
                singer = _context2.sent;

                if (singer) {
                  _context2.next = 5;
                  break;
                }

                throw {
                  message: "Data is not exist",
                  status: 401
                };

              case 5:
                return _context2.abrupt("return", singer);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findSingerById(_x) {
        return _findSingerById.apply(this, arguments);
      }

      return findSingerById;
    }()
  }, {
    key: "createSinger",
    value: function () {
      var _createSinger = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(singer) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.singerRepository().save(singer);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function createSinger(_x2) {
        return _createSinger.apply(this, arguments);
      }

      return createSinger;
    }()
  }, {
    key: "updateSinger",
    value: function () {
      var _updateSinger = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(singerUPdate) {
        var singer;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.findSingerById(singerUPdate.idSinger);

              case 2:
                singer = _context4.sent;
                this.singerRepository().merge(singer, singerUPdate);
                _context4.next = 6;
                return this.singerRepository().save(singer);

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateSinger(_x3) {
        return _updateSinger.apply(this, arguments);
      }

      return updateSinger;
    }()
  }, {
    key: "findSingerByIdGenre",
    value: function () {
      var _findSingerByIdGenre = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(idGenre) {
        var singer;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log("nyoooooh", idGenre);
                _context5.next = 3;
                return this.singerRepository().createQueryBuilder("singer").leftJoinAndSelect("singer.genre", "genre").where("genre.idGenre = :idGenre", {
                  idGenre: idGenre
                }).getMany();

              case 3:
                singer = _context5.sent;
                console.log("ini singer", singer);
                return _context5.abrupt("return", singer);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function findSingerByIdGenre(_x4) {
        return _findSingerByIdGenre.apply(this, arguments);
      }

      return findSingerByIdGenre;
    }()
  }]);
  return SingerService;
}();

var _default = SingerService;
exports["default"] = _default;