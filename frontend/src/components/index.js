import React from 'react';
import Home from '../components/Home';
import Details from '../components/Details';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Context} from '../context/Context';

const Routes = function ({navigation}) {
  const Stack = createStackNavigator();

  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
};
export default Routes;
