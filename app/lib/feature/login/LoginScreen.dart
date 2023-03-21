
import 'package:developer_compentency_test/typography/text.dart';
import 'package:flutter/material.dart';

import '../../theme/Color.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: green400,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          Container(
            height: 280,
            color: white,
            child: SizedBox.expand(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: const [
                  Detail2(text: "로그인")
                ],
              ),
            )
          )
        ],
      ),
    );
  }
}
