import 'package:developer_compentency_test/feature/game/cathideandseek/CatHideAndSeekScreen.dart';
import 'package:developer_compentency_test/feature/game/choosenumber/ChooseNumberScreen.dart';
import 'package:developer_compentency_test/feature/game/decidepromise/DecidePromiseScreen.dart';
import 'package:developer_compentency_test/feature/game/makepotion/MakePotionScreen.dart';
import 'package:developer_compentency_test/feature/game/makeroad/MakeRoadScreen.dart';
import 'package:developer_compentency_test/feature/game/rememberfigure/RememberFigureScreen.dart';
import 'package:developer_compentency_test/feature/game/rockpaperscissors/RockPaperScissorsScreen.dart';
import 'package:developer_compentency_test/feature/game/rotationfigure/RotationFigureScreen.dart';
import 'package:flutter/cupertino.dart';

enum GameType{
  rockPaperScissors,
  chooseNumber,
  rotationFigure,
  decidePromise,
  makeRoad,
  rememberFigure,
  catHideAndSeek,
  makePotion,
}

Widget moveToGameScreen(GameType gameType) {
  switch (gameType) {
    case GameType.rockPaperScissors:
      return RockPaperScissorsScreen();
    case GameType.chooseNumber:
      return ChooseNumberScreen();
    case GameType.rotationFigure:
      return RotationFigureScreen();
    case GameType.decidePromise:
      return DecidePromiseScreenScreen();
    case GameType.makeRoad:
      return MakeRoadScreen();
    case GameType.rememberFigure:
      return RememberFigureScreen();
    case GameType.catHideAndSeek:
      return CatHideAndSeekScreen();
    case GameType.makePotion:
      return MakePotionScreen();
  }
}
