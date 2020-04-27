import request from 'supertest';
import Init from '../../src/api';

describe('LANDING', () => {
    let appTest;
    beforeEach(async () => {
        appTest = await Init();
    })

    it('GET / endpoint should return hello message', async () => {
        const res = await request(appTest)
        .get('/')
        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject({
            statusCode: 200,
            message: "hello bradah"
        })
    })
    afterEach(async () =>{
        if(appTest){
            appTest.close();
        }
    })

})