import 'package:flutter/material.dart';
import 'package:funmusic/genre/genre_card.dart';
import 'package:funmusic/genre/genre_service.dart';
import 'package:funmusic/login/form_login.dart';
import 'package:funmusic/singer/singer_profile.dart';
import 'package:funmusic/song/song_card.dart';
import 'package:funmusic/singer/singer_service.dart';
import 'package:funmusic/singer/singer_view.dart';
import 'package:funmusic/song/song_service.dart';
import './genre/genre_view.dart';
import './song/song_view.dart';

void main() => runApp(MaterialApp(
      title: 'Music Application',
      initialRoute: LoginPage.ROUTE_NAME,
      onGenerateRoute: (RouteSettings settings) {

        var route = <String, WidgetBuilder>{
          LoginPage.ROUTE_NAME: (context) => LoginPage(),
          GenreView.ROUTE_NAME: (context) => GenreView(GenreService()),
          SingerView.ROUTENAME: (context) => SingerView(SingerService(), settings.arguments),
          ArtistProfile.ROUTE_NAME:(context) => ArtistProfile(settings.arguments),
          SongView.ROUTE_NAME: (context) => SongView(SongService(), settings.arguments),
        };

        WidgetBuilder widgetBuilder = route[settings.name];
        return MaterialPageRoute(builder: (context) => widgetBuilder(context));
      },
    ));
