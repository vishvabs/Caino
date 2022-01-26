/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';




import {useDispatch} from 'react-redux';

import WebScreen from '../screen/Auth/WebScreen';
// import ProfileScreen from '../screen/Profile/ProfileScreen';


const MainStack = createStackNavigator();

function MainNavigator() {
  const dispatch = useDispatch();
  return (
    <MainStack.Navigator initialRouteName="WebScre">
      <MainStack.Screen name="WebScre" component={WebScreen} options={{headerShown: false}} />
      
    </MainStack.Navigator>
  );

  
}

export default MainNavigator;