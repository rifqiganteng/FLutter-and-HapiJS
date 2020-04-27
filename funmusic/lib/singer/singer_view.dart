import 'dart:convert';
import 'dart:ui';
import 'package:funmusic/singer/singer_card.dart';
import 'package:flutter/material.dart';
import 'package:funmusic/singer/singer_service.dart';
import 'package:http/http.dart' as http;

class SingerView extends StatefulWidget {
  static const String ROUTENAME = 'singerview';
  String idGenre;
  SingerService singerService;

  SingerView(this.singerService, this.idGenre);

  @override
  State createState() {
    return SingerViewState(singerService, idGenre);
  }
}

class SingerViewState extends State {
  String idGenre;
  Map dataSinger;
  SingerService singerService;
  List singerList = List();

  SingerViewState(this.singerService, this.idGenre);

  fetchSingerByGendre() async {
    http.Response response = await singerService.getDataSingerByIdGenre(idGenre);
    print("22222222222222222222222222 SINGER ");
    dataSinger = jsonDecode(response.body);
    setState(() {
      singerList = dataSinger['singer'];
      print(singerList);

    });
  }

  @override
  void initState() {
    print("1111111111111111111111111111111111");
    this.fetchSingerByGendre();
  }



  @override
  Widget build(BuildContext context) {
    print("3333333333333333333333333333333333");
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.topRight,
              colors: [Colors.purple, Colors.pink]),
        ),
        child: Container(
          margin: EdgeInsetsDirectional.only(top: 120),
          decoration: BoxDecoration(
            color: Colors.blueGrey[50],
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(45.0),
              topRight: Radius.circular(45.0),
            ),
          ),
          child: Container(
            margin: EdgeInsets.only(top: 10, bottom: 10, right: 10, left: 10),
            child: GridView.builder(
                itemCount: singerList.length,
                gridDelegate:
                new SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2),
                itemBuilder: (context, index) {
                  return SingerCard(singerList[index]);
                }),
          ),
        ),
      ),
    );
  }
}
