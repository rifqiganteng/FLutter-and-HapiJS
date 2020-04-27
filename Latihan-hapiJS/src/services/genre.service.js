import {getRepository} from "typeorm";
import GenreModel from "../model/genre.model";

class GenreService {
    genreRepository(){
        return getRepository(GenreModel);
    }

    async findAllGenre(){
        return await this.genreRepository().find();

    }
    async findGenreById(id){
        return await this.genreRepository().findOne(id);
    }

    async createGenre(genre){
        return await this.genreRepository().save(genre);
    }

    async updateGenre(genreUpdate){
        let genreId = await this.findGenreById(genreUpdate.idGenre)
        this.genreRepository().merge(genreId, genreUpdate)
        return await this.genreRepository().save(genreId)
    }
}
export default GenreService;