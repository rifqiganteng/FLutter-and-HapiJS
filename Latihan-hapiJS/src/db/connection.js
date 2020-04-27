import {createConnection as connect} from 'typeorm';
import entities from "./entities";

const createConnection = async () => {
    const connection = await connect(
        {
            // type: process.env.DB_DRIVER,
            // host: process.env.DB_HOST,
            // port: process.env.DB_PORT,
            // username: process.env.DB_USERNAME,
            // password: process.env.DB_PASSWORD,
            // database: process.env.DB_NAME,
            // synchronize: (process.env.DB_SYNC === 'true'),
            // logging: process.env.DB_LOGING,
            //entities: ''
            type : 'postgres',
            host : "localhost",
            port : 5432,
            username : 'postgres',
            password : 'amanullah',
            database : 'music_hapi',
            synchronize : true,
            logging : true,
            entities: Object.values(entities)

        }
    )
    return connection;
}
export default createConnection;