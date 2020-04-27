import 'package:http/http.dart' as http;

class GenreService {
  getDataGenre() async {
    return await http.get('http://10.0.2.2:7070/genres');
  }

  getDataGenreById() async {
    return await http.get('http://10.0.2.2:7070/genre/{id}');
  }
}