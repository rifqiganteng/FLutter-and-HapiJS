import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:funmusic/song/song_card.dart';
import 'package:funmusic/song/song_service.dart';

class SongView extends StatefulWidget {
  static const String ROUTE_NAME = 'songview';
  String idSinger;
  SongService songService;


  SongView(this.songService, this.idSinger);

  @override
  State createState() {
    return _SongViewState(songService, idSinger);
  }
}

class _SongViewState extends State {
  String idSinger;
  SongService songService;
  var dataSong = Map();
  List datanyaSong = [];


  _SongViewState(this.songService, this.idSinger);

  fetchSongBySinger() async {
    var response = await songService.getDataSongByIdArtist(idSinger);
   setState(() {
     dataSong = jsonDecode(response.body);
     datanyaSong = dataSong['song'];
   });
  }


  @override
  void initState() {
fetchSongBySinger();
  }

  @override
  Widget build(BuildContext context) {
    print(" ini brooooooooooooooooooooooooooooooooooo data song manaa"+dataSong.toString());
    print(" ini id singer nya %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%" + idSinger);
    print ('dataaaaaa soooooooong' + datanyaSong.toString());

    return Scaffold(
      body: Container(
        decoration: BoxDecoration(),
        child: Column(
          children: <Widget>[
            Container(
              height: 150,
              margin: EdgeInsets.only(top: 50, left: 10, right: 10),
              decoration: BoxDecoration(
                gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.topRight,
                    colors: [Colors.purple, Colors.pink]),
                borderRadius: BorderRadius.all(Radius.circular(25.0)),
              ),
            ),
            Container(
              height: 360,
              margin: EdgeInsets.only(left: 10, right: 10, top: 20),
              child: ListView.builder(
                itemCount: datanyaSong.length,
                  itemBuilder: (context, index) {
                  return SongCard(datanyaSong[index]);
                  })
            )
          ],
        ),
      ),
    );
  }
}
