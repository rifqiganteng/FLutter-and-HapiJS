import UserService from "../../src/services/user.service";
import init from '../../src/api';

let userService = new UserService();
let server;

const firstUserPaylod = {
    name: "Aldila Iskandar",
    email: "dila@gmail.com",
    password: "aldi",
    userName: "iskandar"
}
const secondUserPaylod = {
    name: "Aldila Iskandar",
    email: "dila@gmail.com",
    password: "aldi",
    userName: "iskandar"
}

describe('USER TEST', () => {

    beforeEach(async () => {
        server = await init();
        await userService.userRepository().clear();
    });

    afterEach(async () =>{
        if(server){
            server.close();
        }
    })

    /*** GROUPING FOR CREATE USER */
    describe('createUser', () => {
        it('should have length 1 after createUser perform', async () => {
            const savedUser = await userService.createUser(firstUserPaylod);
            const user = await userService.userRepository().find();
            expect(user.length).toBe(1)
        })
    })

    /*** GROUPING FOR FIND BY ID */
    describe('getUserById', () => {
        it('should return one user with idUser', async () => {
            const savedUser = await userService.userRepository().save(firstUserPaylod);
            const user = await userService.getUserById(savedUser.idUser);
            expect(user).toMatchObject({
                idUser: savedUser.idUser,
                name: savedUser.name,
                email: savedUser.email,
                password: savedUser.password,
                userName: savedUser.userName
            })
        })
    })

    /*** GROUPING FOR FIND ALL */
    describe('getAllUser', () => {
        it('should have length 2 when gelAllUser perform', async () => {
            const savedUser = await userService.userRepository().save(firstUserPaylod);
            const savedSecondUser = await userService.userRepository().save(secondUserPaylod);
            const user = await userService.getAllUser();
            expect(user.length).toBe(2)
        })
    })

    /*** GROUPING UPDATE USER */
    describe('updateUser', () => {
        it('savedUserUpdate should have name: "Aldila Iskandar Muda" after updateUser perform', async () => {
            const savedUser = await userService.userRepository().save(firstUserPaylod);
            let userUpdate ={
                idUser: savedUser.idUser,
                name: "Aldila Iskandar muda",
                email: "dila@gmail.com",
                password: "aldi",
                userName: "iskandar"
            }
            const savedUserUpdate = await userService.updateUser(userUpdate);
            expect(savedUserUpdate).toMatchObject({
                idUser: userUpdate.idUser,
                name: userUpdate.name,
                email: userUpdate.email,
                password: userUpdate.password,
                userName: userUpdate.userName
            })
            expect(savedUserUpdate.name).toEqual(userUpdate.name)
        })
    })
})