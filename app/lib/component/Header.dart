
import 'package:flutter/material.dart';

import '../theme/Color.dart';
import '../typography/text.dart';

class Header extends StatelessWidget implements PreferredSizeWidget {
  final String title;
  const Header({Key? key, required this.title}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 54,
      width: double.infinity,
      decoration: BoxDecoration(
        color: white
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SizedBox(width: 16),
          Title2(text: title,)
      ]),
    );
  }

  @override
  Size get preferredSize => Size.fromHeight(54);
}
