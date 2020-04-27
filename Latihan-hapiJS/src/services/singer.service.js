import {getRepository} from "typeorm";
import SingerModel from "../model/singer.model";

class SingerService {
    singerRepository(){
        return getRepository(SingerModel);
    }

    async findAllSinger(){
        return await this.singerRepository().find();
    }

    async findSingerById(id){
        let singer = await this.singerRepository().findOne(id);
        if(!singer) throw {message: "Data is not exist", status: 401}
        return singer
    }

    async createSinger(singer){
        return await this.singerRepository().save(singer);
    }

    async updateSinger(singerUPdate){
        let singer = await this.findSingerById(singerUPdate.idSinger)
        this.singerRepository().merge(singer, singerUPdate)
        return await this.singerRepository().save(singer);
    }
    async findSingerByIdGenre(idGenre){
        console.log("nyoooooh",idGenre)
        let singer = await this.singerRepository().createQueryBuilder("singer")
            .leftJoinAndSelect("singer.genre","genre")
            .where("genre.idGenre = :idGenre", {idGenre: idGenre})
            .getMany();
        console.log("ini singer",singer)
        return singer
    }

}
export default SingerService;