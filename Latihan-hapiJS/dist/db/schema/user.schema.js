"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _user = _interopRequireDefault(require("../../model/user.model"));

var UserSchema = new _typeorm.EntitySchema({
  name: 'user',
  target: _user["default"],
  tableName: 'mst_user',
  columns: {
    idUser: {
      name: 'id_user',
      primary: true,
      type: 'uuid',
      generated: 'uuid'
    },
    name: {
      name: 'name',
      type: 'varchar',
      nullable: false
    },
    email: {
      name: 'email',
      type: 'varchar',
      nullable: false
    },
    password: {
      name: 'password',
      type: 'varchar',
      nullable: false
    },
    userName: {
      name: 'username',
      type: 'varchar',
      nullable: false
    }
  },
  relations: {
    genre: {
      target: 'GenreModel',
      type: 'one-to-many',
      inverseSide: 'user',
      joinColumn: true,
      cascade: true,
      eager: true
    }
  }
});
var _default = UserSchema;
exports["default"] = _default;