import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class SongCard extends StatelessWidget {
  static const String ROUTENAME = 'songcard';
  var dataSOngCard;

  SongCard(this.dataSOngCard);

  @override
  Widget build(BuildContext context) {
    print("nyampe enggakkkkkkkkkkkk"+ dataSOngCard.toString());
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.all(Radius.circular(15)),
        boxShadow: [BoxShadow(
          color: Colors.grey,
          blurRadius: 10.0, // soften the shadow
          spreadRadius: 1.0, //extend the shadow
          offset: Offset(
            2.0, // Move to right 10  horizontally
            2.0, // Move to bottom 10 Vertically
          ),),],
      ),
      margin: EdgeInsets.only(top: 10, left: 10, right: 10),
      height: 90,
      child: Row(
        children: <Widget>[
          Container(
            margin: EdgeInsets.only(right: 15, left: 5),
            height: 80,
            decoration: BoxDecoration(
//              color: Colors.deepOrange,
              borderRadius: BorderRadius.all(Radius.circular(30)),
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.all(Radius.circular(15)),
              child: Image.network(
                'http://10.0.2.2:80/image/' +
                    dataSOngCard['idSong'] +
                    '.jpg',
//              height: 129,
                width: 100,
                fit: BoxFit.fill,
              ),
            ),
          ),
          Container(
            height: 80,
            width: 188,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(10)),
            ),
            child: Text(dataSOngCard['release']),
          ),
        ],
      ),
    );
  }
}
