"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _song = _interopRequireDefault(require("../../model/song.model"));

var SongSchema = new _typeorm.EntitySchema({
  name: 'song',
  target: _song["default"],
  tableName: 'mst_song',
  columns: {
    idSong: {
      name: 'id_song',
      primary: true,
      type: 'uuid',
      generated: 'uuid'
    },
    title: {
      name: 'title',
      type: 'varchar',
      nullable: false
    },
    release: {
      name: 'release',
      type: 'date',
      nullable: false
    }
  },
  relations: {
    singer: {
      target: 'SingerModel',
      type: 'many-to-one',
      joinColumn: true,
      eager: false
    }
  }
});
var _default = SongSchema;
exports["default"] = _default;