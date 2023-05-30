import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Main';
import RPS from '../feature/game/1RPS';
import ClickNumber from '../feature/game/2ClickNumber';
import RotateFigure from '../feature/game/3RotateFigure';
import Promise from '../feature/game/4Promise';
import MakeRoad from '../feature/game/5MakeRoad';
import RememberFigure from '../feature/game/6RememberFigure';
import MakePotion from '../feature/game/8MakePotion';
import CatCatch from '../feature/game/7CatCatch';
import Signin from '../feature/sign/Signin';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Signin'
        screenOptions={{ headerShown : false }}
        >
        <Stack.Screen name='Signin' component={Signin}/>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='1' component={RPS}/>
        <Stack.Screen name='2' component={ClickNumber}/>
        <Stack.Screen name='3' component={RotateFigure}/>
        <Stack.Screen name='4' component={Promise}/>
        <Stack.Screen name='5' component={MakeRoad}/>
        <Stack.Screen name='6' component={RememberFigure}/>
        <Stack.Screen name='7' component={CatCatch}/>
        <Stack.Screen name='8' component={MakePotion}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}