"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _genre = _interopRequireDefault(require("../../model/genre.model"));

var GenreSchema = new _typeorm.EntitySchema({
  name: 'genre',
  target: _genre["default"],
  tableName: 'mst_genre',
  columns: {
    idGenre: {
      name: 'id_genre',
      primary: true,
      type: 'uuid',
      generated: 'uuid'
    },
    genreName: {
      name: 'genre_name',
      type: 'varchar',
      nullable: false
    }
  },
  relations: {
    singer: {
      target: 'SingerModel',
      type: 'one-to-many',
      inverseSide: 'genre',
      joinColumn: true,
      cascade: true,
      eager: true
    },
    user: {
      target: 'UserModel',
      type: 'many-to-one',
      joinColumn: true,
      eager: false
    }
  }
});
var _default = GenreSchema;
exports["default"] = _default;