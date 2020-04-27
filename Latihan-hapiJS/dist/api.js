"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _hapi = _interopRequireDefault(require("@hapi/hapi"));

var _connection = _interopRequireDefault(require("./db/connection"));

var _config = _interopRequireDefault(require("./config"));

var _routes = _interopRequireDefault(require("./routes"));

var _auth = _interopRequireDefault(require("./config/auth.validate"));

process.on('unhandLedRejection', function (err) {
  console.log(err);
  process.exit(1);
});

var _default =
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  var connection, server;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          (0, _config["default"])();
          _context.next = 3;
          return (0, _connection["default"])();

        case 3:
          connection = _context.sent;
          server = _hapi["default"].server({
            // port: process.env.APP_PORT,
            // host: process.env.APP_HOST,
            port: 7070,
            host: "localhost"
          });
          _context.next = 7;
          return server.register(require('@hapi/basic'));

        case 7:
          server.auth.strategy('simple', 'basic', {
            validate: _auth["default"]
          });
          server.route(_routes["default"]);

          if (!connection.isConnected) {
            _context.next = 15;
            break;
          }

          _context.next = 12;
          return server.start();

        case 12:
          console.log("DB connection name ".concat(connection.database));
          console.log(process.env.DB_NAME);
          console.log('Server', process.env.APP_NAME, 'running on', server.info.uri);

        case 15:
          return _context.abrupt("return", server.listener);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

exports["default"] = _default;