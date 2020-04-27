import UserService from "../../services/user.service";
const Joi = require('@hapi/joi');
const fs = require('fs');
const userService = new UserService();
const users = [
    {
        method: 'GET',
        path: '/users',
        handler: async (request, response) => {
            return await response.response({
                statusCode: 201,
                message: 'sucesse',
                users : await userService.getAllUser(),
            })
        }

    },
    {
        method: 'GET',
        path: '/user/{id}',
        handler: async (request, response) => {
            let users = {...request.params}
            users = await userService.getUserById(users.idUser)
            return await response.response({
                message: 'sucesse',
                status: 201,
                users
            })
        }

    },
    // {
    //     method: 'GET',
    //     path: '/user/{username}',
    //     handler: async (request, response) => {
    //         let users = {...request.params}
    //         users = await userService.getByUsername(users.userName)
    //         return await response.response({
    //             message: 'sucesse',
    //             status: 201,
    //             users
    //         })
    //     }
    // },
    {
        method: 'POST',
        path: '/user',
        config: {
            handler: async (request, response) => {
                let users = request.payload
              return await userService.createUser(users);
                return await response.response({
                    status: 201,
                    message: 'sucesse',
                    users
                }).code(201);
            },
            validate: {
                payload: Joi.object ({
                    name: Joi.string().max(100).required(),
                    email: Joi.string().email().max(100).required(),
                    password: Joi.string().max(10).required(),
                    userName: Joi.string().max(10).required(),
                })
            }
        }
    },
    {
        method: 'POST',
        path: '/userimage',
        handler: async (request, h) => {
            const data = request.payload;
            console.log(data)
            const user = JSON.parse(data.user);
            let dataUser = await userService.createUser(user);
            console.log(dataUser)
            if (data.file) {
                const name = dataUser.idUser;
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
            return dataUser;
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
        path: '/user',
        handler: async (request, h) => {
            const data = request.payload;
            const user = JSON.parse(data.user);
            let dataUser = await userService.updateUser(user);
            console.log(dataUser)
            if (data.file) {
                const name = dataUser.idUser;
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
            return dataUser;
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
export default users;