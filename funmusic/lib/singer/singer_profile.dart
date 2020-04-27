import 'package:flutter/material.dart';

class ArtistProfile extends StatelessWidget {
  static String ROUTE_NAME = 'artist_profile';
  var dataSingerOnly = Map();


  ArtistProfile(this.dataSingerOnly);

  @override
  Widget build(BuildContext context) {
    
    
    print("WOoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooY"+dataSingerOnly.toString());

    final alucard = Hero(
      tag: 'hero',
      child: Padding(
        padding: EdgeInsets.all(16.0),
        child: CircleAvatar(
          radius: 72.0,
          backgroundColor: Colors.transparent,
          child:   ClipRRect(
            borderRadius: BorderRadius.all(Radius.circular(100)),
            child: Image.network(
              'http://10.0.2.2:80/image/' + dataSingerOnly['idSinger'] + '.jpg',
              height: 300,
              width: 300,
              fit: BoxFit.fitWidth,
            ),
          ),
        ),
      ),
    );

    final welcome = Padding(
      padding: EdgeInsets.all(8.0),
      child: Text(dataSingerOnly['artistName'],
        style: TextStyle(fontSize: 28.0, color: Colors.white),
      ),
    );

    final lorem = Padding(
      padding: EdgeInsets.all(8.0),
      child: Text( dataSingerOnly['profile'],style: TextStyle(fontSize: 16.0, color: Colors.white),
        textAlign: TextAlign.justify,
      ),
    );

    final body = Container(
      width: MediaQuery.of(context).size.width,
      padding: EdgeInsets.all(28.0),
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: [
          Colors.blue,
          Colors.lightBlueAccent,
        ]),
      ),
      child: Column(
        children: <Widget>[alucard, welcome, lorem],
      ),
    );

    return Scaffold(
//      body: Text('BOOS'),
      body: body,
    );
  }
}