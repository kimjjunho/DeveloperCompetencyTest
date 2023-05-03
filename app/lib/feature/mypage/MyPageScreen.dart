
import 'package:developer_compentency_test/typography/text.dart';
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
          children: [
            Header(title: '마이페이지'),
            Body6(text: "")
          ],
        ),
      ),
    );
  }
}

class ProfileInfoText extends StatelessWidget {
  final String title;
  final String content;
  const ProfileInfoText({Key? key, required this.title, required this.content}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            Container(
              margin: EdgeInsets.symmetric(horizontal: 16),
              child: Column(
                children: [
                  Body6(text: title)
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
