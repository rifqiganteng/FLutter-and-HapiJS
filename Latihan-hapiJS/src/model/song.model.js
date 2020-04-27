import singer from "../routes/landing/singer.landing";

class SongModel {
    constructor(idSong, title, release){
        this.idSong = idSong;
        this.title = title;
        this.release = release;
    }
}
export default SongModel;