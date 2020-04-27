import Bcrypt from 'bcrypt';
import UserService from "../services/user.service";

const userService = UserService();

class VerificationUser{
    async verifyAccount(username){
        return await userService.getByUsername(username);
    }
}

async function getCompare() {

}

export {VerificationUser, getCompare};
