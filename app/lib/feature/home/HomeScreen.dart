import 'package:developer_compentency_test/component/Header.dart';
import 'package:developer_compentency_test/theme/Color.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: white,
      body: SafeArea(
        child: Column(
          children: const [
            Header(title: '홈')
          ],
        ),
      ),
    );
  }
}
