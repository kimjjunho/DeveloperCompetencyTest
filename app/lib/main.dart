import 'package:developer_compentency_test/feature/login/LoginScreen.dart';
import 'package:flutter/material.dart';
import 'navigator/BottomNavigation.dart';

void main() {
  runApp(
      MaterialApp(
        home: LoginScreen(),
      )
  );
}

// class MyApp extends StatelessWidget {
//   const MyApp({Key? key}) : super(key: key);
//
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       home: Scaffold(
//         backgroundColor: white,
//         bottomNavigationBar: BottomNavigationBar(
//
//         ),
//         ),
//       // home: Scaffold(
//       //     appBar: Header(title: '홈'),
//       //    // bottomNavigationBar: BottomNavigation()
//       // ),
//     );
//   }
// }
