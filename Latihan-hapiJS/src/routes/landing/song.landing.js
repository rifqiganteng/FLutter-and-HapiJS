import SongService from "../../services/song.servce";
import fs from "file-system";

const Joi = require('@hapi/joi');

const songService = new SongService();
const song = [
    {
        method: 'GET',
        path: '/songs',
        handler: async (request, response) => {
            return await response.response({
                statusCode: 201,
                message: 'sucesse',
                singer: await songService.findAllSong(),
            })
        }

    },
    {
        method: 'GET',
        path: '/song/{id}',
        handler: async (request, response) => {
            let song = {...request.params}
            song = await songService.findSongById(song.idSong)
            return await response.response({
                message: 'sucesse',
                status: 201,
                song
            })
        }

    },
    {
        method: 'GET',
        path: '/bysinger/{idSinger}',
        handler: async (request, response) => {
            let song= await songService.findSogBySinger(request.params.idSinger)
            console.log(" yang ini manaaaaaa", song)
            return await response.response({
                message: 'sucesse',
                status: 201,
                song
            })
        }

    },
    {
        method: 'POST',
        path: '/song',
        config: {
            handler: async (request, response) => {
                let song = {...request.payload}
                song = await songService.createSong(song);
                return await response.response({
                    status: 201,
                    message: 'sucesse',
                    song
                }).code(201);
            },
            validate: {
                payload: Joi.object({
                    idSong: Joi.string().max(100),
                    title: Joi.string().max(100).required(),
                    release: Joi.date().required(),
                    singer: Joi.string().max(100),
                })
            }
        }
    },
    {
        method: 'POST',
        path: '/songimage',
        handler: async (request, h) => {
            const data = request.payload;
            const song = JSON.parse(data.song);
            let dataSong = await songService.createSong(song);
            console.log(dataSong)
            if (data.file) {
                const name = dataSong.idSong;
                const path = "/var/www/html/image/" + name;
                const file = fs.createWriteStream(path);
                file.on('error', (err) => console.error(err));
                data.file.pipe(file);
                data.file.on('end', (err) => {
                        const ret = {
                            filename: data.file.hapi.filename, headers: data.file.hapi.headers
                        }
                        return JSON.stringify(ret);
                    }
                )
            }
            return dataSong;
        },
        options: {
            payload: {
                output: 'stream',
                parse: true,
                allow: 'multipart/form-data'
            }
        }
    },
    {
        method: 'PUT',
        path: '/song',
        handler: async (request, h) => {
            const data = request.payload;
            const song = JSON.parse(data.song);
            let dataSong = await songService.updateSong(song);
            console.log(dataSong)
            if (data.file) {
                const name = dataSong.idSong;
                const path = "/var/www/html/image/" + name + ".jpg";
                const file = fs.createWriteStream(path);
                file.on('error', (err) => console.error(err));
                data.file.pipe(file);
                data.file.on('end', (err) => {
                        const ret = {
                            filename: data.file.hapi.filename, headers: data.file.hapi.headers
                        }
                        return JSON.stringify(ret);
                    }
                )
            }
            return dataSong;
        },
        options: {
            payload: {
                output: 'stream',
                parse: true,
                allow: 'multipart/form-data'
            }
        }
    },
]
export default song;