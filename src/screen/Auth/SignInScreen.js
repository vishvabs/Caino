/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,ScrollView, SafeAreaView, Image, Alert} from 'react-native';


function SignInScreen({navigation, route}) {

  // const _loginPressed = async () => {
  //   const result = await  _getLogin(username,password);
  // };


  // const _getLogin = async (logId,pass) => {
  //   try {
  //     let results;
  //     fetch('http://10.0.2.2:8082/oauth/token?username=' + logId + '&password=' + pass + '&grant_type=password',
  //     {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': 'Basic ' + Buffer.from('fine_manager:pin').toString('base64'),
  //         },
  //         body: JSON.stringify({
  //             username: logId,
  //             password: pass,
  //             grant_type: 'password',
  //         }),
  //     }
  //     ).then((response) => response.json())
  //     .then((responseJson) => {

  //         const reply = responseJson;

  //          if (!reply.accountNonLocked && reply.accountNonLocked !== undefined){
  //           console.warn(JSON.stringify(responseJson));
  //           createAlert('Account is Locked. Please wait For approvals');
  //         }
  //         else if (reply.error){
  //           console.warn(JSON.stringify(responseJson));
  //           createAlert(reply.error_description);
  //         }

  //         else if (reply.access_token === null || reply.access_token === undefined){
            
  //           createAlert('User Name or Password Incorrect');
  //         }
  //         else if (reply.access_token !== null || reply.access_token !== undefined){
  //           let loginData = {username: logId, accesstoken: reply.access_token, refreshtoken: reply.refresh_token};
  //           AsyncStorage.setItem('data', JSON.stringify(loginData));
  //           dispatch(updateUser(loginData));
  //         }
  //         else {
  //           createAlert('Login Error, Please contact Us');
  //         }
  //         results = reply;
  //     }).catch((error) => {
  //         alert('Error Occured')
  //         results =  null;
  //     });
  //     return results;
  //    // const reply = await response.json();
  //   }
  //       catch (error){
  //         console.warn(error);
  //         return null;
  //       }
  // };

  // const createAlert = (text) =>
  // Alert.alert(
  //   "Login Error",
  //   "Username or Password Incorrect",
  //   [
  //     {
  //       text: "Ok",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel"
  //     }
  //   ]
  // );


  const onPress = () => navigation.navigate('OnlineCasino');

  const onPress2 = () => navigation.navigate('OnlineSlot');

  const onPress3 = () => navigation.navigate('Bonus');
  const onPress4 = () => navigation.navigate('LeovegasCasino');
  const onPress5 = () => navigation.navigate('888Casino');

  
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <ScrollView>
         
        <View style={styles.card}>
        <TouchableOpacity
        onPress={onPress}
      >
                <Image style={styles.cardImage} source={require('../../assets/images/online-casino.jpg')}/>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
              <TouchableOpacity
        onPress={onPress2}
      >
                <Image style={styles.cardImage} source={require('../../assets/images/online-slot.jpg')}/>
             </TouchableOpacity>
              </View>

              <View style={styles.card}>
              <TouchableOpacity
        onPress={onPress3}
      >
                <Image style={styles.cardImage} source={require('../../assets/images/bonus.jpg')}/>
             </TouchableOpacity>
              </View>

              <View style={styles.card}>

              <TouchableOpacity
        onPress={onPress4}
      >
                <Image style={styles.cardImage} source={require('../../assets/images/leo-vegas-pic.jpg')}/>
            </TouchableOpacity>
              </View>

              <View style={styles.card}>
              <TouchableOpacity
        onPress={onPress5}
      >
                <Image style={styles.cardImage} source={require('../../assets/images/888-casino.png')}/>
             </TouchableOpacity>
              </View>
         
              </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    paddingHorizontal:10,
    shadowColor: '#00000021',
    height: 220,
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    
    backgroundColor:"white"
  },

  cardImage:{
    height: 200,
    width: '100%' ,
  },


});

export default SignInScreen;