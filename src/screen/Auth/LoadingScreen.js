/* eslint-disable prettier/prettier */
import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Image} from 'react-native';

//ThirdParty
import CustomSplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import {Transitioning, Transition} from 'react-native-reanimated';

//Redux
import {updateUser} from '../../actions/userActions';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

//Custom Modules
import AuthNavigator from '../../navigator/AuthNavigator';
import MainNavigator from '../..//navigator/MainNavigator';




function LoadingScreen() {
  const ref = useRef();
  const loginStatus = useSelector((state) => state.user.loginStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('loginStatus', loginStatus);

    
    async function getAsyncData() {
    
      try{
        
        console.warn('get login called-----------------------------');
        fetch('http://allinfpp.xyz/myap.php?ba=tki&892=78&i',
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
        }
        ).then((response) => {console.warn(response.status);
        if (response.status === 200){
          dispatch(updateUser(response.status));
         // CustomSplashScreen.hide();
         console.log('update', loginStatus);
        }
        else {
          dispatch(updateUser(null));
          console.log('loginStatus', loginStatus);
        }
        })
        ;
      }
      catch (error){
       
       console.warn(error);
      }
      //Update redux state
      
    }
 

    setTimeout(function(){ 
      CustomSplashScreen.hide();
  

    getAsyncData();
  }, 200);
  });


  ref && ref.current && ref.current.animateNextTransition();
  
  return (
    <NavigationContainer>
    
       <Transitioning.View ref={ref}  style={styles.transitionContainer}> 
       {loginStatus === 1 && <MainNavigator />}
        {loginStatus === 0 && <AuthNavigator />}
       </Transitioning.View> 
    </NavigationContainer>
  );
 
    
}

const styles = StyleSheet.create({
  transitionContainer: {flex: 1, backgroundColor: '#FFFFFF'},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  appImage: {
    width: 150,
    height: 150,
  },
});

export default LoadingScreen;