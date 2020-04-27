import GenreService from "../../src/services/genre.service";
import init from '../../src/api';

const genreService = new GenreService();
let server;

const firsGenrePaylod = {
    genreName: 'ROCK'
}
const secondGenrePaylod = {
    genreName: 'POP'
}

describe('GENRE TEST', () => {

    beforeEach(async () => {
        server = await init();
        await genreService.genreRepository().clear();
    });

    afterEach(async () => {
        if (server) {
            server.close();
        }
    })

    /*** GROUPING FOR CREATE GENRE */
    describe('createGenre', () => {
        it('should have length 1 after createGenre perform', async () =>{
          const savedUser = await genreService.createGenre(firsGenrePaylod);
          const user = await genreService.genreRepository().find();
          expect(user.length).toBe(1)
        })
    })

    /*** GROUPING FOR FIND BY ID */
    describe('findById', () => {
        it('should return one genre with idGenre ', async () => {
            const savedGenre = await genreService.createGenre(firsGenrePaylod);
            const genre = await genreService.findGenreById(savedGenre.idGenre);
            expect(genre).toMatchObject({
                idGenre: savedGenre.idGenre,
                genreName: savedGenre.genreName
            })
        })
    })

    /*** GROUPING FOR FIND ALL */
    describe('findAllGenre', () => {
        it('have length 2 after findAllGenre perform', async () => {
            const saveFirstGenre = await genreService.genreRepository().save(firsGenrePaylod)
            const saveSecondGenre = await genreService.genreRepository().save(secondGenrePaylod)
            const genre = await genreService.findAllGenre()
            expect(genre.length).toBe(2)
        })

    })

    /*** GROUPING FOR UPDATE GENRE */
    describe('updateGenre', () => {
        it('saveGenreUpdate should have genreName: "POP Music" after updateGenre perform ', async ()=> {
            const saveGenre = await genreService.genreRepository().save(firsGenrePaylod)
            let genreUpdate = {
                idGenre: saveGenre.idGenre,
                genreName: 'POP Music'
            }
            const saveGenreUpdate = await genreService.updateGenre(genreUpdate);
            expect(saveGenreUpdate).toMatchObject({
                idGenre:genreUpdate.idGenre,
                genreName:genreUpdate.genreName
            })
            expect(saveGenreUpdate.genreName).toEqual(genreUpdate.genreName)
        })
    })

})