import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../screen/Auth/SignInScreen';
import SignUpScreen from '../screen/Auth/SignUpScreen';
import SlotScreen from '../screen/Auth/SlotScreen';
import BonusScreen from '../screen/Auth/BonusScreen';
import VegasScreen from '../screen/Auth/VegasScreen';
import CasinoScreen from '../screen/Auth/CasinoScreen';
import WebScreen from '../screen/Auth/WebScreen';

const AuthStack = createStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Casino">
      <AuthStack.Screen
        name="Casinos"
        component={SignInScreen}
        options={{headerShown: true}}
      />
      <AuthStack.Screen
        name="OnlineCasino"
        component={SignUpScreen}
        options={{headerShown: true}}
      />
      <AuthStack.Screen
        name="OnlineSlot"
        component={SlotScreen}
        options={{headerShown: true}}
      />
       <AuthStack.Screen
        name="Bonus"
        component={BonusScreen}
        options={{headerShown: true}}
      />
       <AuthStack.Screen
        name="LeovegasCasino"
        component={VegasScreen}
        options={{headerShown: true}}
      />
       <AuthStack.Screen
        name="888Casino"
        component={CasinoScreen}
        options={{headerShown: true}}
      />
      <AuthStack.Screen
        name="WebV"
        component={WebScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
