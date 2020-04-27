import {EntitySchema} from "typeorm";
import SingerModel from "../../model/singer.model";
const SingerSchema = new EntitySchema({
    name:'singer',
    target: SingerModel,
    tableName:'mst_singer',
    columns:{
        idSinger:{
            name:'id_singer',
            primary:true,
            type:'uuid',
            generated:'uuid',
        },
        artistName:{
            name:'artist_name',
            type: 'varchar',
            nullable:false,
        },
        birthPlace:{
            name:'birth_place',
            type: 'varchar',
            nullable: false,
        },
        birthDate:{
            name:'birth_date',
            type:'date',
            nullable:false,
            default:() => 'CURRENT_TIMESTAMP',
        },
        profile:{
            name:'profile',
            type:'varchar',
            nullable:false,
        }
    },
    relations:{
        genre:{
            target:'GenreModel',
            type:'many-to-one',
            joinColumn:true,
            eager: false,
        },
        song:{
            target: 'SongModel',
            type: 'one-to-many',
            inverseSide: 'singer',
            joinColumn: true,
            cascade:true,
            eager: true,
        }
    }
})
export default SingerSchema;