import request from 'supertest';
import Init from '../../src/api';
import UserService from "../../src/services/user.service";

let appTest;
let userService;
const paylod = {
    name: "Aldila Iskandar",
    email: "dila@gmail.com",
    password: "aldi",
    userName: "iskandar"
}
describe('USER LANDING', () => {
    beforeAll(async () => {
        appTest = await Init();
        userService = new UserService();
        await userService.userRepository().clear();
    })

    beforeEach(async () => {
        await userService.userRepository().clear();
    })

    afterEach(async () => {
        if (appTest) {
            appTest.close();
        }
    })

    describe('GET ALL', () => {
        it('"/users" should have 1 length after insert one user', async () => {
            await userService.userRepository().save(paylod)
            const res = await request(appTest)
                .get('/users')
            expect(res.statusCode).toBe(200)
            console.log(res.body)
        })
    })


    describe('GET BY ID', () => {
        it('', async () => {
            const saveUser = await userService.createUser(paylod);
            const res = await request(appTest)
                .get(`/user/${saveUser.idUser}`)
                .auth();
            const actual = await userService.getUserById(saveUser.idUser)
            await expect(res.statusCode).toBe(200)
            console.log(res.body)
            await expect(actual).toMatchObject(
                {
                    idUser: saveUser.idUser,
                    name: saveUser.name,
                    email: saveUser.email,
                    password: saveUser.password,
                    userName: saveUser.userName
                }
            )
        })
    })

})