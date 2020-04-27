import {EntitySchema} from "typeorm";
import SongModel from "../../model/song.model";

const SongSchema = new EntitySchema({
    name:'song',
    target:SongModel,
    tableName:'mst_song',
    columns:{
        idSong:{
            name:'id_song',
            primary:true,
            type:'uuid',
            generated:'uuid',
        },
        title:{
            name:'title',
            type: 'varchar',
            nullable: false,
        },
        release:{
            name:'release',
            type: 'date',
            nullable: false,
        }
    },
    relations:{
        singer:{
            target:'SingerModel',
            type:'many-to-one',
            joinColumn:true,
            eager: false,
        }
    }
})
export default SongSchema;