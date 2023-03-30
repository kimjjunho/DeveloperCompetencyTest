import 'package:developer_compentency_test/component/Header.dart';
import 'package:developer_compentency_test/feature/game/ExplanationScreen.dart';
import 'package:developer_compentency_test/feature/game/GameType.dart';
import 'package:developer_compentency_test/theme/Color.dart';
import 'package:developer_compentency_test/typography/text.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Game {
  final String title;
  final int gameCount;
  final Color color;
  final GameType gameType;

  const Game({
    required this.title,
    required this.gameCount,
    required this.color,
    required this.gameType,
  });
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  HomeState createState() => HomeState();
}

class HomeState extends State<HomeScreen> {
  List<Game> gameList = const [
    Game(title: "가위바위보", gameCount: 5, color: yellow, gameType: GameType.rockPaperScissors),
    Game(title: "숫자 누르기", gameCount: 5, color: yellow, gameType: GameType.chooseNumber),
    Game(title: "도형 회전하기", gameCount: 5, color: green500, gameType: GameType.rotationFigure),
    Game(title: "약속 정하기", gameCount: 5, color: green500, gameType: GameType.chooseNumber),
    Game(title: "길 만들기", gameCount: 5, color: blue400, gameType: GameType.makeRoad),
    Game(title: "도형 순서 기억하기", gameCount: 5, color: blue400, gameType: GameType.rememberFigure),
    Game(title: "고양이 술래잡기", gameCount: 5, color: red, gameType: GameType.catHideAndSeek),
    Game(title: "마법약 만들기", gameCount: 5, color: red, gameType: GameType.makePotion),
  ];

  @override build(BuildContext context) {
    return Scaffold(
      backgroundColor: white,
      body: SafeArea(
        child: Column(
          children: [
            Header(title: '홈'),
            Expanded(
              child: ListView.builder(
                itemCount: gameList.length,
                shrinkWrap: true,
                padding: EdgeInsets.symmetric(horizontal: 16),
                itemBuilder: (BuildContext context, int index) {
                  return Column(
                    children: [
                      SizedBox(height: 8),
                      Container(
                          height: 130,
                          decoration: BoxDecoration(
                              color: white,
                              borderRadius: BorderRadius.circular(5),
                              boxShadow: const [
                                BoxShadow(
                                    color: gray300,
                                    spreadRadius: 2,
                                    blurRadius: 5,
                                    offset: Offset(0,3)
                                )
                              ]
                          ),
                          child: GameItem(game: gameList[index],)
                      ),
                      SizedBox(height: 8)
                    ],
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class GameItem extends StatelessWidget {
  final Game game;
  const GameItem({super.key, required this.game});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Row(
        children: [
          SizedBox(width: 28),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Body3(text: game.title),
              SizedBox(height: 10,),
              Row(
                children: [
                  GestureDetector(
                    onTap: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context) => ExplanationScreen(gameType: game.gameType)));
                    },
                    child: Detail2(text: "시작", color: green400,),
                  ),
                  Detail2(text: " | ", color: gray300,),
                  Detail2(text: "${game.gameCount.toString()}문제", color: gray600,)
                ],
              )
            ],
          ),
          Expanded(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Container(
                  decoration: BoxDecoration(
                    color: game.color,
                    borderRadius: BorderRadius.circular(50),
                  ),
                  width: 64,
                  height: 64,
                ),
                SizedBox(width: 28,),
              ],
            ),
          )
        ],
      ),
    );
  }
}


