import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:funmusic/genre/genre_card.dart';
import 'package:funmusic/genre/genre_service.dart';

class GenreView extends StatefulWidget {
  static const String ROUTE_NAME = 'genreView';

  GenreService genreService;

  GenreView(this.genreService);

  @override
  State createState() {
    return _GenreViewState(genreService);
  }
}

class _GenreViewState extends State {
  var dataGenre = Map();

  _GenreViewState(this.genreService);

  GenreService genreService;

  terserah() async {
    var response = await genreService.getDataGenre();
    setState(() {
//      print(response.body);
      print("========================================== GENRE ");
      dataGenre = jsonDecode(response.body);
//      dataGenre = List.of(jsonDecode(response.body));
      print(dataGenre);
    });
  }

  @override
  void initState() {
    terserah();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.topRight,
              colors: [Colors.pink, Colors.purple[900]]),
        ),
        child: Container(
          margin: EdgeInsetsDirectional.only(top: 130),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.only(topLeft: Radius.circular(75.0)),
          ),
          child: Container(
            margin: EdgeInsets.only(top: 50, bottom: 10, right: 20, left: 30),
            child: ListView.builder(
                itemCount: dataGenre.length,
                itemBuilder: (context, index) {
                  //return(Text("oke oke oke"));
                  return GenreCard(dataGenre['genre'][index]);
                }),
          ),
        ),
      ),
    );
  }
}
