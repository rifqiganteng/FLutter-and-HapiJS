import 'package:flutter/material.dart';
import './singer_profile.dart';
import '../song/song_view.dart';

class SingerCard extends StatelessWidget {
  static const String ROUTE_NAME = 'singercard';
  var dataSingerCard;

  SingerCard(this.dataSingerCard);

  @override
  Widget build(BuildContext context) {
    print("******************" + dataSingerCard.toString());

    return Container(
      padding: EdgeInsets.all(5),
      child: Card(
        margin: EdgeInsets.only(left: 0, right: 0),
        elevation: 8,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(32)),
        child: Container(
          padding: EdgeInsets.all(0),
          child: Column(
            children: <Widget>[
              GestureDetector(
                child: Container(
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.only(
                    topRight: Radius.circular(32),
                    topLeft: Radius.circular(32),
                  )),
                  child: ClipRRect(
                    borderRadius:
                        BorderRadius.vertical(top: Radius.circular(32)),
                    child: Image.network(
                      'http://10.0.2.2:80/image/' +
                          dataSingerCard['idSinger'] +
                          '.jpg',
                      height: 129,
                      width: 150,
                      fit: BoxFit.fitWidth,
                    ),
                  ),
                ),
                onTap: () {
                  Navigator.pushNamed(context, SongView.ROUTE_NAME,
                  arguments: dataSingerCard['idSinger']);
                },
              ),
              Container(
                height: 19,
                child: FlatButton(
                  child: Text(dataSingerCard['artistName']),
                  textColor: Colors.indigo[900],
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(32),
                  ),
                  onPressed: () {
                    Navigator.pushNamed(context, ArtistProfile.ROUTE_NAME,
                        arguments: dataSingerCard);
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
