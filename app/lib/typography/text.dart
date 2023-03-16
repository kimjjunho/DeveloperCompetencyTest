
import 'package:developer_compentency_test/theme/Color.dart';
import 'package:flutter/cupertino.dart';

TextStyle title1({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.bold,
    fontSize: 24,
  );
}

TextStyle title2({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.bold,
    fontSize: 20,
  );
}

class Title1 extends StatelessWidget {
  final String text;
  final Color? color ;
  const Title1({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: title1(color: color));
  }
}

class Title2 extends StatelessWidget {
  final String text;
  final Color? color;
  const Title2({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: title2(color: color));
  }
}
