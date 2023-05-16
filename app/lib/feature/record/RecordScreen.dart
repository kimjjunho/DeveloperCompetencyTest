import 'package:developer_compentency_test/typography/text.dart';
import 'package:flutter/material.dart';

import '../../component/Header.dart';
import '../../theme/Color.dart';

class Record {
  final String title;
  final String date;
  final int gameCount;
  final int gameCorrect;

  const Record({
    required this.title,
    required this.date,
    required this.gameCount,
    required this.gameCorrect,
  });
}

class RecordScreen extends StatefulWidget {
  const RecordScreen({super.key});

  @override
  RecordScreenState createState() => RecordScreenState();
}

class RecordScreenState extends State<RecordScreen> with TickerProviderStateMixin {
  final List<Tab> recordTab= <Tab>[
    Tab(text: '리스트'),
    Tab(text: '그래프'),
  ];

  final List<Record> recordList = [
    Record(title: "가위바위보", date: "2023-03-23", gameCount: 5, gameCorrect: 3)
  ];

  late TabController _tabController;

  @override
  void initState() {
    _tabController = TabController(
      length: 2,
      vsync: this,
    );
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: recordTab.length,
        child: Scaffold(
          backgroundColor: white,
          body: SafeArea(
            child: Column(
              children: [
                Header(title: '기록'),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                      margin: EdgeInsets.symmetric(horizontal: 16),
                      height: 44,
                      decoration: BoxDecoration(
                        color: green200,
                        borderRadius: BorderRadius.circular(22),
                      ),
                      child: TabBar(
                        indicatorPadding: EdgeInsets.all(4),
                        indicator: BoxDecoration(
                          color: white,
                          borderRadius: BorderRadius.circular(22),
                        ),
                        labelColor: green600,
                        unselectedLabelColor: white,
                        tabs: recordTab,
                        controller: _tabController,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 16),
                Expanded(
                    child: TabBarView(
                      controller: _tabController,
                      children: [
                        ListView.builder(
                            itemCount: recordList.length,
                            shrinkWrap: true,
                            padding: EdgeInsets.symmetric(horizontal: 16),
                            itemBuilder: (BuildContext context, int index) {
                              return RecordItem(record: recordList[index]);
                            }
                        ),
                        Container(child: Body3(text: '2',),)
                      ],
                    )
                )
              ],
            ),
          )
        )
    );
  }
}

class RecordItem extends StatelessWidget {
  final Record record;

  const RecordItem({Key? key, required this.record}) : super(key: key);

  @override
  Widget build(BuildContext context) {
      return Container(
        height: 60,
        margin: EdgeInsets.symmetric(horizontal: 16),
        decoration: BoxDecoration(
          color: white,
          borderRadius: BorderRadius.circular(5),
          boxShadow: const [
            BoxShadow(
              color: gray300,
              spreadRadius: 1,
              blurRadius: 5,
              offset: Offset(0,3)
            )
          ]
        ),
        child: Row(
          children: [
            SizedBox(width: 16),
            Body3(text: record.title),

          ],
        ),
      );
  }
}

