import {EntitySchema} from "typeorm";
import GenreModel from "../../model/genre.model";

const GenreSchema = new EntitySchema({
    name:'genre',
    target: GenreModel,
    tableName:'mst_genre',
    columns:{
        idGenre:{
            name:'id_genre',
            primary:true,
            type:'uuid',
            generated:'uuid',
        },
        genreName:{
            name:'genre_name',
            type: 'varchar',
            nullable:false,
        }
    },
    relations:{
        singer:{
            target:'SingerModel',
            type:'one-to-many',
            inverseSide:'genre',
            joinColumn:true,
            cascade:true,
            eager: true,
        },
        user:{
            target:'UserModel',
            type:'many-to-one',
            joinColumn:true,
            eager: false,
        }
    }
})
export default GenreSchema;