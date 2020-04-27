import SingerService from "../../services/singer.service";
import fs from "file-system";
const Joi = require('@hapi/joi');


const singerService = new SingerService();
const singer = [
    {
        method: 'GET',
        path: '/singers',
        handler: async (request, response) => {
            return await response.response({
                statusCode: 201,
                message: 'sucesse',
                singer : await singerService.findAllSinger()
            })
        }

    },
    {
        method: 'GET',
        path: '/singer/{id}',
        handler: async (request, response) => {
            let singer = {...request.params}
            singer = await singerService.findSingerById(singer.idSinger)
            return await response.response({
                message: 'sucesse',
                status: 201,
                singer
            })
        }

    },
    {
        method: 'GET',
        path: '/bygenre/{idGenre}',
        handler: async (request, response) => {
            let singer = await singerService.findSingerByIdGenre(request.params.idGenre)
            console.log(" yang ini manaaaaaa", singer)
            return await response.response({
                message: 'sucesse',
                status: 201,
                singer
            })
        }

    },
    {
        method: 'POST',
        path: '/singer',
        config: {
            handler: async (request, response) => {
                let singer = { ...request.payload }
                singer = await singerService.createSinger(singer);
                return await response.response({
                    status: 201,
                    message: 'sucesse',
                    singer
                }).code(201);
            },
            validate: {
                payload: Joi.object ({
                    artistName: Joi.string().max(100).required(),
                    birthPlace: Joi.string().max(100).required(),
                    birthDate: Joi.date(),
                    profile: Joi.string().max(300),
                    genre: Joi.string().max(100)
                })
            }
        }
    },
    {
        method: 'POST',
        path: '/singerimage',
        handler: async (request, h) => {
            const data = request.payload;
            const singer = JSON.parse(data.singer);
            let dataSinger = await singerService.createSinger(singer);
            console.log(dataSinger)
            if (data.file) {
                const name = dataSinger.idSinger;
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
            return dataSinger;
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
        path: '/singer',
        handler: async (request, h) => {
            const data = request.payload;
            const singer = JSON.parse(data.singer);
            let dataSinger = await singerService.updateSinger(singer);
            console.log(dataSinger)
            if (data.file) {
                const name = dataSinger.idSinger;
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
            return dataSinger;
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
export default singer;