
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
            SizedBox(height: 16),
            Header(title: '마이페이지'),
            SizedBox(height: 25),
            ClipRRect(
              borderRadius: BorderRadius.circular(50),
              child: Image.asset('assets/images/img_profile.png', width: 60, height: 60,),
            ),
            SizedBox(height: 16),
            ProfileInfoText(title: "이름", content: ""),
            SizedBox(height: 20),
            ProfileInfoText(title: "생년월일", content: ""),
            SizedBox(height: 20),
            ProfileInfoText(title: "학년 반 번호", content: ""),
            SizedBox(height: 20),
            ProfileInfoText(title: "아이디", content: "")
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
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Body6(text: title),
          SizedBox(height: 8),
          Container(
            padding: const EdgeInsets.symmetric(vertical: 9, horizontal: 16),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(8),
              border: Border.all(
                width: 1,
                color: gray200
              ),
            ),
            child: Body4(text: content),
          )
        ],
      ),
    );
  }
}
