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

var _song = _interopRequireDefault(require("../model/song.model"));

var SongService =
/*#__PURE__*/
function () {
  function SongService() {
    (0, _classCallCheck2["default"])(this, SongService);
  }

  (0, _createClass2["default"])(SongService, [{
    key: "songRepository",
    value: function songRepository() {
      return (0, _typeorm.getRepository)(_song["default"]);
    }
  }, {
    key: "findAllSong",
    value: function () {
      var _findAllSong = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.songRepository().find();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findAllSong() {
        return _findAllSong.apply(this, arguments);
      }

      return findAllSong;
    }()
  }, {
    key: "findSongById",
    value: function () {
      var _findSongById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.songRepository().findOne(id);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findSongById(_x) {
        return _findSongById.apply(this, arguments);
      }

      return findSongById;
    }()
  }, {
    key: "createSong",
    value: function () {
      var _createSong = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(song) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.songRepository().save(song);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function createSong(_x2) {
        return _createSong.apply(this, arguments);
      }

      return createSong;
    }()
  }, {
    key: "updateSong",
    value: function () {
      var _updateSong = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(songUpdate) {
        var song;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.findSongById(songUpdate.idSong);

              case 2:
                song = _context4.sent;
                _context4.next = 5;
                return this.songRepository().merge(song, songUpdate);

              case 5:
                _context4.next = 7;
                return this.songRepository().save(song);

              case 7:
                return _context4.abrupt("return", _context4.sent);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateSong(_x3) {
        return _updateSong.apply(this, arguments);
      }

      return updateSong;
    }()
  }, {
    key: "findSogBySinger",
    value: function () {
      var _findSogBySinger = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(idSinger) {
        var song;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log("nyoooooh", idSinger);
                _context5.next = 3;
                return this.songRepository().createQueryBuilder("song").leftJoinAndSelect("song.singer", "singer").where("singer.idSinger = :idSinger", {
                  idSinger: idSinger
                }).getMany();

              case 3:
                song = _context5.sent;
                console.log("ini singer", song);
                return _context5.abrupt("return", song);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function findSogBySinger(_x4) {
        return _findSogBySinger.apply(this, arguments);
      }

      return findSogBySinger;
    }()
  }]);
  return SongService;
}();

var _default = SongService;
exports["default"] = _default;