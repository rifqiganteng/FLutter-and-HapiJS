import SingerService from "../../src/services/singer.service";
import init from '../../src/api';

const singerService = new SingerService();
let server;

const firsSingerPaylod = {
    artistName: "Jessie J",
    birthPlace: "Ilford",
    birthDate: "1988-03-27",
    profile: "Jessica Ellen Cornish, known professionally as Jessie J, is an English singer and songwriter. Born and raised in London, she began her career on stage, aged 11, with a role in the West End musical Whistle Down the Wind.",

}
const secondSingerPaylod = {
    artistName: "Katy Perry",
    birthPlace: "California",
    birthDate: "1984-10-25",
    profile: "Katheryn Elizabeth Hudson, known professionally as Katy Perry, is an American singer, songwriter, and television judge. After singing in church during her childhood, she pursued a career in gospel music as a teenager.",

}

describe('SINGER TEST', () => {

    beforeEach(async () => {
        server = await init();
        await singerService.singerRepository().clear();
    });

    afterEach(async () => {
        if (server) {
            server.close();
        }
    })

    /*** GROUPING FOR CREATE SINGER */
    describe('createSinger', () => {
        it('should have length 1 after createSInger perform', async () => {
            const savedSinger = await singerService.createSinger(firsSingerPaylod);
            const singer = await singerService.singerRepository().find();
            expect(singer.length).toBe(1)
        })
    })

    /*** GROUPING FOR FIND BY ID */
    describe('findSIngerById', () => {
        it('should return one genre with idSinger ', async () => {
            const savedSinger = await singerService.createSinger(firsSingerPaylod);
            const singer = await singerService.findSingerById(savedSinger.idSinger);
            expect(singer).toMatchObject({
                idSinger: savedSinger.idSinger,
                artistName: savedSinger.artistName,
                birthDate: savedSinger.birthDate,
                birthPlace: savedSinger.birthPlace,
                profile: savedSinger.profile,
            })
        })
    })

    /*** GROUPING FOR FIND ALL */
    describe('findAllGenre', () => {
        it('have length 2 after findAllGenre perform', async () => {
            const saveFirstGenre = await singerService.singerRepository().save(firsSingerPaylod)
            const saveSecondGenre = await singerService.singerRepository().save(secondSingerPaylod)
            const singer = await singerService.findAllSinger()
            expect(singer.length).toBe(2)
        })

    })

    /*** GROUPING FOR UPDATE SINGER */
    describe('updateSinger', () => {
        it('saveSingerUpdate should have genreName: "Jessica Ellen Cornish" after updateSinger perform ', async () => {
            const saveSinger = await singerService.singerRepository().save(firsSingerPaylod)
            let singerUpdate = {
                idSinger: saveSinger.idSinger,
                artistName: 'Jessica Ellen Cornish'
            }
            const saveSingerUpdate = await singerService.updateSinger(singerUpdate);
            expect(saveSingerUpdate).toMatchObject({
                idSinger: singerUpdate.idSinger,
                artistName: singerUpdate.artistName
            })
            expect(saveSingerUpdate.artistName).toEqual(singerUpdate.artistName)
        })
    })

})