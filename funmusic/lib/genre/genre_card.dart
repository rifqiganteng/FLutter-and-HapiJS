import 'package:flutter/material.dart';
import 'package:funmusic/singer/singer_service.dart';
import 'package:funmusic/singer/singer_view.dart';

class GenreCard extends StatelessWidget {
  static const String ROUTENAME = 'genrecard';

  var dataGenreCard;
  GenreCard(this.dataGenreCard);

  @override
  Widget build(BuildContext context) {
    print("==============================="+ dataGenreCard.toString());
    print("ini idGenre nya " + dataGenreCard['idGenre']);

    return Container(
      width: 200,
      child: Card(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(15.0),
        ),
        color: Colors.greenAccent[400],
        elevation: 10,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            ListTile(
              leading: Icon(Icons.account_circle, size: 70),
              title: Text(
                dataGenreCard['genreName'],
                style: TextStyle(color: Colors.black, fontSize: 18),
              ),
            ),
            IconButton(
              color: Colors.deepOrange,
              icon: Icon(Icons.add_a_photo),
              onPressed: () {
                Navigator.pushNamed(context, SingerView.ROUTENAME,
                    arguments: dataGenreCard['idGenre']
//                  MaterialPageRoute(builder: (context) => SingerService(dataGenreCard['genreId'])),
                    );
              },
            )
          ],
        ),
      ),
    );
  }
}
