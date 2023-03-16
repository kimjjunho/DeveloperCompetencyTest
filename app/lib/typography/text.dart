
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

TextStyle title3({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.normal,
    fontSize: 20,
  );
}

TextStyle body1({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.bold,
    fontSize: 18,
  );
}

TextStyle body2({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.normal,
    fontSize: 18,
  );
}

TextStyle body3({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.bold,
    fontSize: 16,
  );
}

TextStyle body4({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.normal,
    fontSize: 16,
  );
}

TextStyle body5({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.bold,
    fontSize: 14,
  );
}

TextStyle body6({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.normal,
    fontSize: 14,
  );
}

TextStyle detail1({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.bold,
    fontSize: 12,
  );
}

TextStyle detail2({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.normal,
    fontSize: 12,
  );
}

TextStyle detail3({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.bold,
    fontSize: 10,
  );
}

TextStyle detail4({Color? color}) {
  return TextStyle(
    color: color ?? gray900,
    fontFamily: 'notosans',
    fontWeight: FontWeight.normal,
    fontSize: 10,
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

class Title3 extends StatelessWidget {
  final String text;
  final Color? color;
  const Title3({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: title3(color: color));
  }
}

class Body1 extends StatelessWidget {
  final String text;
  final Color? color;
  const Body1({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: body1(color: color));
  }
}

class Body2 extends StatelessWidget {
  final String text;
  final Color? color;
  const Body2({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: body2(color: color));
  }
}

class Body3 extends StatelessWidget {
  final String text;
  final Color? color;
  const Body3({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: body3(color: color));
  }
}

class Body4 extends StatelessWidget {
  final String text;
  final Color? color;
  const Body4({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: body4(color: color));
  }
}

class Body5 extends StatelessWidget {
  final String text;
  final Color? color;
  const Body5({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: body5(color: color));
  }
}

class Body6 extends StatelessWidget {
  final String text;
  final Color? color;
  const Body6({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: body6(color: color));
  }
}

class Detail1 extends StatelessWidget {
  final String text;
  final Color? color;
  const Detail1({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: detail1(color: color));
  }
}

class Detail2 extends StatelessWidget {
  final String text;
  final Color? color;
  const Detail2({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: detail2(color: color));
  }
}

class Detail3 extends StatelessWidget {
  final String text;
  final Color? color;
  const Detail3({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: detail3(color: color));
  }
}

class Detail4 extends StatelessWidget {
  final String text;
  final Color? color;
  const Detail4({super.key, required this.text, this.color});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: detail4(color: color));
  }
}
