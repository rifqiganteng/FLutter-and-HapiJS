import {getRepository} from "typeorm";
import SongModel from "../model/song.model";

class SongService {
    songRepository(){
        return getRepository(SongModel);
    }

    async findAllSong(){
        return await this.songRepository().find();
    }
    async findSongById(id){
        return await this.songRepository().findOne(id);
    }
    async createSong(song){
        return await this.songRepository().save(song);
    }
    async updateSong(songUpdate){
        let song = await this.findSongById(songUpdate.idSong)
        await this.songRepository().merge(song, songUpdate)
        return await this.songRepository().save(song)
    }
    async findSogBySinger(idSinger){
        console.log("nyoooooh",idSinger)
        let song = await this.songRepository().createQueryBuilder("song")
            .leftJoinAndSelect("song.singer","singer")
            .where("singer.idSinger = :idSinger", {idSinger: idSinger})
            .getMany();
        console.log("ini singer",song)
        return song
    }
}
export default SongService;