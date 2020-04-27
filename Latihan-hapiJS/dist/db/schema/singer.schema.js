"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _singer = _interopRequireDefault(require("../../model/singer.model"));

var SingerSchema = new _typeorm.EntitySchema({
  name: 'singer',
  target: _singer["default"],
  tableName: 'mst_singer',
  columns: {
    idSinger: {
      name: 'id_singer',
      primary: true,
      type: 'uuid',
      generated: 'uuid'
    },
    artistName: {
      name: 'artist_name',
      type: 'varchar',
      nullable: false
    },
    birthPlace: {
      name: 'birth_place',
      type: 'varchar',
      nullable: false
    },
    birthDate: {
      name: 'birth_date',
      type: 'date',
      nullable: false,
      "default": function _default() {
        return 'CURRENT_TIMESTAMP';
      }
    },
    profile: {
      name: 'profile',
      type: 'varchar',
      nullable: false
    }
  },
  relations: {
    genre: {
      target: 'GenreModel',
      type: 'many-to-one',
      joinColumn: true,
      eager: false
    },
    song: {
      target: 'SongModel',
      type: 'one-to-many',
      inverseSide: 'singer',
      joinColumn: true,
      cascade: true,
      eager: true
    }
  }
});
var _default2 = SingerSchema;
exports["default"] = _default2;