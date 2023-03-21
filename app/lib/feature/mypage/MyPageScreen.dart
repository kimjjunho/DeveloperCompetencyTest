
import 'package:flutter/material.dart';

import '../../component/Header.dart';
import '../../theme/Color.dart';

class MyPageScreen extends StatelessWidget {
  const MyPageScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: white,
      body: SafeArea(
        child: Column(
          children: const [
            Header(title: '마이페이지')
          ],
        ),
      ),
    );  }
}
