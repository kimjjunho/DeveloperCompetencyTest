import 'package:developer_compentency_test/component/Header.dart';
import 'package:developer_compentency_test/feature/mypage/MyPageScreen.dart';
import 'package:developer_compentency_test/theme/Color.dart';
import 'package:flutter/material.dart';
import '../feature/home/HomeScreen.dart';
import '../feature/record/RecordScreen.dart';

class BottomNavigation extends StatefulWidget {
  const BottomNavigation({super.key});

  @override
  BottomNavigationState createState() => BottomNavigationState();
}

class BottomNavigationState extends State<BottomNavigation> {
  int currentIndex = 0;
  List<Widget> body = const [
    HomeScreen(),
    RecordScreen(),
    MyPageScreen(),
  ];
  void onTaped(int index) {
    setState(() {
      currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: body[currentIndex],
      backgroundColor: white,
      bottomNavigationBar: BottomNavigationBar(
        onTap: onTaped,
        currentIndex: currentIndex,
        selectedItemColor: green400,
        unselectedItemColor: gray300,
        items: const [
          BottomNavigationBarItem(
            label: '홈',
            icon: Icon(Icons.home),
          ),
          BottomNavigationBarItem(
              label: '기록',
              icon: Icon(Icons.auto_graph)
          ),
          BottomNavigationBarItem(
              label: '마이페이지',
              icon: Icon(Icons.person),
          ),
        ],
      )
    );
  }
}
