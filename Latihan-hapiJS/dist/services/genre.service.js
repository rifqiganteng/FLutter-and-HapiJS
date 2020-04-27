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

var _genre = _interopRequireDefault(require("../model/genre.model"));

var GenreService =
/*#__PURE__*/
function () {
  function GenreService() {
    (0, _classCallCheck2["default"])(this, GenreService);
  }

  (0, _createClass2["default"])(GenreService, [{
    key: "genreRepository",
    value: function genreRepository() {
      return (0, _typeorm.getRepository)(_genre["default"]);
    }
  }, {
    key: "findAllGenre",
    value: function () {
      var _findAllGenre = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.genreRepository().find();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findAllGenre() {
        return _findAllGenre.apply(this, arguments);
      }

      return findAllGenre;
    }()
  }, {
    key: "findGenreById",
    value: function () {
      var _findGenreById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.genreRepository().findOne(id);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findGenreById(_x) {
        return _findGenreById.apply(this, arguments);
      }

      return findGenreById;
    }()
  }, {
    key: "createGenre",
    value: function () {
      var _createGenre = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(genre) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.genreRepository().save(genre);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function createGenre(_x2) {
        return _createGenre.apply(this, arguments);
      }

      return createGenre;
    }()
  }, {
    key: "updateGenre",
    value: function () {
      var _updateGenre = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(genreUpdate) {
        var genreId;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.findGenreById(genreUpdate.idGenre);

              case 2:
                genreId = _context4.sent;
                this.genreRepository().merge(genreId, genreUpdate);
                _context4.next = 6;
                return this.genreRepository().save(genreId);

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateGenre(_x3) {
        return _updateGenre.apply(this, arguments);
      }

      return updateGenre;
    }()
  }]);
  return GenreService;
}();

var _default = GenreService;
exports["default"] = _default;