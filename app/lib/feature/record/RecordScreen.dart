import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../component/Header.dart';
import '../../theme/Color.dart';

class RecordScreen extends StatefulWidget {
  const RecordScreen({super.key});

  @override
  RecordScreenState createState() => RecordScreenState();
}

class RecordScreenState extends State<RecordScreen> {
  final List<Tab> recordTab= <Tab>[
    Tab(text: '리스트'),
    Tab(text: '그래프'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: white,
      body: SafeArea(
        child: Column(
          children:  [
            Header(title: '기록'),
            DefaultTabController(
                length: recordTab.length,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    TabBar(tabs: recordTab),
                  ],
                )
            ),
          ],
        ),
      ),
    );
  }
}
