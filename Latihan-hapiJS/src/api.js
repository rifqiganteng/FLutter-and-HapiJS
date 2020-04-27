import Hapi from '@hapi/hapi';
import createConnection from './db/connection';
import configure from "./config";
import routes from './routes';
import validate from './config/auth.validate';

process.on('unhandLedRejection', (err) => {
    console.log(err);
    process.exit(1);
});

export default async () => {
    configure();
    const connection = await createConnection();
    const server = Hapi.server({
        // port: process.env.APP_PORT,
        // host: process.env.APP_HOST,
        port: 7070,
        host: "localhost",
    });

    await server.register(require('@hapi/basic'));
    server.auth.strategy('simple', 'basic', {validate});

    server.route(routes);

    if (connection.isConnected) {
        await server.start();
        console.log(`DB connection name ${connection.database}`);
        console.log(process.env.DB_NAME)
        console.log('Server', process.env.APP_NAME, 'running on', server.info.uri);
    }
    return server.listener;
}
