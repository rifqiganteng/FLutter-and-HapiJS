import {getRepository} from "typeorm";
import UserModel from "../model/user.model";
import Bcrypt from 'bcrypt';
import Boom from '@hapi/boom';

class UserService{

    encriptPassword(password){
        const salt = Bcrypt.genSaltSync();
        return Bcrypt.hashSync(password,salt);
    }


    userRepository(){
        return getRepository(UserModel)
    }
    async getAllUser(){
        return await this.userRepository().find();
    }
    async getUserById(id){
        return await this.userRepository().findOne(id);
    }
    async getByUsername(username){
        return username = await this.userRepository().findAllSinger(username);
    }
    async createUser(users){
        const {password} = users;
        users.password = await this.encriptPassword(password)
        console.log("USER", users)
        users = await this.userRepository().save(users);
        if(!users) return Boom.forbidden("failed create user ");
        return users
    }
    async updateUser(usersUpdate){
        let userId = await this.getUserById(usersUpdate.idUser)
        this.userRepository().merge(userId, usersUpdate)
        return await this.userRepository().save(userId)
    }
}
export default UserService;