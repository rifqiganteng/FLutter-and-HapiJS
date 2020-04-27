import 'package:http/http.dart' as http;

class SingerService {

  getDataSinger() async {
    return await http.get('http://10.0.2.2:7070/artists');
  }

  getDataSingerById() async {
    return await http.get('http://10.0.2.2:7070/artist/{id}');
  }

  getDataSingerByIdGenre(id) async {
    return await http.get('http://10.0.2.2:7070/bygenre/{$id}');
  }

}
