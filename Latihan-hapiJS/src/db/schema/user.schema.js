import {EntitySchema} from "typeorm";
import UserModel from "../../model/user.model";

const UserSchema = new EntitySchema({
    name: 'user',
    target: UserModel,
    tableName: 'mst_user',
    columns: {
        idUser: {
            name: 'id_user',
            primary: true,
            type: 'uuid',
            generated: 'uuid',
        },
        name: {
            name: 'name',
            type: 'varchar',
            nullable: false,
        },
        email: {
            name: 'email',
            type: 'varchar',
            nullable: false,
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
        },
    },
    relations: {
        genre: {
            target: 'GenreModel',
            type: 'one-to-many',
            inverseSide: 'user',
            joinColumn: true,
            cascade: true,
            eager: true,
        }
    }
})
export default UserSchema