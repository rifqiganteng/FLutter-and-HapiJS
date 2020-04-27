import 'package:http/http.dart' as http;

class SongService{

  getDataSongByIdArtist(id) async {
    return await http.get('http://10.0.2.2:7070/bysinger/{$id}');
  }
}