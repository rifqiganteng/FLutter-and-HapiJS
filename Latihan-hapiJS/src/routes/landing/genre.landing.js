import GenreService from "../../services/genre.service";

const Joi = require('@hapi/joi');
import fs from 'file-system';


const genreService = new GenreService();
const genre = [
    {
        method: 'GET',
        path: '/genres',
        handler: async (request, response) => {
            return await response.response({
                statusCode: 201,
                message: 'sucesse',
                genre: await genreService.findAllGenre(),
            })
        }
    },
    {
        method: 'GET',
        path: '/genre/{id}',
        handler: async (request, response) => {
            let genre = {...request.params}
            genre = await genreService.findGenreById(genre.idGenre)
            return await response.response({
                message: 'sucesse',
                status: 400,
                genre
            })
        }

    },
    {
        method: 'POST',
        path: '/genre',
        config: {
            handler: async (request, response) => {
                console.log({...request.payload})
                let genre = {...request.payload};
                genre = await genreService.createGenre(genre);
                return await response.response({
                    status: 201,
                    message: 'sucesse',
                    genre
                }).code(201);
            },
            validate: {
                payload: Joi.object({
                    genreName: Joi.string().max(100).required(),
                    user: Joi.string().max(100),
                })
            }
        }
    },
    {
        method: 'POST',
        path: '/genreimage',
        handler: async (request, h) => {
            const data = request.payload;
            const genre = JSON.parse(data.genre);
            let dataGenre = await genreService.createGenre(genre);
            console.log(dataGenre)
            if (data.file) {
                const name = dataGenre.idGenre;
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
            return dataGenre;
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
        path: '/genre',
        handler: async (request, h) => {
            const data = request.payload;
            const genre = JSON.parse(data.genre);
            let dataGenre = await genreService.updateGenre(genre);
            console.log(dataGenre)
            if (data.file) {
                const name = dataGenre.idGenre;
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
            return dataGenre;
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
export default genre;